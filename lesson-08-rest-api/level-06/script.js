// Level 06 starter script
// TODO: Use form.elements (by index) to collect input values into a plain object.
const form = document.getElementById("sample-form");

form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
  const form = event.target;
  const data = {};
  for (let i = 0; i < form.elements.length; i++)
    const username = form.lements[i];
    if (username) {
      data[username] = username.value;
    }
  const out = document.getElementById("data");
  if (out) {
    out.innerText = JSON.stringify(data, null, 2);
  }
  
  console.log("Form data collected into object:", data);

  
  // Build a 'data object from  form.elements using indexes.
  // The elements property returns an array-like set of form controls.
  // Use a standard for loop to iterate through form.elements by index
  // Use input's name as the key and its current value as the value.
  // TODO: build a `data` object from form.elements using indexes (e.g. form.elements[0].value)
  // Display the collected data in the <pre id="data"> tag
  // Example display: out.innerText = JSON.stringify(data, null, 2);
}
