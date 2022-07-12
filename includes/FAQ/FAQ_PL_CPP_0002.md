??? Note "C++ Member Function Memory Location"
    === "Question"
        Where are C++ member functions located in memory? How to define their sizes?

    === "Answer"
        Member functions reside in the `code segment` of the executable image, and are loaded into virtual memory at run time. The `size` of a function is ill-defined, instead the `entry` point of the function is a valid one, which can be, by the way, determined by a function pointer. This is because compilers may modify the code when it translates the code into instructions, it may well be the case that a piece of continuous memory contains not only the code from the same function, but may have instructions from other code/library as well.

    === "Comment"