// Level 05 - Trivia api
// Match the ID from the html: "queryForm" 
const formTag = document.getElementById("queryForm");

formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  // Prevent the page from refreshing immediately
  event.preventDefault();

  const formTag = event.target;

  // Read the values from HTML and create the data object
  const data = {
    caterogies: formTag.elements.categories.value,
    difficulties: formTag.elements.difficulties.value,
  };

  // Use URLSearchParams to serialize the data
  const queryString = new URLSearchParams(data);
  try {
  // Fetch the data (note: added await for response.json())
  const response = await fetch(
    "https://the-trivia-api.com/v2/questions" + "?" + queryString,
  );
  // Parse `result` 
  const result = await response.json();

  // Display the first "result[0]" question's text into the DOM
    if (result.length > 0) {
      // note: the v2 API structure is resul[0].question.text
    questionDiv.innerText = result[0].question
    } else {
    questionDiv.innerText = "No questions found. Try different filters!.";
    }
  } catch (error) {
  console.error("Fetch error:", error);
  questionDiv.innerText = "Failed tot load question.";
  }
}
  // Display
  // TODO: Build data object from formTag.elements and convert with URLSearchParams
  // TODO: Use async/await with fetch to call https://the-trivia-api.com/v2/questions
  // TODO: Parse `result` and display result[0].question.text into the DOM

