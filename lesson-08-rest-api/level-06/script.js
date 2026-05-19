// Level 06 starter script
// TODO: Use form.elements (by index) to collect input values into a plain object.
const formTag = document.getElementById("sample-form");
const preTag = document.getElementById("data");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    username: form.elements[0].value,
    email: form.elements[1].value,
  };
  
  const dataString = JSON.stringify(data);
  console.log (dataString);

  preTag.innerText = "Form data collected into object " + dataString;
  
  
  // Build a 'data object from  form.elements using indexes.
  // The elements property returns an array-like set of form controls.
  // Use a standard for loop to iterate through form.elements by index
  // Use input's name as the key and its current value as the value.
  // TODO: build a `data` object from form.elements using indexes (e.g. form.elements[0].value)
  // Display the collected data in the <pre id="data"> tag
  // Example display: out.innerText = JSON.stringify(data, null, 2);
}
