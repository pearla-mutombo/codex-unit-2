// Level 09 — event.target starter
// TODO: inside submit handler inspect event.target and event.currentTarget
const form = document.getElementById("sample-form");
 if (form) {
  form.onsubmit = handleSubmit;
}

function handleSubmit(event) {
  event.preventDefault();
  
  console.log("event.target:", event.target);
  console.log("event.currentTarget:", event.currentTarget);

  const formTag = event.target;
  console.log("Form ID via target:", formTag.id);
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
