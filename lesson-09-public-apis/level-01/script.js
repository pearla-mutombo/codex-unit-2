const form = document.getElementById("login-form");


if (form) {
  form.onsubmit = handleSubmit;
}
  form.addEventListener("submit", async (event) => {
    event.preventDefault
    const data = {
      username: form.elements["username"].value,
      passowrd: form.elements["password"].value
    };
    const response = await fetch("https://api.jsoning.com/mock/public/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });

    const divData = await response.json();

    const errorEl = document.getElementById("error");
    const successEl = document.getElementById("success");

    if (errorEl) {
      errorEl.innerText = "Result Error: ${divData.error}";
    }
    
    if (successEl) {
      successEl.innerText = "Result Success: ${divData.success}";
    }

    console.log("Parsed result:", divData);
    // TODO: call event.preventDefault()
    // TODO: build a data object from form fields
    // TODO: use fetch with async/await to POST to a dummy login endpoint
    // Do not commit real API keys — use test endpoints or mocks in tests
  
  });

