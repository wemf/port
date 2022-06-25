# Week 10 notes

## Client-side form validation

Client-side validation is an initial check and an important feature of good user experience; by catching invalid data on the client-side, the user can fix it straight away. However, client-side validation *should not be considered an exhaustive security measure!* Your apps should always perform security checks on any form-submitted data on the server-side as well as the client-side.

### Different types of client-side validation

There are two different types of client-side validation that you'll encounter on the web:

- Built-in form validation uses HTML5 form validation features, which we've discussed in many places throughout this module. This validation generally doesn't require much JavaScript. Built-in form validation has better performance than JavaScript, but it is not as customizable as JavaScript validation.
- JavaScript validation is coded using JavaScript. This validation is completely customizable, but you need to create it all (or use a library).

### Using built-in form validation

This is done by using validation attributes on form elements:

- `required`: Specifies whether a form field needs to be filled in before the form can be submitted.
- `minlength` and `maxlength`: Specifies the minimum and maximum length of textual data (strings)
- `min` and `max`: Specifies the minimum and maximum values of numerical input types
- `type`: Specifies whether the data needs to be a number, an email address, or some other specific preset type.
- `pattern`: Specifies a regular expression that defines a pattern the entered data needs to follow.

For CSS you have the pseudo classes `:valid`, `:invalid` and `:out-of-range`.

## Using the Fetch API

- The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, as soon as the server responds with headers, the Promise will resolve normally (with the ok property of the response set to false if the response isn't in the range 200–299), and it will only reject on network failure or if anything prevented the request from completing.
- Unless fetch() is called with the credentials option set to include, fetch():
    * won't send cookies in cross-origin requests
    * won't set any cookies sent back in cross-origin responses

A basic fetch request is really simple to set up. Have a look at the following code:

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Uploading JSON data

Use fetch() to POST JSON-encoded data.

```js
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```

### Uploading a file
Files can be uploaded using an HTML `<input type="file"/>` input element, FormData() and fetch().

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

### Headers

The Headers interface allows you to create your own headers object via the `Headers()` constructor. A headers object is a simple multi-map of names to values:

```js
const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
```

### Response objects

As you have seen above, Response instances are returned when fetch() promises are resolved.

The most common response properties you'll use are:

- `Response.status` — An integer (default value 200) containing the response status code.
- `Response.statusText` — A string (default value ""), which corresponds to the HTTP status code message. Note that HTTP/2 does not support status messages.
- `Response.ok` — seen in use above, this is a shorthand for checking that status is in the range 200-299 inclusive. This returns a boolean value.

### Body

Both requests and responses may contain body data. A body is an instance of any of the following types:

- ArrayBuffer
- TypedArray (Uint8Array and friends)
- DataView
- Blob
- File
- String, or a string literal
- URLSearchParams
- FormData
