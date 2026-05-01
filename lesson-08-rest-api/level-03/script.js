// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: use async/await to call fetch('https://postman-echo.com/get') and then set result.innerText
}

if (form) form.onsubmit = handleSubmit;
