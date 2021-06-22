# Compiler

## Preprocessing
The preprocessor takes a C++ source code and deals with the **#include**, **#define**, **pragma** and other preprocessor directives. The output of this step is a C++ source file without preprocessor directives.

## Compilor and Assemblor
Object files can refer to symbols that are not defined. This is the case when you use a declaration, and have not provided a definition for it. The compiler does not mind this, and will happily produce the object file as long as the source code is well-formed. The advantage this provides is that you don't need to recompile everything if you only change a single file.

## Linking
It links all the object files by replacing the references to undefined symbols with the correct addresses. Each of these symbols can be defined in other object files or in libraries. If they are defined in libraries other than the standard library, you need to tell the linker about them.

## Loader

## Runner

- .text: Code, only read and execute permission.
- .bss: uninitialized data, usually takes lower storage.
- .data: initialized data, usually takes higher storage.
- .rdata: read only data, usually constants and string literals.
- .reloc: stores the information required to relocate the image while loading. kind of function addresses.

## Scope, Duration and Linkage
Storage class specifiers (e.g., static, extern and mutable) set both the identifier's linkage and its storage duration, but not its scope. By default, non-constant global \emph{variables} have external linkage and constant or constexpr have internal linkage. They can be extended to external linkage by adding the extern storage class specifier. Functions, however, have 

By default, functions and non-constant global variables have external linkage, while other variables and functions have internal linkage.

There are three types of linkage: internal, external, and no linkage.

An identifier has linkage only if it can be redelcared in another scope. For example, since you cannot redeclare a non-static class data member in another scope, it has no linkage.


The default access specifier in C++ is private.

Linkage is w.r.t. different files while compiler related topics such as scope focus on each individual files.

There are two flavors of class data members: static and nonstatic; and three flavors of member functions: static, nonstatic and virtual.

Nonstatic data members are allocated directly within each class object. Static data members are stored outside the individual class object. Static and nonstatic function members are also hoisted outside the class object. Virtual functions are supported in two steps: