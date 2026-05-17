// TODO: Build a small form handler that reads values, conditionally resets the form, and updates the output element.
// Keep logic small and focused for the challenge.
// 1. Select the form and the output elements
const form = document.getElementById("sample-form");
const output = document.getElementById("out");

// 2. Attach handleSubmit to form.onsubmit
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  // 3. Prevent the default browser reload behavior
  event.preventDefault();

  // 4. Read values from form.elements into separate variables
  const valueOne = form.elements.one.value;
  const valueTwo = form.elements.two.value;

  // 5. Select the output tag and update innerText/innerHTML
  output.innerText = `Value One: ${valueOne} | Value Two: ${valueTwo}`;

  // 6. Use an if condition to decide when to call form.reset()
  // This resets the form only if both input fields are not empty
  if (valueOne !== "" && valueTwo !== "") {
    form.reset();
  }
}
