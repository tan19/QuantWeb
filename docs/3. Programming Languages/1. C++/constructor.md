# Constructor

## Public/Private Constructor
## Const Constructor
## Static Constructor
Static constructor is not allowed in C++, although some languages support it (e.g., C#). This is because constructor initializes the data members of the `self` instance, while static member functions do not have that notion.

You can emulate one with a nested class though:
```C++
class has_static_constructor {
    friend class constructor;

    struct constructor {
        constructor() { /* do some constructing here … */ }
    };

    static constructor cons;
};

// C++ needs to define static members externally.
has_static_constructor::constructor has_static_constructor::cons;
```

## Virtual Constructor
You can't have a virtual constructor, because virtual functions allow us to call a function knowing only interfaces and not the exact type of the object. However, to create an object you need complete information. In particular, you need to know the exact type of what you want to create.

See <a href="https://www.stroustrup.com/bs_faq2.html#virtual-ctor" target="_blank">link</a>