// Level 08 — preventDefault starter
// TODO: update your submit handler to call event.preventDefault() before other logic
const form = document.querySelector("form");

if (form) {
  form.onsubmit = handleSubmit;}

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
