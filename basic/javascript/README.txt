Run sourceanalyzer on sample.js by entering the following commands:

$ sourceanalyzer -b sample-js -clean

$ sourceanalyzer -b sample-js sample.js

$ sourceanalyzer -b sample-js -scan -f sample-js.fpr

As with all scripting languages, it is important to translate (that is,
the second command which converts source files into analyzable form)
as many of the input source files as possible at one time. This allows
the translation phase to glean more data from the original sources. In
languages such as C or Java, the source files contain explicit
information about types and externally referenced code and data, which
we must infer for scripting languages.

Now load the result file in Audit Workbench:

$ auditworkbench sample-js.fpr

This should show 3 results, two are cross-site scripting (XSS), the
third is an Open Redirect.

All three results arise from trusting document.cookie.

If this value is tainted, if for instance it is itself malicious javascript,
it may alter the displayed page in arbitrary ways. Since a "browser"
can send anything it likes as a cookie, there's no way to trust this
value.

The assignment of this value to a .href element (line 3) is considered
both a cross-site scripting vulnerability, and an open redirect.
Writing it unvalidated into the displayed document (line 2) is
a classic case of cross-site scripting.

