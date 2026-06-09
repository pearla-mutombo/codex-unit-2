// Level 06 - Triva Feedback
const formTag = document.getElementById("queryForm");
const questionDiv = document.getElementById("question");
const feedbackEl = document.getElementById("feedback");

// tagert the choice elements
const choiceTagA = document.getElementById("choiceA");
const choiceTagB = document.getElementById("choiceB");
const choiceTagC = document.getElementById("choiceC");
const choiceTagD = document.getElementById("choiceD");

formTag.onsubmit = handleSubmit;


async function handleSubmit(event) {
  //prevent the website from refreshing
  event.preventDefault();

  // Clear any existing feedback text
  feedbackEl.innerText = "";

  const formTag = event.target;

  //build the data objects and fixed property names to atch API expectations
  const data = {
    catergories: formTag.elements.categories.value,
    difficulties: formTag.elements.difficulties.value,
  };
  // Use URLSearchParams to serialize the data
  const searchParams = new URLSearchParams(data);
  const query = searchParams.toString();

  try {
  // Fetch the data (Note: added await with response.json())
  // Fetch trivia questions from the endpoint using async/await
    const response = await fetch(
      "https://the-trivia-api.com/v2/questions" + "?" + query
    );
    const result = await response.json();
   // Task: Save the first question text to question
    // Note: The structure is result[0].question.text
    const questionText = result.question.text;
    

    // Task: Place correct and incorrect answers into separate variables.
    const correct = result.correctAnswer;
    const incorrect1 = result.incorrectAnswers;
    const incorrect2 = result.incorrectAnswers;
    const incorrect3 = result.incorrectAnswers;

    // Hint: Combine correctAnswer and incorrectAnswers for the choice set.
    const allChoices = [correct, incorrectAnswers];

    // Task: Display question and choices in the DOM
    questionDiv.innerText = question;

    // Task: Display choices in the DOM using your hardcoded output tags.
    // Assign the choices into their respective elements
    choiceTagA.innerText = allChoices;
    choiceTagB.innerText = allChoices;
    choiceTagC.innerText = allChoices;
    choiceTagD.innerText = allChoices;

    // Optional: Add basic click listeners to check the answer
    const checkAnswer = (element) => {
      if (element.innerText === correct) {
        feedbackEl.innerText = "🎉 Correct answer!";
      } else {
        feedbackEl.innerText = `❌ Incorrect. The right answer was: ${correct}`;
      }
    };
    
    choiceTagA.onclick = () => checkAnswer(choiceTagA);
    choiceTagB.onclick = () => checkAnswer(choiceTagB);
    choiceTagC.onclick = () => checkAnswer(choiceTagC);
    choiceTagD.onclick = () => checkAnswer(choiceTagD);

  } catch (error) {
    console.error("Failed to fetch trivia payload:", error);
    questionDiv.innerText = "Error loading your trivia question.";
  }
}



  // TODO: Fetch trivia questions with async/await
  // TODO: Save first question to `question` and separate choices into variables
  // TODO: Render question and choices into DOM

