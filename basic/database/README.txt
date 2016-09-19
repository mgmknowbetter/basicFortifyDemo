The SQL code in this sample illustrates some simple issues that can
turn up in SQL code.

To analyze the file database.pks, run the following commands:

$ sourceanalyzer -b db -clean
$ sourceanalyzer -b db database.pks
$ sourceanalyzer -b db -scan -f database.fpr

Now open the results in Audit Workbench

$ auditworkbench database.fpr

The output shows an Access Control: Database vulnerability. The user
supplies a string that appears to be used as a username in the SQL query
without being properly validated and/or escaped, which may represent an
access control problem.

Depending on the rule packs used to scan, other vulnerabilities may
appear as well.

