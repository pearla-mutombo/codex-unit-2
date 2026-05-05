const { formatDiagnostic } = require("typescript");

const triviaForm = document.getElementById("trivia-form");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const incorrectAnswersEl = document.getElementById("incorrectAnswers");


if (triviaForm) {
  triviaForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = {
      category: triviaForm.elements.category.value,
      difficulty: triviaForm.elements.difficulty.value,
    };

    const params = new URLSearchParams(data);
    const response = await fetch(
      `https://the-trivia-api.com/v2/questions?${params}`,
    );
    const triviaData = await response.json();

    questionEl.innerHTML = triviaData[0].question.text;
    answerEl.innerHTML = triviaData[0].correctAnswer;
    incorrectAnswersEl.innerHTML = triviaData[0].incorrectAnswers.join(" ");
    console.log(triviaData);

    // TODO: preventDefault, build query params with URLSearchParams
    // TODO: fetch trivia API with async/await then parse JSON
    // TODO: render result[0].question.text into the page

  });
}
