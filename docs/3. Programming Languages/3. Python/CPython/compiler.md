# CPython Compiler

## Big Picture
The frontend takes a Python code and produces an AST. The backend takes an AST and produces a code object. Throughout the CPython source code, the terms `parser` and `compiler` are used for the frontend and the backend respectively.

## The Parser
The job of the parser is to check whether the input is a syntactically correct Python code. If it's not, then the parser reports an error like the following:
```python
x = y = = 12
        ^
SyntaxError: invalid syntax
```
The AST
??? "AST"
    === "Code"
        ```python
        x = 123
        f(x)
        ```    
    === "AST"
        ```
        $ python -m ast example1.py
        Module(
        body=[
            Assign(
                targets=[
                    Name(id='x', ctx=Store())],
                value=Constant(value=123)),
            Expr(
                value=Call(
                    func=Name(id='f', ctx=Load()),
                    args=[
                    Name(id='x', ctx=Load())],
                    keywords=[]))],
        type_ignores=[])
        ```

## Symbol Table
A symbol table contains information about code blocks and the symbols used within them. It's represented by a single symtable struct and a collection of `_symtable_entry` structs, one for each code block in a program. A symbol table entry contains the properties of a code block, including its name, its type (module, class or function) and a dictionary that maps the names of variables used within the block to the flags indicating their scope and usage. 


In C/C++, each scope has its own symbol table.

