Run sourceanalyzer on NullPointerSample.java by entering the command:

$ sourceanalyzer -b np -clean
$ sourceanalyzer -b np NullPointerSample.java
$ sourceanalyzer -b np -scan -f NullPointerSample.fpr

Now view the results in Audit Workbench

$ auditworkbench NullPointerSample.fpr

The output should contain a Null Dereference vulnerability. The trace
for this vulnerability indicates that the variable 't' is set to null on
line 7.  It is then dereferenced on line 11, and it may not have been
set to a non-null value at that point (namely, if the variable 'id' is
not greater than zero). If your code contained a method like this one,
an attacker could crash your program by causing the input to be less
than one.
