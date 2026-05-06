## Level 01 — Login API

## Objective

Use a fake login API to authenticate a user.

## Benefits

- Short hands-on intro to POST requests and JSON payloads.
- Shows how forms and `fetch()` integrate in the browser.

## Complete these tasks

- Call `event.preventDefault()` in the submit handler.
- Create a `data` object containing `username` and `password`.
- Format the `data` object with `JSON.stringify(data)` and save to `dataString`.
- Use `async`/`await` with `fetch` to `https://dummyjson.com/auth/login`.
- Use an options object to set `method: 'POST'` and send `dataString` in `body`.
- Include JSON headers: `"Content-Type": "application/json"`.
- Store the response in `response` and parse it into `result`.
- `console.log(result)`.

## Hints

- Read values from `form.elements` to build the `data` object.
- Use `await response.json()` to parse the response.

## More information

- https://dummyjson.com/auth/login

## Usage tips

- For testing, use the example accounts listed in the API docs.

## Example

```js
// Minimal POST structure (not a full solution)
const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: `dataString`,
});
```
