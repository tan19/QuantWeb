??? Note "Empty Class in C++"
    === "Question"
        What does the compiler create for an empty class in C++?

    === "Answer"
        A class with no virtual functions occupies 1 byte; otherwise, it occupies 4 or 8 bytes, depending on the machine is 32-bit or 64-bit.

        For any object of an empty class, 1 byte is allocated by compiler for unique address identification. The minimum amount of memory is 1 byte.

        For a class without any data members but with at lest one virtual function, its object occupies 4 bytes (on 32-bit machines) or 8 bytes (on 64-bit machines), because a hidden virtual point (called VPTR) is created as a class (all objects share one) data member field. Hence an empty class with virtual functions is actually no longer empty.

    === "Comment"