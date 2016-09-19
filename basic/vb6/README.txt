Run sourceanalyzer on command-injection.bas by entering the following commands:

$ sourceanalyzer -b sample-vb6 -clean

$ sourceanalyzer -b sample-vb6 command-injection.bas

$ sourceanalyzer -b sample-vb6 -scan -f sample-vb6.fpr

As with all scripting languages, it is important to translate (that is,
the second command which converts source files into analyzable form)
as many of the input source files as possible at one time. This allows
the translation phase to glean more data from the original sources. In
languages such as C or Java, the source files contain explicit
information about types and externally referenced code and data, which
we must infer for scripting languages.

Now load the result file in Audit Workbench:

$ auditworkbench sample-vb6.fpr

Audit Workbench should show at least 5 issues:

- 4 are command injection issues, in which data from untrusted sources
  (the environment, a remote data object, or a web request) is passed
  to the Shell() function, which simply executes the argument as a command.

- 1 is a SQL injection, in which unsafe data (from the environment, via
  the Environ() function) is used in a call to OpenResultset().

Other issues may also appear, depending on the rule packs used to scan.
