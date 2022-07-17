There are seven special class functions.

=== "C++ Class Functions"
``` C++
class X {
public:
    X(SomeType);            // "ordinary constructor": create an object
    X();                    // default constructor
    X(const X&);            // copy constructor
    X(X&&);                 // move constructor

    X& operator=(const X&); // copy assignment: clean up target and copy
    X& operator=(X&&);      // move assignment: clean up target and move

    ~X();                   // destructor: clean up
    
    // ...
};
```