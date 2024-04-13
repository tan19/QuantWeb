# Index

## Introduction
- runtime(interpreter(thread(frame(eval loop))))
- When a process initializes, there are certain resources that are global to the process, for example env vars, signals, data, heap, etc. Likewise, there are thread exclusive resources.
- Runtime is everything Python related.
- Interpreter is all runtime states that Python threads share in common.
- Python thread frames hold the execution state of the running byte-code object.


```
# The Eval Loop
<set up>
for instruction in code object:
    <maybe side-channel stuff>
    <occasionally release & re-acquire the GIL>
    <execute next instruction>
```


CPython *is* an interpreter, and it *has* a compiler.

??? Done "What are pyi files?" 
    === "Question"
        In Python, what are `pyi` files?
    
    === "Answer"
        The `i` stands for `interface`, and `pyi` files are stub interface files: each Python module is represented by a `.pyi` stub, but all the methods are empty.

## The Big Picture
An execution of a Python program roughly consists of three stages:
- Initialization
- Compilation
- Interpretation

During the initialization stage, CPython initializes data structures required to run Python. It also prepares such things as built-in types, configures and loads built-in modules, sets up the import system and does many other things.

CPython is an interpreter, not a compiler in a sense that it doesn't produce machine code. Interpreters, however, usually translate source code into some intermediate representation before executing it. So does CPython. This translation phase does the same things a typical compiler does: parses a source code and builds an AST (Abstract Syntax Tree), generates bytecode from an AST and even performs some bytecode optimizations.

Bytecode is a series of instructions. Each instruction consists of two bytes: one for an **opcode** and one for an **argument**. Consider an example:

``` Python
def g(x):
    return x + 3
```

CPython translates the body of the function `g()` to the following sequence of bytes:

$$[124, 0, 100, 1, 23, 0, 83, 0]$$

If we run the standard `dis` module to disassemble it, here's what we'll get:
``` Python
$ python -m dis example1.py
...
2           0 LOAD_FAST            0 (x)
            2 LOAD_CONST           1 (3)
            4 BINARY_ADD
            6 RETURN_VALUE
```
The `LOAD_FAST` opcode corresponds to the byte `124` and has the argument `0`. The `LOAD_CONST` opcode corresponds to the byte `100` and has the argument `1`. The `BINARY_ADD` and `RETURN_VALUE` instructions are always encoded as `(23, 0)` and `(83, 0)` respectively since they don't need an argument.

At the heart of CPython is a virtual machine that executes bytecode. By looking at the previous example you might guess how it works. CPython's VM is stack-based. It means that it executes instructions using the stack to store and retrieve data. The `LOAD_FAST` instruction pushes a local variable onto the stack. `LOAD_CONST` pushes a constant. `BINARY_ADD` pops two objects from the stack, adds them up and pushes the result back. Finally, `RETURN_VALUE` pops whatever is on the stack and returns the result to its caller.

The bytecode execution happens in a giant evaluation loop that runs while there are instructions to execute. It stops to yield a value or if an error occurred.



## Resources
- <a href="https://leanpub.com/insidethepythonvirtualmachine" target="_blank">Inside The Python Virtual Machine</a>
- <a href="https://realpython.com/cpython-source-code-guide/" target="_blank">Your Guid to the CPython Source Code</a>
- <a href="https://www.youtube.com/playlist?list=PLzV58Zm8FuBL6OAv1Yu6AwXZrnsFbbR0S" target="_blank">CPython internals: A ten-hour codewalk through the Python interpreter source code</a>
- <a href="https://eli.thegreenplace.net/tag/python-internals" target="_blank">Python internals</a>
- <a href="http://aosabook.org/en/500L/a-python-interpreter-written-in-python.html" target="_blank">A Python Interpreter Written in Python</a>