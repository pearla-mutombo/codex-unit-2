const formTag = document.getElementById("login-form");


formTag.onsubmit = handleSubmit
  

async function handleSubmit(event) {
    event.preventDefault(); // prevent page reload
  
    const form = event.target;
    const errorEl2 = document.getElementById("error");
    const successEl2 = document.getElementById("success");
    // rest message on new attempt
    if (errorEl2) { errorEl2.innerText = "";}
    if (successEl2) { successEl2,innerText = "";}

    const data = {
      //API expects 'username' (per dummyjson docs) and 'password'
      username: form.elements["email"].value,
      password: form.elements["password"].value,
    };

    try {
      const response = await fetch(" https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        // show error message from API
        if (errorEl2) { errorEl2.innerText = `Login Error: ${result.message || "Invalid crentials"}`;}
      }else {
        // show success and reset form
        if (successEl2) { successEl2.innerText = "Login Success!";}
      }
    

    const divData = await response.json();
    const errorEl2 = document.getElementById("error");
    const errorEl2 = document.getElementById("sucess");

    if (errorEl2) {
      errorEl2.innerText = "Result Error: ${divData.error}";
    }

    if (successEl2) {
      successEl2.innerText = "Result Success: ${divData.success}";
      form.reset();
      console.log("Sucess:", result);
    }
  } catch (error) {
    if (errorEl2) {
      errorEl2.innerText = "Network error, please try again";}
    }
  // TODO: prevent default, call fetch/login flow
  // TODO: update errorEl2 or successEl2 depending on response
  // On success, call form.reset() per the tasks
  // TODO: Build `data` object from `form.elements` (username, password)
  // TODO: Use async/await and fetch to POST to https://dummyjson.com/auth/login
  // TODO: Include headers: { 'Content-Type': 'application/json' }
  // TODO: Parse response into `result` and update `errorEl.innerText` or `successEl.innerText`
  // TODO: On success, call form.reset()
}