const formTag = document.getElementById("login-form");
const errorEl2 = document.getElementById("error");
const successEl2 = document.getElementById("success");

formTag.onsubmit = handleSubmit
  

async function handleSubmit(event) {
    event.preventDefault(); // prevent page reload
  
    const form = event.target;
   
    // rest message on new attempt
    errorEl2.innerText = "";
    successEl2.innerText = "";

    const data = {
      //API expects 'username' (per dummyjson docs) and 'password'
      username: form.elements.username.value,
      password: form.elements.password.value,
    };

    const dataString = JSON.stringify(data);

    try {
      const response = await fetch(" https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: dataString
      });

      const result = await response.json();

      if (!response.ok) {
        successEl2.innerText = "Welcome back! Successful Login.";
        form.reset();
      }else {
        errorEl2.innerText = result.message || `Login request failed.`;
      }
    }catch (error) {
      console.error(error);
      errorEl2.innerText = "Network error. Login request failed.";
    }
}
    
    
  // TODO: prevent default, call fetch/login flow
  // TODO: update errorEl2 or successEl2 depending on response
  // On success, call form.reset() per the tasks
  // TODO: Build `data` object from `form.elements` (username, password)
  // TODO: Use async/await and fetch to POST to https://dummyjson.com/auth/login
  // TODO: Include headers: { 'Content-Type': 'application/json' }
  // TODO: Parse response into `result` and update `errorEl.innerText` or `successEl.innerText`
  // TODO: On success, call form.reset()
