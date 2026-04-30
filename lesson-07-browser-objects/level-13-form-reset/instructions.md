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

- `form.reset()` restores all form controls to their initial values as defined in the HTML (for example `value`, `checked`, and `selected` attributes). It sets the current value back to the element's default, it does not remove attributes.
- Calling `form.reset()` dispatches the form's native `reset` event. It does not submit the form and it does not invoke submit handlers.
- To clear or change individual controls, set `.value`/`.checked` directly; there is no built-in API to reset only one control with `form.reset()`.
- After resetting, the form's controls reflect their original default state (useful for returning the UI to its initial view after a successful submission).

## Usage tips

- Update a summary element with `innerText` to confirm success to the user.

## Example

```js
if (shouldReset) {
  form.reset();
}
```
