// Level 10 starter script
// TODO: POST pre-processed data, parse JSON response, and display three selected values.
const form = document.getElementById("sample-form");
const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: collect data, POST to echo server, parse response, and insert values into v1/v2/v3
}

if (form) form.onsubmit = handleSubmit;
