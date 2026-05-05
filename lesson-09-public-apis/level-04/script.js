const formTag = document.getElementById("search-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    category: form.elements.category.value,
    difficulty: form.elements.difficulty.value,
  };
  const queryString = new URLSearchParams(data);
  console.log("This is the query string", queryString);
}
    // TODO: preventDefault, build a data object, use URLSearchParams
    // TODO: append query string to GET request URL
  