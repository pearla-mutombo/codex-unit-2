## Level 05 — Trivia API

## Objective

Send a GET request to the Trivia API and render a question.

## Benefits

- Practice building query strings and rendering API data in the DOM.
- Reinforces parsing nested objects from JSON responses.

## Complete these tasks

- Build a `data` object from `form.elements`.
- Convert `data` with `URLSearchParams` and store it in `query`.
- Use `async`/`await` with `fetch` to `https://the-trivia-api.com/v2/questions`.
- Attach the query string to the URL (`?` + `query`).
- Parse the response into `result` and get `result[0].question.text`.
- Display the question on the page with `innerText` or `innerHTML`.

## Hints

- The first question is at `result[0].question.text`.
- Fetch defaults to GET when no options object is supplied.

## More information

- https://the-trivia-api.com/docs/

## Usage tips

- Use small, controlled query values when testing to keep responses predictable.

## Example

```js
const url =
  "https://the-trivia-api.com/v2/questions?" +
  new URLSearchParams(data).toString();
const res = await fetch(url);
const result = await res.json();
```
