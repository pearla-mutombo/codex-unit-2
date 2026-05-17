// TODO: Select element with getElementById('desc') into `element`, log previous innerText, then set a new string.
// Example starter:
// const element = document.getElementById('desc');
// console.log('before:', element.innerText);

// 1. Select the element exactly by id 'desc'
const pTag = document.getElementById('desc');

// 2. Log the previous innerText
console.log(pTag.innerText);

// 3. Set the text to a strict, simple string containing the exact word
pTag.innerText = "This demonstrates innerText.";

// 4. Trigger the debugger
debugger;
