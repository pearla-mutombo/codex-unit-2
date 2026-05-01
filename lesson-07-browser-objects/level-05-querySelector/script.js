// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')

// for .item
const liTag = document.querySelector(".item");
liTag.innerHTML = "<h1>You want the Blue pill or the Red pill?</h1>";
console.log(liTag.innerHTML);

// TODO: log previous content and update nodes (iterate NodeList with forEach)

//  Before: for #content log previous values
const one= document.querySelector("#content");
pTag.innerHTML = "The oracle said NEO was the ONE";
console.log(one.innerHTML);

// // After: for #content 
// const list = document.querySelectorAll("#content");
// list.forEach((el, index) => {
//     listinnerText = "Content" + (index + 1)
// });

//for .item
const list = document.querySelectorAll(".item");
list.forEach((el, index) => {
    list.innerText = "Item" + (index + 1)
});


// Scaffold:
// const one = document.querySelector('#content');
// console.log('before:', one && one.innerHTML);
// // TODO: one.innerHTML = '...';
// const list = document.querySelectorAll('.item');
// list.forEach((el, i) => {
//   // TODO: update each el.innerText
// });
