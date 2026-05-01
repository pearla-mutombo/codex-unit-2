// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')

// handle the #content element
const one = document.querySelector('#content');

// for .item
const liTag = document.querySelector(".item");
liTag.innerHTML = "<h1>You want the Blue pill or the Red pill?</h1>";
console.log(liTag.innerHTML);

// TODO: log previous content and update nodes (iterate NodeList with forEach)

// log previous content Before updating
console.log('Before (content:', one? one.innerHTML: "Not found");

if (one) {
    one.innerHTML = "<h1>The oracle said NEO was the ONE</h1>";
    console.log('After (content):', one.innerHTML);
}

// handle the .item elements (NodeList)
const itemList = document.querySelectorAll(".item");

//iterate through the NodeList using forEach
itemList.forEach(el, index);

//for .item
const list = document.querySelectorAll(".item");
list.forEach((el, index) => {
    el.innerText = "Item" + (index + 1)
});


// Scaffold:
// const one = document.querySelector('#content');
// console.log('before:', one && one.innerHTML);
// // TODO: one.innerHTML = '...';
// const list = document.querySelectorAll('.item');
// list.forEach((el, i) => {
//   // TODO: update each el.innerText
// });
