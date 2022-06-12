# Week 08 notes

## Transforms

The CSS3 `transform` property lets you lets you translate, rotate, scale, and/or skew any element on the page. While some of these effects were possible using previously existing CSS features (such as translating with relative and absolute positioning), CSS3 gives you unprecedented control over many more aspects of the element’s appearance

## Translation

The `translate(x,y)` function moves an element x from the left, and y from the top:

```css
transform: translate(45px, -45px);
```

## Scaling

The `scale(x,y)` function scales an element by the defined factors horizontally then vertically. If only one value is provided, it will be used for both the x and y values, growing or shrinking your element or pseudo-element while maintaining the original aspect ratio. For example, scale(1) would leave the element the same size, scale(2) would double its proportions, scale(0.5) would halve them, and so on. Providing different values will distort the element, as you’d expect:

```css
transform: scale(1.5, 0.25);
```

## Rotation

The `rotate()` function rotates an element around the point of origin by a specified angle value. As with scale, by default the point of origin is the element’s center. Generally, angles are declared in degrees, with positive degrees moving clockwise and negative moving counterclockwise. In addition to degrees, values can be provided in grads, radians, or turns, but we’ll just be sticking with degrees.

Let’s add a `rotate` transform to our “dukes”:

```css
.ad-ad2 h1:hover span {
    color: #484848;
    transform: rotate(10deg) translateX(40px) scale(1.5);
}
```

![](https://learnable-static.s3.amazonaws.com/premium/reeedr/books/html5-css3-for-the-real-world-2nd-edition/images/000016.png)

## Skew

The `skew(x,y)` function specifies a skew along the x and y axes. As you’d expect, the x specifies the skew on the x axis, and the y specifies the skew on the y axis. If the second parameter is omitted, the skew will only occur on the x axis:

```css
transform: skew(15deg, 4deg);
```

![](https://learnable-static.s3.amazonaws.com/premium/reeedr/books/html5-css3-for-the-real-world-2nd-edition/images/000065.png)

## The transition Shorthand Property

With four transition properties and a vendor prefix, you could wind up with eight lines of CSS for a single transition. Fortunately, as with other properties such as border, there’s a shorthand available. The transition property is shorthand for the four transition properties just described.

```css
.ad-ad2 h1 span {
    transition-property: transform; 
    transition-duration: 0.2s;  
    transition-timing-function: ease-out;
    transition-delay: 50ms;
}
```
Now let’s combine all those values into a shorthand declaration:
```css
.ad-ad2 h1 span {
    transition: transform 0.2s ease-out 50ms;
}
```

## Animations

Transitions animate elements over time; however, they’re limited in what they can do. You can define starting and ending states, but there’s no fine-grained control over any intermediate states. CSS animations, unlike transitions, allow you to control each step of an animation via keyframes.

### Keyframes
To animate an element in CSS, you first create a named animation, then attach it to an element in that element’s property declaration block. Animations in themselves don’t do anything; in order to animate an element, you’ll need to associate the animation with that element.

```css
@keyframes moveRight { 
    from {
    transform: translateX(-50%);
    }
    to {
    transform: translateX(50%);
    }
}

@keyframes appearDisappear { 
    0%, 100% {
    opacity: 0;
    }
    20%, 80% {
    opacity: 1;
    }
}

@keyframes bgMove {
    100% {
    background-position: 120% 0;
    }
}
```

## Creating a canvas Element

```html
<canvas>
    Sorry! Your browser doesn’t support Canvas.
</canvas>
```

### Drawing on the Canvas

we need to grab hold of the canvas element on our page and get the context:

```js
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
```

### Drawing a Rectangle to the Canvas

We can do this by calling the fillRect and strokeRect methods. Both of these methods take the X and Y coordinates where you want to begin drawing the fill or the stroke, and the width and height of the rectangle.

```js
var canvas = document.getElementById("myCanvas"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);
```
![](https://learnable-static.s3.amazonaws.com/premium/reeedr/books/html5-css3-for-the-real-world-2nd-edition/images/000080.png)

## SVG

SVG stands for Scalable Vector Graphics, a specific file format that allows you to describe vector graphics using XML. A major selling point of vector graphics in general is that, unlike bitmap images (such as GIF, JPEG, PNG, and TIFF), vector images preserve their quality even as you blow them up or shrink them down. We can use SVG to do many of the same tasks we can do with canvas, including drawing paths, shapes, text, gradients, and patterns. There are also very useful open-source tools relevant to SVG, some of which we’ll leverage in order to add a spinning progress indicator to The HTML5 Herald ’s geolocation widget.

Unlike canvas, images created with SVG are available via the DOM. This enables technologies such as screen readers to see what’s present in an SVG object through its DOM node, as well as allowing you to inspect SVG using your browser’s developer tools. Since SVG is an XML file format, it’s also more accessible to search engines than canvas.

### Drawing in SVG

Drawing a circle in SVG is arguably easier than drawing a circle with canvas. Here’s how we do it:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <circle cx="50" cy="50" r="25" fill="red"/>
</svg>
```
The viewBox attribute defines the starting location, width, and height of the SVG image.

The circle element defines a circle, with cx and cy the X and Y coordinates of the center of the circle. The radius is represented by r, while fill defines the fill style.

To view an SVG file, you simply open it via the File menu in any browser that supports SVG. 
![](https://learnable-static.s3.amazonaws.com/premium/reeedr/books/html5-css3-for-the-real-world-2nd-edition/images/000053.png)

## Canvas versus SVG

if you need to paint pixels to the screen and have no concerns about the ability to retrieve and modify your shapes, canvas is probably the better choice. If, on the other hand, you need to be able to access and change specific aspects of your graphics, SVG might be more appropriate.

