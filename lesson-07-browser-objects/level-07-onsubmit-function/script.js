// Level 07 — onsubmit function starter

// TODO: implement a named handler that accepts event and logs a short explanation
function handleSubmit(event) {
  // Prevent default to ensure the log is visible and test can track it
  event.preventDefault(); 
  
  // TODO: accept event and log a message mentioning 'onsubmit'
  console.log("The onsubmit handler has been triggered for this form.");
}

// TODO: assign the handler to form.onsubmit (use the form's id in the HTML)
const form = document.getElementById('sample-form');

if (form) {
  form.onsubmit = handleSubmit;
}
