# Run-time State

## Thread State
A `thread state` is a data structure that contains thread-specific data including the call stack, the exception state and the debugging settings. It should not be confused with an OS thread. They're closely connected, though. Consider what happens when you use the standard threading module to run a function in a separate thread:
```Python
from threading import Thread

def f():
    """Perform an I/O-bound task"""
    pass

t = Thread(target=f)
t.start()
t.join()
```
`t.start()` actually creates a new OS thread by calling the OS function (`pthread_create()` on UNIX-like systems and `_beginthreadex()` on Windows). The newly created thread invokes the function from the `_thread` module that is responsible for calling the target. This function receives not only the target and the target's arguments but also a new thread state to be used within a new OS thread. An OS thread enters the evaluation loop with its own thread state, thus always having it at hand.

We may remember here the famous **GIL** (Global Interpreter Lock) that prevents multiple threads to be in the evaluation loop at the same time. The major reason for that is to protect the state of CPython from corruption without introducing more fine-grained locks. The Python/C API Reference explains the GIL clearly:

*The Python interpreter is not fully thread-safe. In order to support multi-threaded Python programs, there’s a global lock, called the global interpreter lock or GIL, that must be held by the current thread before it can safely access Python objects.*

To manage multiple threads, there needs to be a higher-level data structure than a thread state.

## Interpreter State and Runtime State
An interpreter state is a group of threads along with the data specific to this group. Threads share things such as loaded modules (`sys.modules`), builtins (`builtins.__dict__`) and the import system (`importlib`).

The runtime state is a global variable. It stores data specific to a process. This includes the state of CPython (e.g. is it initialized or not?) and the GIL mechanism.

Usually, all threads of a process belong to the same interpreter. There are, however, rare cases when one may want to create a subinterpreter to isolate a group of threads. mod_wsgi, which uses distinct interpreters to run WSGI applications, is one example. The most obvious effect of isolation is that each group of threads gets its own version of all modules including __main__, which is a global namespace.

CPython doesn't provide an easy way to create new interpreters analogous to the threading module. This feature is supported only via Python/C API, but this may change someday.