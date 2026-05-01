# Level 02 — Using fetch for GET

## Objective

Show the built-in `fetch` function and trigger a GET request from a form handler.

## Benefits

- **Hands-on**: Attach a handler to a form and respond to submit events.
- **Intro to fetch**: Prepares students to inspect network responses.

## Complete these tasks

- **Save form**: get and save the form element to variable `form`.
- **Attach submit handler**: set `form.onsubmit` to a handler function.
- **Prevent default**: the handler must call `event.preventDefault()`.
- **Explain fetch**: on submit, set a target element's `innerText` to a short explanation about `fetch`.

## Hints

- Use `document.getElementById` to find the form.
- The handler receives the `event` object.

## More information

- `fetch(url)` starts a network request and returns a Promise that resolves to a `Response` object.
- You can inspect the response or parse its body later with `response.json()`.

## Usage tips

- Keep the explanation short; the test checks the `result` element's text.

## Example

```js
form.onsubmit = function (event) {
  event.preventDefault();
  result.innerText = "fetch makes HTTP requests";
};
```
