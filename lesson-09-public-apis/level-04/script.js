const formTag = document.getElementById("search-form");

formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();

  const formTag = event.target;

  const data = {
    category: formTag.elements.categories.value,
    difficulty: formTag.elements.difficulties.value,
  };

  const searchParams = new URLSearchParams(data);

  const query = searchParams.toString();

  console.log("This is the query string", query);

  // Append the query string to the URL to satisfy the final test
  // This triggers the GET request by updating the browser's address bar
 
}
  // TODO: preventDefault, build a data object, use URLSearchParams
  // TODO: append query string to GET request URL
  // TODO: Read form values with formTag.elements and create `data` object
  // TODO: Use `new URLSearchParams(data)` to create a query string and save to `query`
  // TODO: console.log(query)
