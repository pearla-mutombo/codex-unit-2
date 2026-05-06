## Level 03 — Error handling

## Objective

Detect and handle network and HTTP errors.

## Benefits

- Builds resilience for flaky networks and API failures.
- Teaches `try/catch` and error reporting to users and consoles.

## Complete these tasks

- Wrap fetch calls in a `try/catch` block.
- Put handler code into the `try` block.
- In `catch`, inspect the `error` and use `console.error` to log a message.
- In `catch`, update the `error` element's `innerText` with an appropriate message.
- On success, update `success` element and call `form.reset()` where applicable.

## Hints

- Network errors throw; HTTP errors may require checking `response.ok`.
- Use `console.error(error)` to help debug failing fetches.

## More information

- Primer on `try/catch` and the error object.

## Usage tips

- Distinguish user-facing messages from console logs; avoid leaking raw error objects to users.

## Example

```js
try {
  const response = await fetch(url);
  if (!response.ok) throw new Error("HTTP " + response.status);
  const result = await response.json();
} catch (err) {
  console.error(err);
  errorEl.innerText = "Network error — try again.";
}
```
