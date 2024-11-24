# Linker

The input to the linker is a collection of relocatable object modules. Each of these modules defines a set of symbols, some of which are local (visible only to the module that defines it), and some of which are global (visible to other modules).

## Relocation
Relocation has two steps:

- Global Step: Merge all corresponding sections, e.g., all `.data` sections from different modules are merged, and the run-time addresses for the *sections* are assigned.
- Local Step: Within each section, run-time addresses are assigned.