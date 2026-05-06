## Level 02 — Feedback Message

## Objective

Show clear success and error feedback to the user after a login attempt.

## Benefits

- Teaches accessible feedback patterns using DOM APIs.
- Reinforces parsing API responses for UX messages.

## Complete these tasks

- Parse the response into a `result` variable.
- Select and store the `error` and `success` elements.
- On login failure, display the API error message in the `error` element (`innerText`).
- On login success, display a friendly message in the `success` element (`innerText`).
- On successful login, call `form.reset()`.

## Hints

- Use `document.getElementById('error')` and `document.getElementById('success')`.
- Look for an `error` or `message` field on the parsed `result`.

## More information

- https://dummyjson.com/docs/auth
- Example accounts: https://dummyjson.com/users

## Usage tips

- Use `aria-live` or `role="status"` on feedback elements for screen readers.

## Example

```js
// After parsing
if (errorMessage) errorEl.innerText = "Invalid credentials";
else {
  successEl.innerText = "Logged in!";
  form.reset();
}
```
