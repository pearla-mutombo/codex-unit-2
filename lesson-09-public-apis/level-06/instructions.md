## Level 06 — Trivia Feedback

## Objective

Render a trivia question and present selectable choices.

## Benefits

- Builds UI skills: taking API data and turning it into interactive choices.
- Reinforces array/object navigation for nested API responses.

## Complete these tasks

- Fetch trivia questions from the endpoint using `async/await`.
- Save the first question text to `question` (`result[0].question.text`).
- Place correct and incorrect answers into separate variables.
- Display question and choices in the DOM.

## Hints

- The first incorrect answer is `result[0].incorrectAnswers[0]`.
- Combine `correctAnswer` and `incorrectAnswers` for the choice set.

## More information

- To navigating nested arrays & objects, use dot and bracket notation to access nested properties, for example `result[0].question.text`.
- To display choices as separate elements, create an element for each choice, then render each choice into its own element with `innerText` or `innerHTML`. For example:

```js
const choiceA = result[0].correctAnswer;
const choiceTagA = document.getElementById("choiceA");
choiceTagA.innerHTML = choiceA;
```

## Usage tips

- Render choices as buttons or radio inputs for easier accessibility.
- Sample response:

```js
[
  {
    category: "science",
    id: "622a1c3f7cc59eab6f9523ac",
    correctAnswer: "Amnesia",
    incorrectAnswers: ["Insomnia", "Coma", "Kleptomania"],
    question: {
      text: "A loss of memory is known as what?",
    },
    tags: ["medicine", "words", "science"],
    type: "text_choice",
    difficulty: "easy",
    regions: [],
    isNiche: false,
  },
  {
    category: "science",
    id: "6243357dcfaae40c129614ad",
    correctAnswer: "A Hatchling",
    incorrectAnswers: ["A Piglet", "A Maggot", "A Lamb"],
    question: {
      text: "What is the word for a young turtle?",
    },
    tags: ["science"],
    type: "text_choice",
    difficulty: "easy",
    regions: [],
    isNiche: false,
  },
];
```

## Example

```js
const question = result[0].question.text;
const correct = result[0].correctAnswer;
const incorrect1 = result[0].incorrectAnswers[0];
```
