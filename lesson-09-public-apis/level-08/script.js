const formTag = document.getElementById("jokeForm");
const jokeTag = document.getElementById("joke");
const errorTag = document.getElementById("error");

formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  //prevent the website from refreshing
  event.preventDefault();

  jokeTag.innerText = "";
  errorTag.innerText = "";

  // create  a data object with an "api-key" property (quoted when hyphenated)
  const data = {
    "api-key": "883a9659d69045f1bb0fbd245315543a",
  };

  // 2. convert data into a query string
  const queryString = new URLSearchParams(data).toString();
  try {
    // Fetch the joke ( assuming humor API uses GET for random jokes- since GET is always a default if not specified)
    // use async/await to fetch joke from the API endpoint
    const response = await fetch(
      "https://api.humorapi.com/jokes/random?" + queryString,
    );
    const result = await response.json();

    if (!response.ok) {
      errorTag.innerText = result.message || "Invalid API Key or request error";
    } else {
      jokeTag.innerText = result.joke;
    }
  } catch (error) {
    console.error("Error fetching joke:", error);
    errorTag.innerText = "Failed to load joke.";
  }

  // TODO: Create a `data` object with an "api-key" property (quoted when hyphenated)
  // TODO: Convert `data` into a query string and fetch jokes (or send as header if API requires)
  // TODO: Parse response and render a joke into the DOM. On invalid key, show an error message in the page
}
