// Level 02 starter script
// TODO: Get & save the form element to `form`, attach onsubmit, and call event.preventDefault().
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

function handleSubmit(event) {
  event.preventDefault();
  // TODO: set result.innerText to a short explanation about fetch
}

if (form) form.onsubmit = handleSubmit;
