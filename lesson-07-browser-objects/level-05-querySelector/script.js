// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')

// 1. Select the single element with the ID 'content'
const one = document.querySelector('#content');

// Log previous content before updating
console.log('Before (content):', one ? one.innerHTML : "Not found");

if (one) {
    // Update the innerHTML of the #content element
    one.innerHTML = "<h1>The oracle said NEO was the ONE</h1>";
    console.log('After (content):', one.innerHTML);
}

// 2. Select ALL elements with the class 'item' (returns a static NodeList)
const list = document.querySelectorAll(".item");

// Use forEach to iterate through the NodeList and update each element
list.forEach((el, index) => {
    // Update the textContent or innerText of each item
    el.innerText = `Item ${index + 1}`;
});

// For your specific pill-themed log:
const firstItem = document.querySelector(".item");
if (firstItem) {
    console.log("First item's new content:", firstItem.innerText);
}

// Scaffold:
// const one = document.querySelector('#content');
// console.log('before:', one && one.innerHTML);
// // TODO: one.innerHTML = '...';
// const list = document.querySelectorAll('.item');
// list.forEach((el, i) => {
//   // TODO: update each el.innerText
// });
// TODO: Use querySelector('#content') to select element and update innerHTML to explain querySelector vs getElementById
