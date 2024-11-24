# Eval
All the VM has to do is to iterate over the instructions and to act according to them. And this is what essentially `_PyEval_EvalFrameDefault()` does. It contains an infinite for (;;) loop that we refer to as the evaluation loop. Inside that loop there is a giant switch statement over all possible opcodes. Each opcode has a corresponding case block containing the code for executing that opcode. The bytecode is represented by an array of 16-bit unsigned integers, one integer per instruction. The VM keeps track of the next instruction to be executed using the next_instr variable, which is a pointer to the array of instructions. At the start of each iteration of the evaluation loop, the VM calculates the next opcode and its argument by taking the least significant and the most significant byte of the next instruction respectively and increments next_instr. The `_PyEval_EvalFrameDefault()` function is nearly 3000 lines long, but its essence can be captured by the following simplified version:

- <a href="https://github.com/python/cpython/blob/3.9/Python/ceval.c#L1365" target="_blank">ceval main loop</a>

```C
PyObject*
_PyEval_EvalFrameDefault(PyThreadState *tstate, PyFrameObject *f, int throwflag)
{
    // ... declarations and initialization of local variables
    // ... macros definitions
    // ... call depth handling
    // ... code for tracing and profiling

    for (;;) {
        // ... check if the bytecode execution must be suspended,
        // e.g. other thread requested the GIL

        // NEXTOPARG() macro
        _Py_CODEUNIT word = *next_instr; // _Py_CODEUNIT is a typedef for uint16_t
        opcode = _Py_OPCODE(word);
        oparg = _Py_OPARG(word);
        next_instr++;

        switch (opcode) {
            case TARGET(NOP) {
                FAST_DISPATCH(); // more on this later
            }

            case TARGET(LOAD_FAST) {
                // ... code for loading local variable
            }

            // ... 117 more cases for every possible opcode
        }

        // ... error handling
    }

    // ... termination
}
```