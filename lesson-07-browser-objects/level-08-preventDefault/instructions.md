# Level 08 — preventDefault

## Objective

Update the submit handler to call `event.preventDefault()` before logging and explain why it is necessary.

## Benefits

- Prevents navigation so client-side logic can run safely.

## Complete these tasks

- Ensure the submit handler calls `event.preventDefault()` as its first action.
- Log a short explanation of why `preventDefault()` is used.

## Hints

- `event.preventDefault()` stops the browser's default submission/navigation.

## More information

- Use this when you want to handle form data in JavaScript without reload.

## Usage tips

- Call `preventDefault()` before reading form values.

## Example

```
function handleSubmit(event) {
  event.preventDefault();
  console.log('preventDefault stops navigation');
}
```
