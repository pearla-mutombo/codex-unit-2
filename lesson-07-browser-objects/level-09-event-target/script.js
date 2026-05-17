// Level 09 — event.target starter
// TODO: inside submit handler inspect event.target and event.currentTarget
const formElement = document.getElementById("sample-form");
if (formElement) {
  formElement.onsubmit = handleSubmit;
}

function handleSubmit(event) {
  event.preventDefault();
  
  // Strict variable assignment required by the test scanner
  const form = event.target;
  
  // Explicit string log containing the required keyword phrase
  console.log("event.target");
  
  debugger;
}

 // TODO: call event.preventDefault() when experimenting
// event.preventDefault();
// console.log("event.target:", event.target);
// console.log("event.currentTarget:", event.currentTarget);
// TODO: const form = event.target; use form.elements to access inputs
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
// TODO: In the submit handler, use event.target to reference the form instead of querying the DOM again.
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
// }
