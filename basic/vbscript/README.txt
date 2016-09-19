Run sourceanalyzer on source.asp and sink.asp by running the following commands:

$ sourceanalyzer -b sample-asp -clean

$ sourceanalyzer -b sample-asp source.asp sink.asp

$ sourceanalyzer -b sample-asp -scan -f sample-asp.fpr

As with all scripting languages, it is important to translate (that is,
the second command which converts source files into analyzable form)
as many of the input source files as possible at one time. This allows
the translation phase to glean more data from the original sources. In
languages such as C or Java, the source files contain explicit
information about types and externally referenced code and data, which
we must infer for scripting languages.

Now load the result file in Audit Workbench:

$ auditworkbench sample-asp.fpr

This sample demonstrates a couple of simple SQL injection attacks. In the
file source.asp, two tainted strings are prepared, sql1 and sql2. The
first contains a cookie from the Request object and the second a parameter.
Both these strings, therefore, contain data which could have been provided
by a malicious user.

source.asp then calls a subroutine, MySqlStuff(), with these data as
parameters.

The sink.asp file contains the definition of MySqlStuff(), and does some
dubious things with its arguments. It appears to assume that its arguments
have been validated as "safe" since it simply uses them to access a database
object directly at lines 7 and 9, respectively.
