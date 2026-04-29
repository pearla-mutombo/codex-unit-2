// Level 09 — event.target starter
// TODO: inside submit handler inspect event.target and event.currentTarget

function handleSubmit(event) {
  // TODO: call event.preventDefault() when experimenting
  // event.preventDefault();
  console.log("event.target:", event.target);
  console.log("event.currentTarget:", event.currentTarget);
  // TODO: const form = event.target; use form.elements to access inputs
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
