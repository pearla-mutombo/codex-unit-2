# Level 02 — Using fetch for GET

## Objective

Show the built-in `fetch` function and trigger a GET request from a form handler.

## Benefits

- **Hands-on**: Attach a handler to a form and respond to submit events.
- **Intro to fetch**: Prepares students to inspect network responses.

## Complete these tasks

- **Save form**: get and save the form element to variable `form`.
- **Attach submit handler**: set `form.onsubmit` to a handler function (for example `handleSubmit`).
- **Prevent default**: the handler must call `event.preventDefault()` inside the handler.
- **Call fetch**: inside the handler call `fetch('https://api.jsoning.com/mock/public/users')` and save the returned value in a variable named `response`.
- **Explain fetch**: after calling `fetch`, set the target element's `innerText` to a short explanation about `fetch` when the form is submitted.

## Hints

- Use `document.getElementById` to find the form.
- The handler receives the `event` object.
- You can save the value returned by `fetch(...)` directly into `response` (you don't need to use `await` or `.then()` for this level).

## More information

- `fetch` is a function that starts a network request.
- It accepts a url to connect to.
- It returns a Promise.
- When the Promise is resolved, you can inspect the response from the server.

## Usage tips

- Keep the explanation short; the test checks the `result` element's text.

## Example

```js
form.onsubmit = function (event) {
  event.preventDefault();
  result.innerText = "fetch makes HTTP requests";
};
```
