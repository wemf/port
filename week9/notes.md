# Week 09 notes

## The Window Object
Every JavaScript environment has a global object. Any variables that are created in the global scope are actually properties of this object, and any functions are methods of it. In a browser environment the global object is the window object, which represents the browser window that contains a web page.

## The Browser Object Model
There is no official standard for the BOM, although there are a number of properties and methods that are supported by all the major browsers, making a sort of de facto standard. These properties and methods are made available through the window object. Every browser window, tab, popup, frame, and iframe has a window object.

## Going Global
Global variables are actual properties of a global object. In a browser environment, the global object is the window object. This means that any global variable created is actually a property of the window object, as can be seen in the example below:
```js
x = 6;  // global variable created
<< 6

window.x // same variable can be accessed as a property of the window object
<< 6

// both variables are exactly the same
window.x === x;
<< true
```
## Dialogs
The window.alert() method will pause the execution of the program and display a message in a dialog box. The message is provided as an argument to the method, and undefined is always returned:
```js
window.alert('Hello');
<< undefined
```
The window.confirm() method will stop the execution of the program and display a confirmation dialog that shows the message provided as an argument, and giving the options of OK or Cancel. It returns the boolean values of true if the user clicks OK, and false if the user clicks Cancel:
```js
window.confirm('Do you wish to continue?');
<< undefined
```
The window.prompt() method will stop the execution of the program. It displays a dialog that shows a message provided as an argument, as well as an input field that allows the user to enter text. This text is then returned as a string when the user clicks OK. If the user clicks Cancel, null is returned:
```js
window.prompt('Please enter your name:');
```
## Timing Functions
* setTimeout()
* setInterval()
* window.clearInterval(summon);

## The data- Attribute

The data- attribute is a way of embedding data in a web page using custom attributes that are ignored by the browser. They’re also private to a page, so are not intended to be used by an external service – their sole purpose is to be used by a JavaScript program. This means they’re perfect for adding data that can be used as a hook that the program utilizes to access information about a particular element on the page.

The names of these attributes can be decided by the developer, but they must use the following format:

Start with data-.

Contain only lowercase letters, numbers, hyphens, dots, colons or underscores.

Include an optional string value.

```js
data-powers = 'flight superSpeed'
data-rating = '5' 
data-dropdown 
data-user = 'DAZ' 
data-max-length = '32'
```
```html
<div id='hero' data-powers='flight superSpeed'>
    Superman
</div>
```

## HTML5 APIs

The Web Storage API has some crucial differences with cookies:

- Information stored is not shared with the server on every request.

- Information is available in multiple windows of the browser (but only if the domain is the same).

- Storage capacity limit is much larger than the 4KB limit for cookies ( There is no actual limit in the specification, but most browsers have a limit set at 5GB per domain.).

- Any data stored does not automatically expire as it does with cookies. This potentially makes cookies a better choice for something like showing a popup once a day.


