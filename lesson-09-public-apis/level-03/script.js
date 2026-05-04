const btn3 = document.getElementById("fetch-btn");

  form.onsubmit = handleSubmit;


  btn3.addEventListener("click", async (event) => {
    event.preventDefault();

    const errorEl3 = document.getElementById("error");
    const button = event.target;
    const data = { Tryfetch = button.value };

    try {
      const response = await fetch("https://api.jsoning.com/mock/public/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
      });
    
      if (!response.ok) {
        throw new Error("HTTP error! Status: ${response.status}");
      }
      const divData = await response.json();
      console.log("Success:", divData);
    
    } catch (error) {
    
    if (errorEl3) {
      errorEl3.innerText = "Resutl Error: ${error.message}";
    }
    console.error("Fetch failed:", error.message);
    }
   
  });

    
    // TODO: wrap fetch in try/catch
    // TODO: check response.ok and show friendly messages
