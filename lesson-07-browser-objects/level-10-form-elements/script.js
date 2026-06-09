// Level 10 — form-elements starter
// TODO: assign a named function to form.onsubmit that reads a text input value
const form = document.querySelector("form");

form.onsubmit = handleSubmit;

function handleSubmit(event) {
  // TODO: prevent default when ready
  // event.preventDefault();
  event.preventDefault();
  // TODO: const form = event.target; const message = form.elements.message.value; display via innerText
  const formTag = event.target;
  const message = form.elements.message.value;
  const outputTag = document.getElementById("result");
  
  outputTag.innerText = message;
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
// TODO: In the handler, read form.elements.message.value into `message` and set output.innerText
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const message = form.elements.message.value;
//   document.querySelector('#result').innerText = message;
// }
