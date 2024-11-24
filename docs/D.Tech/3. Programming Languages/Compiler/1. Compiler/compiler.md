# Compiler

A compiler is a program that can read a program in one language --- the *source* language --- and translate it into an equivalent program in another language --- the *target* language.

Compiler converts a high-level programming language to an assembly code, while assembler further converts the assembly code into machine code (the object files).

The front end of the pipeline is specific to the source language the program is written in. The back end is concerned with the final architecture where the program will run.

## Front-end
### Scanner (from characters to tokens)
### Parser (from tokens to trees)

## Middle-End
### Analyzer (from trees to IRs)
**IR** (intermediate representation) acts as an interface between the source and target languages.
### Optimizer

## Back-end
### Code Generator (from IRs to Byetecode or Machine Code)