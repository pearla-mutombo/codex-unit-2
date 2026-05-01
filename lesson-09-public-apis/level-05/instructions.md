## Level 05 — Trivia API

Objective
Send a GET request with query parameters to a Trivia API and render a question.

Benefits

- Practical experience building query strings and parsing JSON responses.

Complete these tasks

- Use `URLSearchParams` to build query parameters for the trivia endpoint.
- Fetch questions with `async`/`await` and parse the JSON result.
- Render the first question's text into the page.

Hints

- Inspect the API response shape in the console before rendering.

More information

- Many public trivia APIs return an array; pick the first item to display.

Usage tips

- Use small `amount` values while developing to simplify rendering.

Example

```
const q = result[0].question.text;
questionEl.textContent = q;
```
