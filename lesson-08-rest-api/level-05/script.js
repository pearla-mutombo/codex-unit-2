// Level 05 starter script
// TODO: Fetch GET https://postman-echo.com/get, await response.json(), and read response.url and selected headers.
const form = document.getElementById("sample-form");
const pUrl = document.getElementById("url");
const pHost = document.getElementById("host");
const pEnc = document.getElementById("encoding");

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: implement fetch and set the three elements' innerText
}

if (form) form.onsubmit = handleSubmit;
