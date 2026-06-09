const formTag = document.getElementById("loginForm");
const errorEl = document.getElementById("error");
const successEl = document.getElementById("success");

formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();

  errorEl.innerText = "";
  successEl.innerText = "";

  const formData = event.target;
  const data = {
      username: formData.elements.username.value,
      password: formData.elements.password.value,
    };

    const dataString = JSON.stringify(data);
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: dataString
    });

    const result = await response.json();

    if (response.ok) {
      // Task: On login success, display a friendly message in the success element (innerText).
      successEl.innerText = "Welcome back! Successful Login.";
      
      // Task: On successful login, call form.reset().
      form.reset();
    } else {
      // Task: On login failure, display the API error message in the error element (innerText).
      errorEl.innerText = result.message || "Login request failed";
    }

  } catch (error) {
    console.error(error);
    errorEl.innerText = "Network error. Login request failed.";
  }

  } 
  // TODO: Wrap fetch code in try/catch
  // TODO: In try: send request, parse `result`, update `successEl` and call formTag.reset()
  // TODO: In catch: console.error(error) and update `errorEl.innerText`

