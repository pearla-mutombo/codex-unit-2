// Level 10 — form-elements starter
// TODO: assign a named function to form.onsubmit that reads a text input value
const form = document.querySelector("form");
if (form) {
  form.onsubmit = handleSubmit;
}
function handleSubmit(event) {
  // TODO: prevent default when ready
  // event.preventDefault();
  event.preventDefault();
  // TODO: const form = event.target; const message = form.elements.message.value; display via innerText
  const formTag = event.target;
  console.log(formTag.elements.message.value);
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
