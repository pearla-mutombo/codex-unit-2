const triviaForm = document.getElementByIB("trivia-form");
const questionEl6 = document.getElementById("question");
const choicesEl6 = document.getElementById("choices");
const feedbackEl6 = document.getElementById("feedback");

if (triviaForm){
    triviaForm.onsubmit = handleSubmit;
}

async function handleSubmit(event) {
    event.preventDefault();
    feedbackEl6.textContent = ""; // We need to Reset Feeback
    
    //APT v2 uses plural keys: 'catergories and difficulties'
    const data = {
        categories: triviaForm.elements.category.value,
        difficulties: triviaForm.elements.difficulty.value,
        limit: 1
    };
    const params = new URLSearchParams(data);

    try {
        const response = await fetch(`https://the-trivia-api.com/v2/questions?${params}`); //fixed comma to semicolon
        const triviaData = await response.json();
        const questionData = triviaData[0]; // get the first object in the array
        const question = questionData.question.text; // save the specific text string
        //render question
        questionEl6.innerHTML = questionData.question.text;
        //shuffle answers
        const answers = [
            questionData.correctAnswer,
            ...questionData.incorrectAnswers
        ].sort(() => Math.random() - 0.5);

        //render choice buttons
        choicesEl6.innerHTML = "";
        answers.forEach(answer => {
            const btn = document.createElement("button");
            btn.textContent = answer;

            btn.onclick = () => {
                if (answer === questionData.correctAnswer) {
                    feedbackEl6.textContent = "Correct! ";
                    feedbackEl6.style.color = "green"; // fixed typo 'feerback' instead feedback
                }else {
                    feedbackEl6.textContent = `Wrong! It was: ${questionData.correctAnswer}`;
                    feedbackEl6.style.color = "red";
                }
            };
            choicesEl6.appendChild(btn);
        });
    } catch (err) {
        feedbackEl6.textContent = "Error loading trivia.";
    }
}
console.log(triviaData);
 
// TODO: fetch a question, extract correct & incorrect answers, shuffle them
// TODO: render choices as accessible buttons and wire click handlers
// TODO: show feedback on selection and provide retry/next controls

