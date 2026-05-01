## Level 06 — Trivia Feedback

Objective
Render a multiple-choice trivia question and present selectable choices.

Benefits

- Practices DOM rendering, event handling, and basic state management.

Complete these tasks

- Fetch a question and extract correct and incorrect answers.
- Shuffle choices, render them as accessible buttons, and wire click handlers.
- Provide feedback on selection and allow retrying or next question.

Hints

- Use an array shuffle helper and `button` elements for keyboard accessibility.

More information

- Keep the feedback clear: show correct/incorrect and an option to continue.

Usage tips

- Disable buttons after selection to avoid multiple submissions.

Example

```
choices.forEach(text => { const b=document.createElement('button'); b.textContent=text; });
```
