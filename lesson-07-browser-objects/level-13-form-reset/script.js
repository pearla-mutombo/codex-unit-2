// Level 13 — form-reset starter
// TODO: validate one field in submit handler, on success display summary and call form.reset()

function handleSubmit(event) {
  // event.preventDefault();
  event.preventDefault();
  // const form = event.target;
  const form = event.target;
  // TODO: validate fields, show summary in DOM, then call form.reset();
  //selecting a field to validate input with name="username"
  const usernameInput = form.elements.username;
  const usernameValue =  usernameInput.value.trim();

  if (usernameValue === "") {
    alert("Username is required.");
    return;
  }

  const displayElement = document.getElementById("display");
  if (displayElement) {
  displayElement.innerText = "Success! You submitted: " + usernameValue;
  }
  form.reset ()

  console.log("Form has been validated, displayed and fields reset.");
}

const form = document.getElementById("sample-form");
if (from) {
  form.onsubmit = handleSubmit;
}
 
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
