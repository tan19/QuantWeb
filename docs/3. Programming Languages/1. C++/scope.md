# Scope

When you declare a program element such as a class, function, or variable, its name can only be *seen* and used in certain parts of your program. The context in which a name is visible is called its **scope**.

For automatic non-static variables, scope also determines when they are created and destroyed in program memory.

- **Global scope:** A global name is one that is declared outside of any class, function, or namespace. The scope of global names extends from the point of declaration to the end of the file in which they are declared. For global names, visibility is also governed by the rules of **linkage** which determine whether the name is visible in other files in the program.
- **File scope:** A static global name has file scope. File scoped variables act exactly like global variables, except their use is restricted to the file in which they are declared.

```C++
float fValue; // global variable
static int nValue; // file scoped variable

int main()
{
    double dValue; // local variable
}
```

- **Namespace scope:** A name that is declared within a namespace, outside of any class or enum definition or function block, is visible from its point of declaration to the end of the namespace. A namespace may be defined in multiple blocks across different files.

- **Local scope:** A name declared within a function or lambda, including the parameter names, have local scope. They are often referred to as "locals". They are only visible from their point of declaration to the end of the function or lambda body. Local scope is a kind of block scope.

- **Class scope:** Names of class members have class scope, which extends throughout the class definition regardless of the point of declaration. Class member accessibility is further controlled by **public**, **private**, and **protected** keywords. Public or protected members can be accessed only by using the member-selection operators (. or ->) or pointer-to-member operators (.* or ->*).

- **Statement scope:** Names declared in a **for**, **if**, **while**, or **switch** statement are visible until the end of the statement block.

- **Function scope** A **label** or an **argument** has function scope, which means it is visible throughout a function body even before its point of declaration. Function scope makes it possible to write statements like **goto cleanup** before the **cleanup** label is declared.
