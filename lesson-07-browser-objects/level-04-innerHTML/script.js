// TODO: Select element with getElementById('content'), log previous innerHTML, then set new innerHTML.
// Keep changes simple and avoid inserting untrusted markup.
// Level 04 — innerHTML starter
// TODO: select an element (e.g. document.getElementById('content'))
const divTag = document.getElementById("content");

// TODO: log previous innerHTML, set a small markup string (e.g. <strong>), then log after value
//console log the innerHTML properties
console.log(divTag.innerHTML);
divTag.innerHTML = "<strong>innerHTML</strong> vs innerText";
console.log(divTag.innerHTML);
// Explain what is innnerHTML?
console.log("innerHTML returns a string of HTML markup or `injects it`; changing it reparses the element's contents");

// Explain what is innterText? 
console.log("innerText shows visible text; innerHTML contains markup.");

debugger;









// Scaffold:
// const el = document.getElementById('content');
// console.log('before innerHTML:', el && el.innerHTML);
// // TODO: el.innerHTML = '<strong>New content</strong>';
// console.log('after innerHTML:', el && el.innerHTML);
