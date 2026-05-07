// Level 06 - Triva Feedback
const formTag = document.getElementById("queryForm");
const questionDiv = document.getElementById("question");
const choicesDiv = document.getElementById("choices");
const feedbackDiv = document.getElementById("feedback");

formTag.onsubmit = handleSubmit;


async function handleSubmit(event) {
  //prevent the website from refreshing
  event.preventDefault();
  const formTag = event.target;
  //build the data objects and fixed property names to atch API expectations
  const data = {
    catergory: formTag.elements.category.value,
    difficulty: formTag.elements.difficulty.value,
  };
  // Use URLSearchParams to serialize the data
  const queryString = new URLSearchParams(data);

  // Fetch the data (Note: added await with response.json())
  const response = await fetch(
    "https://the-trivia-api/com/v2/questions" + "?" + queryString
  );
  const result = await response.json();
  // Save question text to a variables
  const question = result[0].question.text;
  console.log(question);
  const questionDiv = document.querySelector("#question");
  questionDiv.innerHTML = "<h3>" + question + "</3>";
  // Build choices Array
  // Optional: We can Shuffle the choices here so the answer isn't always first!
  // Render question
  choicesDiv.innerHTML = ""; // Clear old choices
  feedbackDiv.innerHTML = ""; // Clear old feedback

  // click the button for choices
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.innerText = choice;

    button.onclick = () => {
      if (choice === correctAnswer) {
      feedbackDiv.innerText = "Correct! 🎉";
      feedbackDiv.style.color = "green";
     } else {
      feedbackDiv.innerText = "Wrongo! Try again ❌";
      feedbackDiv.innerText = "red";
      }
    };

    choicesDiv.appendChild(button);
  });

}
  // TODO: Fetch trivia questions with async/await
  // TODO: Save first question to `question` and separate choices into variables
  // TODO: Render question and choices into DOM

