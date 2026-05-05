function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  // 1. Read values via form.elements
  const nameValue = form.elements.name.value;
  const messageValue = form.elements.message.value;
  const volume = Number(form.elements.volume.value);
  const color = form.elements.color.value;
  const isSubscribed = form.elements.subscribe.checked;

  // 2. Validate required fields
  // Fix: Use nameValue (the variable you defined) instead of 'name'
  if (nameValue === "" || messageValue === "" || color === "") {
    alert("Please fill out the Name, Message, and pick a Color!");
    return;
  }

  // 3. Display summary
  const summary = document.getElementById("summary");
  if (summary) {
    // Fix: Corrected 'innerHTML' spelling and used backticks for template literals
    summary.innerHTML = `Thank you, ${nameValue}! Your message has been received.`;
  }

  // 4. Create extra object (Level 14 requirement)
  const formDataSummary = {
    user: nameValue,
    msg: messageValue,
    vol: volume,
    theme: color,
    marketing: isSubscribed,
    timestamp: new Date().toLocaleString()
  };
  console.log("Form Data Object:", formDataSummary);

  // 5. Reset and log
  form.reset();
  console.log("Form processed successfully.");
}

// Event Listener setup
const form = document.getElementById('sample-form');
if (form) {
  // Fix: Corrected 'onsubmit' spelling
  form.onsubmit = handleSubmit;
}
