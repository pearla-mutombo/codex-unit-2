## Level 02 — Feedback Message

Objective
Show clear success and error feedback to the user after a login attempt.

Benefits

- Improves UX by surfacing meaningful API responses.
- Teaches DOM updates and form lifecycle (resetting).

Complete these tasks

- Add elements with ids `error` and `success` to the page.
- Select these elements in `script.js` and update them after parsing responses.
- On success, display a friendly message and call `form.reset()`.
- On failure, display the API error message in the `error` element.

Hints

- Use `element.textContent = '...'` and set appropriate ARIA roles.
- Clear the opposite element when showing an error/success to avoid mixed messages.

More information

- Keep messages short and actionable. For tests, ensure elements exist and are updated.

Usage tips

- Use `aria-live` regions so assistive tech announces updates.

Example

- Update an element:

```
errorEl.textContent = 'Login failed: invalid credentials';
```
