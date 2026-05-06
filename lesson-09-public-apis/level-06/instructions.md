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

- Sample response shape is in the lesson plan for guidance.

## Usage tips

- Render choices as buttons or radio inputs for easier accessibility.

## Example

```js
const question = result[0].question.text;
const correct = result[0].correctAnswer;
const incorrect = result[0].incorrectAnswers;
```
