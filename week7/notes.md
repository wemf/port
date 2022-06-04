# Week 07 notes

## Immediately Invoked Function Expressions

An Immediately Invoked Function Expression – or IIFE – (pronounced 'iffy') is an anonymous function that, as the name suggests, is invoked as soon as it’s defined. This is easily achieved by placing parentheses at the end of the function definition (remember we use parentheses to invoke a function). The function also has to be made into an expression, which is done by placing the whole declaration inside parentheses, as in this example:

```js
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();
<< 'Hello World'
```

## Temporary Variables

You can use IIFE to create temporary variables, normally when you declare a variable you cannot remove it.

```js
let a = 1;
let b = 2;

(()=>{
    const temp = a;
    a = b;
    b = temp;
})();

a;
<< 2

b;
<< 1

console.log(temp);
<< Error: "temp is not defined"
```

## Functions that Define and Rewrite Themselves

Every time the function is called after the first time, it will log the message 'Been there, got the T-Shirt':

```js
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}

party();
<< 'Wow this is amazing!'
party();
<< 'Been there, got the T-Shirt'
party();
<< 'Been there, got the T-Shirt'
```

## Recursive Functions

A recursive function is one that invokes itself until a certain condition is met. It’s a useful tool to use when iterative processes are involved. A common example is a function that calculates the factorial of a number:

```js
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

## Callbacks

### Callback Hell

Callback hell is the term used to refer to this tangled mess of code, and it's such a common issue that it even has its own [website](http://callbackhell.com/)!

![Image source: https://blog.nearsoftjobs.com/the-callback-hell-6cc184ce8704](./callbackhell.jpeg)

To illustrate this, let's say we had written a game that required the following tasks to be completed:

* The user logs in and a user object is returned
* The user ID is then used to fetch player information from the server
* The game then loads based on the player information

All these operations are asynchronous, so can be written as functions that use callbacks invoked once each task has been completed.

The code might look like the snippet shown below:

```js
login(userName, function(error,user) {
    if(error){
        throw error;
    } else {  
        getPlayerInfo(user.id, function(error,info){
        if(error){
        throw error;
        } else {
            loadGame(info, function(error,game) {
                if(error){
                        throw error;
                    } else {
                    // code to run game
                }
            });
        }
        });
    }
});
```

### Promises

A settled promise can result in two different outcomes:
* Resolved ― the asynchronous operation was completed successfully.
* Rejected ― the asynchronous operation didn’t work as expected, wasn't successfully completed or resulted in an error.

```js
const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});
```
### Chaining Multiple Promises

We can chain the `then()` methods together to form a sequential piece of code that’s easy to read. 

```js
login(userName)
.then(user => getPlayerInfo(user.id))
.then(info => loadGame(info))
.catch( throw error)
```

### Async functions

Async functions were added to the ES2017 specification. These functions are preceded by the `async` keyword and allow you to write asynchronous code as if it was synchronous. This is achieved by using the `await` operator before an asynchronous function.
```js
async function loadGame(userName) {

    try {
        const user = await login(userName);
        const info = await getPlayerInfo (user.id);
        // load the game using the returned info
    }

    catch (error){
        throw error;
    }
}
```

## Closure
Closures not only have access to variables declared in a parent function's scope, they can also change the value of these variables. This allows us to do things like create a `counter()` function like the one in the example below:

```js
function counter(start){
    let i = start;
    return function() {
        return i++;
    }
}
const count = counter(1);
count();
<< 1
count();
<< 2
```

## Functional Programming

- **Pure Functions**: Pure functions are functions that don't rely on the state of the code they are called from, have no side-effects, and always give the same result when given the same arguments (referential transparency).
- **Higher-Order Functions**: are functions that accept another function as an argument, or return another function as a result, or both.
- **Currying**: or partial application is the process of applying one argument at a time to a function. A new function is returned until all the arguments have been used.

## The Fetch API

The Fetch API provides a global `fetch()` method that only has one mandatory argument, which is the URL of the resource you wish to fetch. A very basic example would look something like the following piece of code:

```js
fetch('https://example.com/data')
.then( ) // code that handles the response 
.catch( ) // code that runs if the server returns an error 
```
### Request Interface
Request objects are created using the Request() constructor, and include the following properties:

- `url` – The URL of the requested resource (the only property that is required).
- `method` – a string that specifies which HTTP method should be used for the request. By default, this is 'GET'.
- `headers` – This is a Headers object (see later section) that provides details of the request's headers.
- `mode` – Allows you to specify if CORS is used or not. CORS is enabled by default.
- `cache` – Allows you to specify how the request will use the browser's cache. For example, you can force it to request a resource and update the cache with the result, or you can force it to only look in the cache for the resource.
- `credentials` – Lets you specify if cookies should be allowed with the request.
- `redirect` – Specifies what to do if the response returns a redirect. There’s a choice of three values: 'follow' (the redirect is followed), 'error' (an error is thrown) or 'manual' (the user has to click on a link to follow the redirect).

### Response Interface
Some other properties of the Response object are:

- `headers` – A Headers object (see later section) containing any headers associated with the response
- `url` – A string containing the URL of response
- `redirected` – A boolean value that specifies if the response is the result of a redirect
- `type` – A string value of 'basic', 'cors', 'error' or 'opaque'. A value of 'basic' is used for a response from the same domain. A value of 'cors' means the data was received from a valid cross-origin request from a different domain. A value of 'opaque' is used for a response received from 'no-cors' request from another domain, which means access to the data will be severely restricted. A value of 'error' is used when a network error occurs.

The response object also contains a number of methods that return promises that can then be chained together.

```js
const url = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })

const request = (url,{
    headers: headers
})

fetch(request)
.then( function(response) {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then( response => {} ) // do something with response
.catch( error => console.log('There was an error!') )
```