// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;


async function handleSubmit(event) {
  event.preventDefault();
  // TODO: use async/await to call fetch('https://jsonplaceholder.typicode.com/todos/1') and then set result.innerText
  const response = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
  const pTag = document.getElementById("result");
  pTag.innterText = "async marks a function as asynchronous (takes time to finish). await is used to wait for fetch to finish or pauses execution until the function finishes."
}
