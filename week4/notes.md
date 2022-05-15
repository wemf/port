# Week 04 Notes

# Chapter 8: Forms

Forms are made up of a `<form>` element that contains form controls such as input fields, select menus and buttons. These input fields can be populated with information that is processed once the form has been submitted.

## Form Controls

Each form might contains control elements like:
- `<input>` fields, including text, passwords, check boxes, radio buttons, and file uploads
- `<select>` menus for drop-down lists of options
- `<textarea>` elements for longer text entry
- `<button>` elements for submitting and resetting forms

## Form Properties and Methods

- The `form.submit()` method will submit the form automatically.  
- The `form.reset()` method will reset all the form controls back to their initial values specified in the HTML.
- The `form.action` property can be used to set the action attribute of a form, so it’s sent to a different URL to be processed on the server

## Form Events

- The `focus` event occurs when an element is focused on.
- The `blur` event occurs when the user moves the focus away from the form element.
- The `change` event occurs when the user moves the focus away from the form element after changing it.
- The `submit` event, occurring when the form is submitted. 

```
const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search() {
    alert(' Form Submitted');
}
```

# Chapter 12: Object Oriented Programming

Object-oriented programming is often used to model representations of objects in the real world. There are three main concepts in OOP: encapsulation, polymorphism and inheritance.

## Encapsulation

This means keeping all the programming logic inside an object and making methods available to implement the functionality, without the outside world needing to know how it’s done.

## Polymorphism

This means various objects can share the same method, but also have the ability to override shared methods with a more specific implementation.

## Inheritance

This means we can take an object that already exists and inherit all its properties and methods. We can then improve on its functionality by adding new properties and methods.

## Classes

Many object-oriented languages, such as Java and Ruby, are known as class-based languages. This is because they use a class to define a blueprint for an object. Objects are then created as an instance of that class, and inherit all the properties and methods of the class. 

JavaScript didn't have classes before ES6, and used the concept of using actual objects as the blueprint for creating more objects. This is known as a prototype-based language.

## Constructor Functions

This is a function that defines the properties and methods of an object. The keyword `this` is used to represent the object that will be returned by the constructor function. 

```
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}
```