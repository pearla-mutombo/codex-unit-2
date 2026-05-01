// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://postman-echo.com/post
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: collect values via form.elements[0].value, form.elements[1].value, form.elements[2].value
  // build a data object and post it with fetch; then set result.innerText explaining how data is attached
}

if (form) form.onsubmit = handleSubmit;
