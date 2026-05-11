## Level 02 — Simple GET and docs reading

## Objective

- Make a GET request to a public API, view the response, and read the docs.

## Benefits

- Learn to inspect status, headers, and JSON response bodies.
- Practice reading API docs to understand endpoints and examples.

## Complete these tasks

- With Postman, send a GET request to `https://the-trivia-api.com/v2/questions`.
- Inspect status, headers, and body.
- Open the API docs `https://the-trivia-api.com/docs/#tag/Questions/operation/getRandomQuestions`.
- Use `script.js` to `console.log` one fact learned from the documentation.

## Hints

- Look for a 200 status to confirm success.
- Use Postman's "Pretty" response view to read JSON.

## More information

- GET requests retrieve data; responses include status, headers, and body.
- To sending a GET request in Postman, set the method to `GET` (default), paste the endpoint URL into the request bar, and click `Send` to view the response.
- Inspect the `Status`, `Headers`, and use the `Pretty` view for JSON in the Response panel.
- Servers commonly return JSON for API endpoints.
- JSON (JavaScript Object Notation) is a lightweight, text-based format for structured data, using objects (key-value pairs) and arrays.
- JSON data types: strings, numbers, objects, arrays, booleans, and null.
- In JavaScript, convert a JSON string to an object with `JSON.parse()` and convert an object to JSON with `JSON.stringify()`.

## Usage tips

- Use Postman's history to re-open requests you tried earlier.
