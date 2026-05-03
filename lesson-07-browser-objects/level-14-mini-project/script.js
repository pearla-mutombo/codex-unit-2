// Level 14 — mini-project starter
// TODO: build a small form handler that prevents default, reads values via form.elements, validates, displays summary, and resets the form

function handleSubmit(event) {
  // event.preventDefault();
  event.preventDefault();

  // const form = event.target;
  const form = event.target;
  // TODO: read name, message, volume, selected radio, checkbox
  // Read values via form.elements
  const nameValue = form.elements.name.value;
  const messageValue = form.elements.message.value;
  // Convert range value in a number
  const volume = Number(form.elements.volume.value);
  // Get radio value (it will be "" if nothing is selected)
  const color = form.elements.color.value;
  // Get checkbox in a boolean format 
  const isSubscribed = form.elements.subscribe.checked;

  // TODO: validate required fields, display summary, then form.reset();
  if (name == "" || message === "" || color === "") {
    alert ("Please fill out the Nme, Message, and pick a Color!");
    return; // Stop the function here if validation fails
  }

  const summary = document.getElementById("summary");
  if (summary) {
    summary.innterHTML =
    "Thank you, ${nameValue}! Your message has been received";
  }
  
  form.reset();

  console.log( "Form processed successfully.");
}

// const form = document.getElementById('sample-form');
const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
if (form) {
  form.onsumbit = handleSubmit;
}

