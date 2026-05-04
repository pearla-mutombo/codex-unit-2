// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");


form.onsubmit = handleSubmit();

async function handleSubmit(event) {
  event.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const userdata = await response.json();
  const pUsername = document.getElementById("username");
  const pEmail = document.getElementById("email");
  const pId = document.getElementById("id");
  pUsername.innerText = "Username:", username;
  pEmail.innerText = "Email;",  email;
  pId.innterText = "ID:", id;
  
  // TODO: implement fetch and set the three elements' innerText
}

