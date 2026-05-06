const form2 = document.getElementById("login-form");


form.onsubmit = handleSubmit

if (form2) {
  form2.addEventListener("submit", async (e) => {
    event.preventDefault;
    const form = event.target;
    const data = {
      email: form.elements["email"].value,
      password: form.elemnts["password"].value
    };
    
    const response = await fetch("https://jsoning.com", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });

    const divData = await response.json();
    const errorEl2 = document.getElementById("error");
    const errorEl2 = document.getElementById("sucess");

    if (errorEl2) {
      errorEl2.innerText = "Result Error: ${divData.error}";
    }

    if (successEl2) {
      successEl2.innerText = "Result Success: ${divData.success}";
    }
    // TODO: prevent default, call fetch/login flow
    // TODO: update errorEl2 or successEl2 depending on response
    // On success, call form.reset() per the tasks
    console.log("Login failed: invalid credentials");
  });
const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  // TODO: Build `data` object from `form.elements` (username, password)
  // TODO: Use async/await and fetch to POST to https://dummyjson.com/auth/login
  // TODO: Include headers: { 'Content-Type': 'application/json' }
  // TODO: Parse response into `result` and update `errorEl.innerText` or `successEl.innerText`
  // TODO: On success, call form.reset()
}
