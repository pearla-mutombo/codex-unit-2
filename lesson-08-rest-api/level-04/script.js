// Level 04 starter script
// TODO: Await fetch and call response.json() to parse the body.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: fetch and parse JSON, then set result.innerText with a short explanation
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const userdata = await response.json();
  const pTag = document.getElementById("result");
  pTag.innterText = "Parsing reads the server response and extracts the data from it. In this case, it converts it to an object."
}

