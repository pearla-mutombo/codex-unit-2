# Level 07 — onsubmit function

## Objective

Assign a named function to `form.onsubmit` that accepts an `event` parameter and logs a short explanation of `onsubmit`.

## Benefits

- Teaches basic event handler assignment on form elements.

## Complete these tasks

- Assign a handler to `form.onsubmit`.
- Ensure the handler accepts an `event` argument and calls `console.log`.

## Hints

- The handler can be a named function: `function handleSubmit(event) { ... }` and then `form.onsubmit = handleSubmit`.

## More information

- Without `preventDefault()` the browser will navigate when the form submits.

## Usage tips

- Keep the handler body short; just log a message for this level.

## Example

```
// small hint
function handleSubmit(event) { console.log('onsubmit'); }
```
