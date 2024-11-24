# Symbol Table

Symbol tables are build by assemblers, using symbols exported by the compiler, into the assembly-language `.s` file.

Each `symbol` corresponds to a function, a global variable, or a static variable (i.e., any C variable declared with the `static ` attribute).

It is important to realize that **local linker symbols** are not the same as **local program variables**. The symbol table in `.symtab` does not contain any symbols that correspond to local nonstatic program variables. These are managed at run time on the stack and are not of interest to the linker. Local static variables are not managed on the stack. Instead, the compiler allocates space in `.data` or `.bss` for each definition and creates a local linker symbol in the symbol table with a unique name.