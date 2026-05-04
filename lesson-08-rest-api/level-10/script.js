// Level 10 starter script
// TODO: POST pre-processed data, parse JSON response, and display three selected values.
const form = document.getElementById("sample-form");

if (form) {
  form.onsubmit = handleSubmit;
}

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
   username: form.elements["username"].value,
   email: form.elements["email"].value
  };

  const response = await fetch("https://api.jsoning.com/mock/public/users", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

const pData = await response.json ();
const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");
if (v1) {
  v1.innerText = "Username: ${pData.username}";
}
if (v2) {
  v2.innerText = "Email: ${pData.email}";
}
if (v3) {
  v3.innerText = "ID: ${pData.id}";
}

console.log ("Parsed result:", pData);
  // TODO: collect data, POST to echo server, parse response, and insert values into v1/v2/v3
}

