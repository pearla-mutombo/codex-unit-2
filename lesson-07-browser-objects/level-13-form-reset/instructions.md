# Level 13 — form-reset

## Objective

Validate one field in the submit handler; on success display a DOM summary and call `form.reset()` to clear inputs.

## Benefits

- Shows how to programmatically clear a form after successful handling.

## Complete these tasks

- Call `event.preventDefault()` in the handler.
- Validate one field (e.g. non-empty name); if valid, display a summary and call `form.reset()`.

## Hints

- `form.reset()` returns controls to their initial values.

## More information

- Use simple checks (like `if (!value)`) for this exercise — no complex validation required.

## Usage tips

- Update a summary element with `innerText` to confirm success to the user.

## Example

```
// hint-only
if (name) { form.reset(); }
```
