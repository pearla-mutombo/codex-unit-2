const form = document.getElementById("login-form");
const errorEl = document.getElementById("error");
const successEl = document.getElementById("success");

  form.onsubmit = handleSubmit;

  async function handleSubmit(event) {
    event.preventDefault
    const data = {
      username: form.elements.username.value,
      passowrd: form.elements.password.value
    };

    const dataString = JSON.stringify(data);
    try {
    const response = await fetch("https://api.jsoning.com/mock/public/users", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: dataString
    });

    const result = await response.json();

    console.log(result);
    
    successEl.innerText = "Successful Login!"


  } catch (error) {
    console.error (error);
    errorEl.innerText = "Login request failed";
  }
  
     
  }
    
  // TODO: call event.preventDefault()
  // TODO: build a data object from form fields
  // TODO: use fetch with async/await to POST to a dummy login endpoint
  // Do not commit real API keys — use test endpoints or mocks in tests
  



  // TODO: Call event.preventDefault()
  // TODO: Create `data` object with username and password from form.elements
  // TODO: const dataString = JSON.stringify(data)
  // TODO: Use async/await with fetch to POST to https://dummyjson.com/auth/login
  // TODO: Include headers: { 'Content-Type': 'application/json' }
  // TODO: Parse response into `result` and console.log(result)

