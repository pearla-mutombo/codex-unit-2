# Level 07 — Send form data with POST

## Objective

Send the pre-processed data object as a POST to `https://postman-echo.com/post` and inspect the echoed response.

## Benefits

- **End-to-end**: Practice sending JSON payloads and inspecting server echoes.
- **Real requests**: See how data is transmitted in POST bodies.

## Complete these tasks

- **Inputs may not have names**: the provided form's inputs do not include `name` attributes.
- **Build data**: use `form.elements[index]` to read values (for example `form.elements[0].value`) and construct a `data` object with descriptive keys.
- **POST**: use `async`/`await` to fetch POST `https://postman-echo.com/post` with the `data` attached in the request body.
- **Explain**: set a target element's `innerText` explaining how data is attached to a POST request.

## Hints

- Use `fetch(url, { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(data) })`.
- The echo server will include your sent data in the response JSON.

## More information

- POST requests send a body; when sending JSON set `Content-Type: application/json` and `JSON.stringify(data)`.
- Servers echoing requests are useful for testing client behavior.

## Usage tips

- Choose clear keys for your `data` object (for example `{ a: ..., b: ..., c: ... }`) when inputs have no `name` attributes.

## Example

```js
await fetch("https://postman-echo.com/post", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
```
