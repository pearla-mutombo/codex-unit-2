const btn3 = document.getElementById("fetch-btn");

btn3.addEventListener("click", async (event) => {
  event.preventDefault();

  const errorEl3 = document.getElementById("error");
  const button = event.target;
  
  // FIXED: Standard object syntax
  const data = { tryFetch: button.value };

  try {
    const response = await fetch("https://jsoning.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    // FIXED: Corrected template literal syntax with backticks ``
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const divData = await response.json();
    console.log("Success:", divData);

  } catch (error) {
    if (errorEl3) {
      // FIXED: Corrected template literal syntax for error message
      errorEl3.innerText = `Result Error: ${error.message}`;
    }
    console.error("Fetch failed:", error.message);
  }
});
