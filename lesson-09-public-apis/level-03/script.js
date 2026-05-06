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

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data)
    });


    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed and Invalid Credentials");
    }

    const result = await response.json();
    // const message = result.messge;
    // const firstName = result.firstName;
    // const errorEl = document.getElementById("error");
    // const successEl = document.getElementById("success");
    // if(message) {
    //   errorEl.innerText = message;
    //   successEl.innerText = "";
    // } else if (firstName) {
      successEl.innerText = "Login successful! Welcome, " + result.firstName; //Succss Login logic
      // errorEl.innerText = "";
      formData.reset();
   
    } catch (error) {
    // catch the error or handle error or run this code when this is an error
    // console.
    // debugger;
    // handle Error and console.error (error);
    console.error(error);
    errorEl.innerText = error.message;
    }

  } 
  // TODO: Wrap fetch code in try/catch
  // TODO: In try: send request, parse `result`, update `successEl` and call formTag.reset()
  // TODO: In catch: console.error(error) and update `errorEl.innerText`

