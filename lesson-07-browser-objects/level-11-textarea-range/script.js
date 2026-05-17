// Level 11 — textarea-range starter
// TODO: in submit handler read textarea and range values via form.elements and convert range with Number()
 const form = document.querySelector("sample-form");
 if (form) {
  form.onsubmit = handleSubmit;
 }

function handleSubmit(event) {
  // event.preventDefault();
  event.preventDefault();
  // const form = event.target;
  const form = event.target;
  // TODO: const message = form.elements.message.value;
  const message = formElement.elements.message.value;
  // TODO: const volume = Number(form.elements.volume.value);
  const volume = Number(formElement.elements.value);

  console.log("Message:", message);
  console.log("Volume (as number)", volume, "Type:" typeof volume);
}

// TODO: Read textarea and range values from form.elements and convert range to Number when needed.
// Example starter:
// const form = document.getElementById('sample-form');
// function handleSubmit(event) {
//   event.preventDefault();
//   const message = form.elements.message.value;
//   const volume = Number(form.elements.volume.value);
//   console.log(message, volume);
// }
