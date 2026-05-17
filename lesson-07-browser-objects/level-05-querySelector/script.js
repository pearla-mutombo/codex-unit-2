// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')

/// 1. Select the element with querySelector('#content') into element
const pTag = document.querySelector('#content');

// 2. Log previous innerHTML
console.log('before:', pTag && pTag.innerHTML);

// 3. Set element.innerHTML to explain both querySelector and mention innerHTML/innerText
if (pTagt) {
  pTag.innerHTML = "Using querySelector lets you change the innerHTML or innerText of any CSS selector.";
}

// 4. Log the updated innerHTML
console.log('after:',pTag && pTag.innerHTML);

// 5. Use the debugger to inspect the element
debugger;


// Scaffold:
// const one = document.querySelector('#content');
// console.log('before:', one && one.innerHTML);
// // TODO: one.innerHTML = '...';
// const list = document.querySelectorAll('.item');
// list.forEach((el, i) => {
//   // TODO: update each el.innerText
// });
// TODO: Use querySelector('#content') to select element and update innerHTML to explain querySelector vs getElementById
