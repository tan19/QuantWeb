# Run-time Object
## Code Object
Consider the following program:
```Python
def f(x):
    return x + 1

f(1)
```
Whatever the function `f()` does, it is not a part of the module's bytecode.
```Python
  1           0 LOAD_CONST               0 (<code object f at 0x7fc4516e2c30, file "example.py", line 1>)
              2 LOAD_CONST               1 ('f')
              4 MAKE_FUNCTION            0
              6 STORE_NAME               0 (f)

  4           8 LOAD_NAME                0 (f)
             10 LOAD_CONST               2 (1)
             12 CALL_FUNCTION            1
             14 POP_TOP
             16 LOAD_CONST               3 (None)
             18 RETURN_VALUE

Disassembly of <code object f at 0x7fc4516e2c30, file "example.py", line 1>:
  2           0 LOAD_FAST                0 (x)
              2 LOAD_CONST               1 (1)
              4 BINARY_ADD
              6 RETURN_VALUE
```

## Function Object
A `function object`, however, is not merely a `code object`. It must include additional information such as the function name, docstring, default arguments and values of variables defined in the enclosing scope. This information, together with a code object, is stored inside a function object. The `MAKE_FUNCTION` instruction is used to create it. It may be the case that several function objects reference a single code object. Here is an example:
```Python
def make_add_x(x):
    def add_x(y):
        return x + y
    return add_x

add_4 = make_add_x(4)
add_5 = make_add_x(5)
```
The bytecode of the `make_add_x()` function contains the `MAKE_FUNCTION` instruction. The functions `add_4()` and `add_5()` are the result of calling this instruction with the same code object as an argument. But there is one argument that differs – the value of `x`. Each function gets its own by the mechanism of cell variables that allows us to create `closures` like `add_4()` and `add_5()`.


## Frame Object
When the VM executes a code object, it has to keep track of the values of variables and the constantly changing value stack. It also needs to remember where it stopped executing the current code object to execute another and where to go on return. CPython stores this information inside a frame object, or simply a frame. **A frame provides a state in which a code object can be executed.** 

The first frame is created to execute the module's code object. CPython creates a new frame whenever it needs to execute another code object. Each frame has a reference to the previous frame. Thus, frames form a stack of frames, also known as the call stack, with the current frame sitting on top. When a function is called, a new frame is pushed onto the stack. On return from the currently executing frame, CPython continues the execution of the previous frame by remembering its last processed instruction. In some sense, the CPython VM does nothing but constructs and executes the frames.

## CPython Definitions
??? "CPython Definitions of Code, Function, and Frame Object"
    === "Code Object"
        ```C
        struct PyCodeObject {
            PyObject_HEAD
            int co_argcount;            /* #arguments, except *args */
            int co_posonlyargcount;     /* #positional only arguments */
            int co_kwonlyargcount;      /* #keyword only arguments */
            int co_nlocals;             /* #local variables */
            int co_stacksize;           /* #entries needed for evaluation stack */
            int co_flags;               /* CO_..., see below */
            int co_firstlineno;         /* first source line number */
            PyObject *co_code;          /* instruction opcodes */
            PyObject *co_consts;        /* list (constants used) */
            PyObject *co_names;         /* list of strings (names used) */
            PyObject *co_varnames;      /* tuple of strings (local variable names) */
            PyObject *co_freevars;      /* tuple of strings (free variable names) */
            PyObject *co_cellvars;      /* tuple of strings (cell variable names) */

            Py_ssize_t *co_cell2arg;    /* Maps cell vars which are arguments. */
            PyObject *co_filename;      /* unicode (where it was loaded from) */
            PyObject *co_name;          /* unicode (name, for reference) */
                /* ... more members ... */
        };
        ```    
    === "Function Object"        
        ```C
        typedef struct {
            PyObject_HEAD
            PyObject *func_code;        /* A code object, the __code__ attribute */
            PyObject *func_globals;     /* A dictionary (other mappings won't do) */
            PyObject *func_defaults;    /* NULL or a tuple */
            PyObject *func_kwdefaults;  /* NULL or a dict */
            PyObject *func_closure;     /* NULL or a tuple of cell objects */
            PyObject *func_doc;         /* The __doc__ attribute, can be anything */
            PyObject *func_name;        /* The __name__ attribute, a string object */
            PyObject *func_dict;        /* The __dict__ attribute, a dict or NULL */
            PyObject *func_weakreflist; /* List of weak references */
            PyObject *func_module;      /* The __module__ attribute, can be anything */
            PyObject *func_annotations; /* Annotations, a dict or NULL */
            PyObject *func_qualname;    /* The qualified name */
            vectorcallfunc vectorcall;
        } PyFunctionObject;
        ```
    === "Frame Object"
        ```C
        struct _frame {
            PyObject_VAR_HEAD
            struct _frame *f_back;      /* previous frame, or NULL */
            PyCodeObject *f_code;       /* code segment */
            PyObject *f_builtins;       /* builtin symbol table (PyDictObject) */
            PyObject *f_globals;        /* global symbol table (PyDictObject) */
            PyObject *f_locals;         /* local symbol table (any mapping) */
            PyObject **f_valuestack;    /* points after the last local */

            PyObject **f_stacktop;          /* Next free slot in f_valuestack.  ... */
            PyObject *f_trace;          /* Trace function */
            char f_trace_lines;         /* Emit per-line trace events? */
            char f_trace_opcodes;       /* Emit per-opcode trace events? */

            /* Borrowed reference to a generator, or NULL */
            PyObject *f_gen;

            int f_lasti;                /* Last instruction if called */
            /* ... */
            int f_lineno;               /* Current line number */
            int f_iblock;               /* index in f_blockstack */
            char f_executing;           /* whether the frame is still executing */
            PyTryBlock f_blockstack[CO_MAXBLOCKS]; /* for try and loop blocks */
            PyObject *f_localsplus[1];  /* locals+stack, dynamically sized */
        };
        ```