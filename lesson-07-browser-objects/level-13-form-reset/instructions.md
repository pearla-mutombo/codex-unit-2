## Level 13 — Form reset

## Objective

Implement submit handling that validates one or two fields and uses `form.reset()` to clear the form after a successful submission.

## Benefits

- **UX**: Reset forms after successful submissions to provide a clean state.

## Complete these tasks

- Call `preventDefault` at handler start.
- Save form via `event.target`.
- Read `firstName` and `lastName` from `form.elements`.
- Write `if` / `else if` statements to check values and call `form.reset()` when appropriate.
- Use the debugger to observe `form.reset()` behavior.

## Hints

- Example check: `if (firstName === "Bob") { form.reset(); }`.

## More information

- `form.reset()` restores form controls to their initial values.

## Usage tips

- Use `===` for strict string comparisons.

## Example

```js
if (firstName === "Bob") {
  form.reset();
}
```
