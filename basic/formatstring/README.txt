Compile formatstring.c and run it.
	
Normally it just echos back the text you've entered, truncated after 
MAX_SIZE characters have been entered. There's a few ways you can exploit
this simple program:
- You can crash the program by entering something like: %x%s
- And you can see what's on the stack by entereing %08x%08x%08x...etc
- For more information on these and other exploits, please see 
  Exploiting Software [2004 Hoglund & McGraw] p.317-324

Run sourceanalyzer on formatstring.c by entering the following command:

$ sourceanalyzer -b formatstring -clean

$ sourceanalyzer -b formatstring gcc formatstring.c
 - or -
$ sourceanalyzer -b formatstring cl formatstring.c

$ sourceanalyzer -b formatstring -scan -f formatstring.fpr

Note that you must have the gcc compiler or the cl compiler installed on your
system to analyze this sample.

Now view the results in Audit Workbench

$ auditworkbench formatstring.fpr

The output should contain a Format String vulnerability. Other categories
of vulnerabilities may also appear.
