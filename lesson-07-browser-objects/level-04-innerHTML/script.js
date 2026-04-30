// Level 04 — innerHTML starter
// TODO: select an element (e.g. document.getElementById('content'))
const divTag = document.getElementById("content");

// TODO: log previous innerHTML, set a small markup string (e.g. <strong>), then log after value
//console log the innerHTML properties
console.log(divTag.innerHTML);
divTag.innerHTML = "<h1> Welcome to the matrix!</h1>";
console.log(divTag.innerHTML);

// Scaffold:
// const el = document.getElementById('content');
// console.log('before innerHTML:', el && el.innerHTML);
// // TODO: el.innerHTML = '<strong>New content</strong>';
// console.log('after innerHTML:', el && el.innerHTML);
