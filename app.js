// The DOM itself is a bunch of objects that can be interacted with
// via JS. It is a JS window into the contents of a webpage.

// The document object is the entry point into the world of the DOM. 
// It contains representations of all the content on a page, plus lots 
// of useful methods and properties
console.dir(document); // log the document object

// getElementById - to get object representation of an element by id attribute
const image = document.getElementById('banner');
console.dir(image); // log the document object

// getElementsByTagName - retrieves an iterable collection (HTMLCollection)
// of all the elements with the specified tag names
const images = document.getElementsByTagName('img');
console.log('collection:', images);

for(let img of images) {
  console.log('image src:', img.src);
  // programmatically update image src attribute
  // img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'; 

}

// getElementsByClassName - to retrieve HTMLCollection of Elements by class attribute
const squareImages = document.getElementsByClassName('square');
console.log('collection of square images:', squareImages);

// querySelector - finds first element based on selector argument
// h1/#square/.large
// const elementSelector = document.querySelector('p');
// console.log(elementSelector);
// const idSelector = document.querySelector('#banner');
// console.log(idSelector);
// const classSelector = document.querySelector('.square');
// console.log(classSelector);
// const imgSelector = document.querySelector('img:nth-of-type(2)');
// console.log(imgSelector);
const typeAndAttributeSelector = document.querySelector('a[title="List of chicken breeds"]');
console.log(typeAndAttributeSelector);

// querySelectorAll() - retrieves a collection of elements/types based on selector argument
// const elementsSelected = document.querySelectorAll('p');
// console.log(elementsSelected);
const anchorsInsideParagraphElementsSelected = document.querySelectorAll('p a');
console.log(anchorsInsideParagraphElementsSelected);
