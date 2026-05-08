const formTag = document.getElementById("challengeForm");
const errorEl = document.querySelector("#error");
const successEl = document.querySelector("#success");

formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();

  errorEl.innerText = "";
  successEl.innerHTML = ""; // use innerHTML to render the image tag later if there is one since it's random

  const formTag = event.target;
  // TODO: Construct `data` from formTag.elements
  const data = {
    "api-key": "883a9659d69045f1bb0fbd245315543a",
    "keywords": formTag.elements.value.value // using the input value as a search keyword
  };
  // TODO: Format data with `URLSearchParams` or `JSON.stringify`
  const queryString = new URLSearchParams(data).toString();
  // TODO: Save formatted data into `dataString` and send via fetch using async/await
  try {
    const response = await fetch("https://api.humorapi.com/memes/random?" + queryString);
    const result = await response.json();
    // Handle non-2xx reponses
    if (!response.ok) {
      // use the error message for bad API key or fall back
      errorEl.innerText = result.message || "Invaild API Key or request error.";
      return;
    }
    // Handle sucess if API return an object with a 'URL' property
    if (result.url) {
      const img = document.createElement("img");
      img.src = result.url;
      img.alt = "Random Meme";
      img.style.maxWidth = "100%;" // to ensure it ftis the screen
    
      // Render success - a meme into a DOM (Render the 'meme' property)
      successEl.innerText = "Succes! Here is your meme:";
      successEl.appendChild(img);
    } else {
      successEl.innerText = "Found a meme, but no image URL was provided.";
    }

  } catch (error) {
    console.error("Error fetching meme:", error);
    errorEl.innerText = "Failed to load meme. Please check your connection.";
  }
  // TODO: Parse `result` and update the page; handle errors with try/catch
}
