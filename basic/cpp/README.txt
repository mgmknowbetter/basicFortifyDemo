(If you have installed SCA on Windows Vista or a newer Windows version, and
you have installed it in the default location, which is under \Program
Files\, you may have to copy sample.cpp to some other location and 'cd'
there in order for these directions to work.  Recent versions of Windows do
not allow non-administrators to modify or create files under \Program Files\.)

Run sourceanalyzer on sample.cpp by entering the following commands:

$ sourceanalyzer -b sample-cpp -clean

$ sourceanalyzer -b sample-cpp g++ sample.cpp
 - or -
$ sourceanalyzer -b sample-cpp cl /EHsc sample.cpp

$ sourceanalyzer -b sample-cpp -scan -f sample.fpr

Note that you must have the gcc compiler or the cl compiler installed on your
system to analyze this sample.

Now load the result file in Audit Workbench.

$ auditworkbench sample.fpr

This test demonstrates a simple dataflow vulnerability in C++ code. The
code in sample.cpp is intended to be a simple shell program; it reads
user input, checks that the user is running a safe program, and runs
that program. However, if the user specified a command such as
"safe_program ; dangerous_program", then the dangerous program would be
executed by the system() call. The sourceanalyzer output should contain
vulnerabilities with the following categories:

      Command Injection
      Memory Leak

Other vulnerabilities may also appear depending on the versions of rule 
packs used to scan the sample.

The Command Injection vulnerability indicates that user input comes
from a call to getline() on line 16 and is then  passed to argument
0 of the system() call on line 21, due to the absence of appropriate
input length checks.
