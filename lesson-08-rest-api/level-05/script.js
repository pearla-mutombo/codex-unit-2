// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");
const pUsername = document.getElementById("username");
const pEmail = document.getElementById("email");
const pId = document.getElementById("id");

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: implement fetch and set the three elements' innerText
}

if (form) form.onsubmit = handleSubmit;
