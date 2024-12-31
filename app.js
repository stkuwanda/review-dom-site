// The DOM itself is a bunch of objects that can be interacted with
// via JS. It is a JS window into the contents of a webpage.

// The document object is the entry point into the world of the DOM. 
// It contains representations of all the content on a page, plus lots 
// of useful methods and properties
console.dir(document); // log the document object

// getElementById - to get object representation of an element
const image = document.getElementById('banner');
console.dir(image); // log the document object