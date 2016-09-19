This sample demonstrates a time-of-check/time-of-use vulnerability.
To analyzer the sample code, run the following commands:

$ sourceanalyzer -b toctou -clean

$ sourceanalyzer -b toctou gcc toctou.c
 - or -
$ sourceanalyzer -b toctou cl toctou.c

$ sourceanalyzer -b toctou -scan -f toctou.fpr

Note that you must have the gcc compiler or the cl compiler installed on your
system to analyze this sample.

Now view the results in Audit Workbench

$ auditworkbench toctou.fpr

The output should show a single File Access Race Condition issue.

Here, sourceanalyzer has detected a TOCTOU vulnerability in the code
that checks permissions on a file prior to opening that file. The code
checks that a user has access to write to file, then opens file for
writing. However, between the check and the open, the file could have
been manipulated, causing the program to open a different file than
the one for which the access checks were performed.
