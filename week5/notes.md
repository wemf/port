# Week 05 Notes

# Chapter 10: Testing and Debugging

Errors and bugs are a fact of life in programming ― they will always be there. A ninja programmer will try to do everything to minimize errors occurring, and find ways to identify and deal with them quickly.

## Errors, Exceptions, and Warnings

Errors are caused when something goes wrong in a program. They are usually caused by one of the following:

- System error ― there’s a problem with the system or external devices with which the program is interacting.
- Programmer error ― the program contains incorrect syntax or faulty logic; it could even be as simple as a typo.
- User error ― the user has entered data incorrectly, which the program is unable to handle.

## Exceptions

An exception is an error that produces a return value that can then be used by the program to deal with the error.

Example:
```
unicorn();
<< ReferenceError: unicorn is not defined
```

## Stack Traces

An exception will also produce a stack trace. This is a sequence of functions or method calls that lead to the point where the error occurred. 

The example below shows how a stack trace can help you find where an error originates from:

```
function three(){ unicorn(); }
function two(){ three(); }
function one(){ two(); }
one();

<< index.html:13 Uncaught ReferenceError: unicorn is not defined
    at three (index.html:13)
    at two (index.html:17)
    at one (index.html:21)
    at index.html:24`
```

## Warnings

A warning can occur if there’s an error in the code that isn't enough to cause the program to crash. This means the program will continue to run after a warning. *Don't ignore them*

```
pi = 3.142;
<< JavaScript Warning: assignment to undeclared variable
```

## Strict Mode

ECMAScript 5 introduced a strict mode that produces more exceptions and warnings and prohibits the use of some deprecated features. *Is good to increase the chance of errors*

For example here you'll get an exception, instead of a warning:
```
'use strict';

e = 2.718;
<< ReferenceError: e is not defined
```

## Error Objects

An `error` object can be created by the host environment when an exception occurs, or it can be created in the code using a constructor function, like so:

```
const error = new Error();
```
This constructor function takes a parameter that’s used as the error message:
```
const error = new Error('Oops, something went wrong');
```

## Exception Handling
When an exception occurs, the program terminates with an error message. It is possible to handle exceptions gracefully by catching the error. Any errors can be hidden from users, but still identified. We can then deal with the error appropriately ― perhaps even ignore it ― and keep the program running.

`try`, `catch`, and `finally`

```
function imaginarySquareRoot(number) {
    'use strict';
    try {
        return String(squareRoot(number));
    } catch(error) {
        // console.error(error);
        return squareRoot(-number)+'i';
    }
}
```
