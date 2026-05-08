## Level 05 — POST with JSON payloads

## Objective

- Send a POST request with a JSON payload and appropriate headers.

## Benefits

- Teach the `Content-Type` header and how servers parse JSON bodies.
- Prepare students to construct payloads matching API schemas.

## Complete these tasks

- Send a POST request to `https://dummyjson.com/auth/login`.
- Add `username` and `password` to the request.
- Read the API docs for required fields at `https://dummyjson.com/docs/auth`.
- In Postman, try different values for `username` and `password`.
- Valid values are here: `https://dummyjson.com/users`
- Use `script.js` to `console.log` one fact learned from the documentation.

## Hints

- Use Postman's `x-www-form-urlencoded` option.

## More information

- To attaching key/value pairs in Postman, open the `Body` tab and choose one of the following based on the API's expected format:
  - `x-www-form-urlencoded`: adds URL-encoded key/value pairs (typical for traditional HTML form submissions).
  - `raw` → `JSON`: enter a JSON object with key/value pairs (e.g. `{ "username": "alice", "password": "secret" }`) for JSON APIs.
- Postman will normally add `Content-Type` automatically (e.g. `application/json` for raw JSON). Verify or add headers in the `Headers` tab if needed.

## Usage tips

- Start with a minimal JSON object and add fields if required by the API.
- The `Content-Type` header tells the server how to parse the request body. JSON is commonly used for APIs.
