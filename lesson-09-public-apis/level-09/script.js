const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  // TODO: Construct `data` from formTag.elements
  // TODO: Format data with `URLSearchParams` or `JSON.stringify`
  // TODO: Save formatted data into `dataString` and send via fetch using async/await
  // TODO: Parse `result` and update the page; handle errors with try/catch
}
