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

// querySelectorAll() - retrieves a NodeList collection of elements/types based on selector argument
// const elementsSelected = document.querySelectorAll('p');
// console.log(elementsSelected);
const anchorsInsideParagraphElementsSelected = document.querySelectorAll('p a');
console.log(anchorsInsideParagraphElementsSelected);

// innerText property
// The innerText property focuses on the rendered text content. When you use innerText to read the 
// content of an element, it returns the text as it appears on the screen, ignoring HTML tags. It 
// also does not include text that is hidden with CSS styles. This means that innerText takes into 
// account the CSS styles applied to the element and its children

// textContent property
// The textContent property, on the other hand, returns the text content of the node and its descendants 
// as it is in the markup, ignoring all HTML tags. Unlike innerText, textContent includes text that is hidden 
// with CSS styles and does not account for styles or formatting like line breaks and whitespaces.

// Key Differences
// 1. Visibility: innerText returns the visible text, while textContent returns the full text, including 
// hidden elements
// 2. Performance: innerText is more performance-heavy as it requires layout information to return the result, 
// whereas textContent does not require layout information and is thus more efficient
// 3. Node Types: innerText is defined only for HTMLElement objects, while textContent is defined for all Node objects

// Use Case
// - Use innerText when you need to account for styles and only want the visible text content.
// - Use textContent when you need the raw text content, including hidden elements, and want better performance.

// innerHTML property
// The innerHTML property in JavaScript is used to get or set the HTML content within an element. This property is widely 
// used for manipulating the DOM (Document Object Model) to dynamically change the content of web pages.

// getAttribute and setAttribute
// - The getAttribute() method in JavaScript is used to retrieve the value of a specified attribute from an element. If the 
// attribute does not exist, it returns null
// - The setAttribute() method in JavaScript is used to set a new value to an attribute on a specified element. If the attribute 
// does not exist, it is created first
// const firstImage = document.querySelector('img');
// firstImage.alt = 'Silkie Chicken Banner';
// firstImage.setAttribute('alt', 'New Banner');
// firstImage.setAttribute('title', 'Silkie Chicken');

// style object has all the style props set in-line on the element
// style tag or style sheet styles are excluded from the style object
// const h1Element = document.querySelector('h1');
// console.log('h1 style object:', h1Element.style);
// console.log('h1 style object color prop:', h1Element.style.color);
// h1Element.style.color = 'green';
// h1Element.style.fontSize = '3em';
// h1Element.style.border = '2px solid lime';
// console.log(window.getComputedStyle(h1Element).border);
// console.log(window.getComputedStyle(h1Element).color);

// classList prop allows easy adding of classes to an element
// const h2 = document.querySelector('h2');
// console.log('classList:', h2.classList);
// h2.classList.add('border'); // adds class
// h2.classList.add('purple');
// h2.classList.remove('border');// removes class
// h2.classList.contains('border'); // return boolean
// h2.classList.toggle('purple'); // removes or adds class depending on previous call

// parentElement for DOM tree traversal
const firstBold = document.querySelector('b');
console.log('first bold element:', firstBold);
console.log('parent element:', firstBold.parentElement);
console.log('grandparent element:', firstBold.parentElement.parentElement);

// childElement traversal
const p = firstBold.parentElement;
console.log('Child-element count of selected p:', p.childElementCount);
console.log('Child elements of selected p:', p.children); // returns HTMLCollection of child elements in order of occurrence

// Sibling traversal
const firstSquareImage = document.querySelector('.square');
console.log('first square image element:', firstSquareImage);
console.log('nextSibling:', firstSquareImage.nextSibling); // returns a text node because the images are separated by spaces which are represented by text node in the DOM
console.log('nextElementSibling:', firstSquareImage.nextElementSibling); // returns next "element" sibling of this element
console.log('previousElementSibling:', firstSquareImage.previousElementSibling); // returns p element in this case