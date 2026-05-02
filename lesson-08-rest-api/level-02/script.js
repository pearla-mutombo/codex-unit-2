// Level 02 starter script
// TODO: Get & save the form element to `form`, attach onsubmit, and call event.preventDefault().
const form = document.getElementById("sample-form");
// attach/call the handleSubmit function
form.onsubmit = handleSubmit;
//cdeclare the handleSubmit function
function handleSubmit(event) {
  event.preventDefault();
  const response = fetch('https://api.jsoning.com/mock/public/users');
  const resultTag = document.getElementById("result");
  // TODO: set result.innerText to a short explanation about fetch
  resultTag.innerText = "The fetch function starts a network request, then it accepts a URL to connect to, next it returns a Promise and When the Promise is resolved, you can inspect the response from the server."; 
}
