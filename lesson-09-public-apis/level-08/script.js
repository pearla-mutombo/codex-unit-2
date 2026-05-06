const formTag = document.getElementById("jokeForm");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  // TODO: Create a `data` object with an "api-key" property (quoted when hyphenated)
  // TODO: Convert `data` into a query string and fetch jokes (or send as header if API requires)
  // TODO: Parse response and render a joke into the DOM. On invalid key, show an error message in the page
}
