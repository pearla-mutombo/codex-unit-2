// Level 05 - Trivia api
// Match the ID from the html: "queryForm"
const formTag = document.getElementById("queryForm");
const questionDiv = document.getAnimations("question");

formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  // Prevent the page from refreshing immediately
  event.preventDefault();

  const formTag = event.target;

  // Read the values from HTML and create the data object
  const data = {
    categories: formTag.elements.categories.value,
    difficulties: formTag.elements.difficulties.value,
  };

  // Use URLSearchParams to serialize the data
  const searchParams = new URLSearchParams(data);
  const query = searchParams.toString();

  try {
    // Fetch the data (note: added await for response.json())
    const response = await fetch(
      "https://the-trivia-api.com/v2/questions" + "?" + query,
    );

    if (!response.ok) {
      // Parse `result`
      const result = await response.json();
      questionDiv.innerText = result[0].question.text;
    } else {
      questionDiv.innerText = "Error loading question. Please try again.";
    }

    // Display the first "result[0]" question's text into the DOM
    // note: the v2 API structure is resul[0].question.text
  } catch (error) {
    console.error("Failed to fetch trivia:", error);
    questionDiv.innerText = "Error loading question. Please try again.";
  }
}
// Display
// TODO: Build data object from formTag.elements and convert with URLSearchParams
// TODO: Use async/await with fetch to call https://the-trivia-api.com/v2/questions
// TODO: Parse `result` and display result[0].question.text into the DOM
