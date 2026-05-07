const messageEl = document.getElementById("message");

// TODO: Select the message element and insert a short explanation about API keys
// insert an explanation about API keys into message
if (messageEl) {
  messageEl.innerText =
    "API keys identify your app to a service; do not commit them publicly. its keys are unique credentials that identify your app to a service and tracks your usage; they are secrets and should never be shared publicly or committed to repositories";
}
