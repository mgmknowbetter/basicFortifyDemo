This sample demonstrates a stack buffer overflow.  To analyze the sample,
enter the following commands:

$ sourceanalyzer -b stackbuffer -clean

$ sourceanalyzer -b stackbuffer gcc stackbuffer.c
 - or -
$ sourceanalyzer -b stackbuffer cl stackbuffer.c

$ sourceanalyzer -b stackbuffer -scan -f stackbuffer.fpr

Note that you must have the gcc compiler or the cl compiler installed on your
system to analyze this sample.

Now view the results in Audit Workbench

$ auditworkbench stackbuffer.fpr

The results file should contain a Buffer Overflow issue. Other types of
issues may also be present.

The Buffer Overflow issue indicates that user input enters the program through
the scanf call on line 24, which reads data into argument 1. (Arguments are
0-indexed, so argument 1 is the second argument to scanf, &bytes.) This data
is then passed as argument 2 to doMemCpy(), which in turn sends the data to
argument 2 of memcpy(). This allows a user to cause an arbitrary amount
of data to be written to the 64-byte buffer buf, potentially overflowing
that buffer.
