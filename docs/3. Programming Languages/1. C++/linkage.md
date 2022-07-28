# Linkage

In C++, a **symbol**, for example a variable or function name, can be declared any number of times within its scope.

A translation unit consists of an implementation file and all the headers that it includes directly or indirectly. Each translation unit is compiled independently by the compiler. After the compilation is complete, the linker merges the compiled translation units into a single program. 

The following objects have internal linkage by default:

- const objects
- constexpr objects
- typedef objects
- static objects in namespace scope


External linkage means the symbol (function or global variable) is accessible throughout your program and internal linkage means that it is only accessible in one translation unit.

You can explicitly control the linkage of a symbol by using the extern and static keywords. If the linkage is not specified then the default linkage is extern (external linkage) for non-const symbols and static (internal linkage) for const symbols.

Block scoped names have no linkage. The symbol `i` has no linkage, and the two symbols `i` are bound to two different entities. Generally speaking, local variables (variables declared at block scope) and function arguments have no linkage, regardless of type and lifetime.

```C++
int func()
{
    int i;
    {
        int i;
    }
}
```

Internal and external linkage are similar, in that repeated declarations of the symbol bind to the same entity: internal linkage binds only within the translation unit, external across the entire program. So given:
```C++
static int i;   //  internal linkage...
```
in several translation units, the i binds to a separate entity in each translation unit. Without the static, you have external linkage, and all of the i bind to the same entity.