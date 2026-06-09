// TODO: Create a handleSubmit(event) function and assign it to form.onsubmit.
// Inside the handler, use console.log to explain `onsubmit`.
// Example starter:
// const form = document.getElementById('sample-form');
// function handleSubmit(event) { console.log('onsubmit handler'); }
// form.onsubmit = handleSubmit;
 
// 1. Select the form element using its ID
const form = document.getElementById('sample-form');

// 2. Create the handleSubmit function that accepts the event object
function handleSubmit(event) {
  // Prevent the default browser reload on form submission
  event.preventDefault();

  // 3. Log an explanation of onsubmit to the console as requested
  console.log("onsubmit is functions as an event, where it waits until user, uses the submit button");
}

// 4. Assign the function reference to form.onsubmit (do not call it with parenthesis)
form.onsubmit = handleSubmit;
