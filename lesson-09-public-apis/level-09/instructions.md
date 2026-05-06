## Level 09 — Challenge

## Objective

Build a small client: choose a public API, implement a form, fetch data, and show robust feedback.

## Benefits

- Synthesizes skills from prior levels: forms, query strings/JSON bodies, fetch, and error handling.
- Encourages independent API selection and basic UX for success/error states.

## Complete these tasks

- Collect data with a form with at least one input.
- Call `event.preventDefault()` in the submit handler.
- Construct a `data` object with `form.elements`.
- Format `data` with `URLSearchParams` or `JSON.stringify`.
- Save formatted data into `dataString`.
- Send `dataString` through the request URL or body.
- Use `async/await` with `fetch` and parse the `response` into `result`.
- Display data from `results` to the page.
- Handle errors with `try/catch`.
- Display error messages in an element with `id="error"`.
- Display success messages in an element with `id="success"`.

## Hints

- Start with a simple public API (e.g., trivia, jokes) and keep requests small.
- Use `aria-live` regions for feedback so screen readers announce results.

## More information

- Encourage students to pick a public API referenced earlier in this lesson.

## Usage tips

- Validate inputs before sending and show clear messages for both success and failure.

## Example

```js
// High-level flow (not a full solution)
event.preventDefault();
const data = { value: form.elements.value.value };
const dataString = JSON.stringify(data);
const res = await fetch(url, { method: "POST", body: dataString });
```
