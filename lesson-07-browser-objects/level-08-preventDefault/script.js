// Level 08 — preventDefault starter
// TODO: update your submit handler to call event.preventDefault() before other logic
const form = document.querySelector("form");

form.onsubmit = handleSubmit;

function handleSubmit(event) {
  // TODO: uncomment the next line when you want to prevent navigation
  // event.preventDefault();
  event.preventDefault();

  console.log(
    "preventDefault stops navigation and  allows the onsubmit log to appear"
  );
}

// Attach scaffold:
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
// TODO: Create handleSubmit(event), call event.preventDefault() and log an explanation.
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   console.log('preventDefault called');
// }
