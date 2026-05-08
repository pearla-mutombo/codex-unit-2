// Level 06 - Triva Feedback
const formTag = document.getElementById("queryForm");
const questionDiv = document.getElementById("question");
const feedbackDiv = document.getElementById("feedback");

// tager the choice elements
const choiceTagA = document.getElementById("choiceA");
const choiceTagB = document.getElementById("choiceB");
const choiceTagC = document.getElementById("choiceC");
const choiceTagD = document.getElementById("choiceD");

formTag.onsubmit = handleSubmit;


async function handleSubmit(event) {
  //prevent the website from refreshing
  event.preventDefault();
  const formTag = event.target;
  //build the data objects and fixed property names to atch API expectations
  const data = {
    catergories: formTag.elements.categories.value,
    difficulties: formTag.elements.difficulties.value,
    limit: 1
  };
  // Use URLSearchParams to serialize the data
  const queryString = new URLSearchParams(data);

  try {
  // Fetch the data (Note: added await with response.json())
    const response = await fetch(
      "https://the-trivia-api.com/v2/questions" + "?" + queryString
    );
    const result = await response.json();
    const item = result[0];

    // Save  results into seperate  variables (note: array of all options)
    const questionText = result[0].question.text;
    const correctAnswer = result[0].correctAnswer;
    const choices = [correctAnswer,...result[0].incorrectAnswers]; // an Array of all options
    // const choiceA = result[0].correctAnswer[0];
    // const choiceB = result[0].incorrectAnswers[1];
    // const choiceC = result[0].incorrectAnswers[2];
    // const choiceD = result[0].inccorrectAnswers[3];
    // // console.log(question);

    // const questionDiv = document.querySelector("#question");
    // const choiceTagA= document.querySelector("#choiceA");
    // const choiceTagB = document.querySelector("#choiceB");
    // const choiceTagC = document.querySelector("#choiceC");
    // const choiceTagD = document.querySelector("#choiceD");

    // Render question
    questionDiv.innerText = questionText;
    feedbackDiv.innerText = ""; // Clear old feeedback
    // Assign text to the specific choice tags
    choiceTagA.innerText = "A) " + choices[0];
    choiceTagB.innerText = "B) " + choices[1];
    choiceTagC.innerText = "C) " + choices[2];
    choiceTagD.innerText = "D) " + choices[3];

    const tags = [choiceTagA, choiceTagB, choiceTagC, choiceTagD].forEach((tag, index) => {
      tag.onclick = () => {
        if (allChoices[index] === correctAnswer) {
          feedbackDiv.innerText = "Correct! 🎉";
          feedbackDiv.style.color = "green";
        } else {
          feedbackDiv.innerText = "Wrong! Try again ❌";
          feedbackDiv.style.color = "red";
        }
      };
    });

  } catch (error) {
    console.error("Error fetching trivia:", error);
    feedbackDiv.innerText = "Failed to load trivia.";
  }
}
  // TODO: Fetch trivia questions with async/await
  // TODO: Save first question to `question` and separate choices into variables
  // TODO: Render question and choices into DOM

