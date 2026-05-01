# Level 03 — Intro to async/await

## Objective

Explain `async`/`await` and apply them to a GET request to `https://api.jsoning.com/mock/public/users`.

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

- Mark the handler function as `async` and `await fetch(...)`.
- Keep the explanation descriptive and short.

## More information

- `async` marks a function as asynchronous (it may take some time to complete).
- `await` pauses execution until the the asynchronous operation finishes and returns a value.
- `Promise` object: will hold a value when the asynchronous operation has finished.
- While the asynchronous operation is ongoing, the Promise is `pending`.

## Usage tips

- Wrap `await` calls in `try/catch` for robust code.

## Example

```js
async function handleSubmit(e) {
  e.preventDefault();
  const r = await fetch("https://api.jsoning.com/mock/public/users");
}
```
