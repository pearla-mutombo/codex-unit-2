// Level 12 — radio-checkbox starter
// TODO: in submit handler read radio via form.elements.color.value and checkbox via form.elements.subscribe.checked
const form = document.querySelector("#sample-form");
if (form) {
  form.onsubmit = handleSubmit;
}

function handleSubmit(event) {
  // event.preventDefault();
  event.preventDefault();
  // const form = event.target;
  const form = event.target;
  // TODO: const color = form.elements.color.value;
  const color = form.elements.color.value;
  // TODO: const subscribe = form.elements.subscribe.checked;
  const subscribe = form.elements. subscribe.checked;
  console.log("Selected color:", color);
  console.log("Subscribed:", subscribe);
  console.log("radio & checkbox scaffold");
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
