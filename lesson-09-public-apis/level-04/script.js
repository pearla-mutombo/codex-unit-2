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

  // Append the query string to the URL to satisfy the final test
  // This triggers the GET request by updating the browser's address bar
  window.location.search = queryString.toString();
}
  // TODO: preventDefault, build a data object, use URLSearchParams
  // TODO: append query string to GET request URL
  // TODO: Read form values with formTag.elements and create `data` object
  // TODO: Use `new URLSearchParams(data)` to create a query string and save to `query`
  // TODO: console.log(query)
