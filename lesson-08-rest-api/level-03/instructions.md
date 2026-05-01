# Level 03 — Intro to async/await

## Objective

Explain `async`/`await` and apply them to a GET request to `https://postman-echo.com/get`.

## Benefits

- **Clear flow**: makes Promise-based code read like synchronous code.
- **Error handling**: easier with `try/catch` around `await` calls.

## Complete these tasks

- **Save form**: get and save the form element to `form`.
- **Attach handler**: set `form.onsubmit` to a function.
- **Prevent default**: call `event.preventDefault()` in the handler.
- **Async/await**: use `async`/`await` when calling `fetch` inside the handler.
- **Explain**: set a target element's `innerText` explaining async/await.

## Hints

- Mark the handler `async` and `await fetch(...)`.
- Keep the explanation descriptive and short.

## More information

- `async` marks a function that returns a Promise; `await` pauses execution until the Promise resolves.
- Use `await response.json()` to parse JSON from a `Response`.

## Usage tips

- Wrap `await` calls in `try/catch` for robust code.

## Example

```js
async function handleSubmit(e) {
  e.preventDefault();
  const r = await fetch("https://postman-echo.com/get");
}
```
