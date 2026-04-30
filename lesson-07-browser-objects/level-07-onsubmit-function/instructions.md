# Level 07 — onsubmit function

## Objective

Assign a named function to `form.onsubmit` that accepts an `event` parameter and logs a short explanation of `onsubmit`.

## Benefits

- Teaches basic event handler assignment on form elements.

## Complete these tasks

- Create a handler function.
- Assign the handler to `form.onsubmit`.
- Ensure the handler accepts an `event` argument and calls `console.log`.

## Hints

- It convention to start handler functions with `handle`.
- The handler can be a named function: `function handleSubmit(event) { ... }` and then `form.onsubmit = handleSubmit`.

## More information

- Handlers are functions that run when an event occurs (for example, a form submission). They always receive an `Event` object as the first argument.
- Assigning a function to `form.onsubmit` registers a submit handler that runs when the form is submitted (for example, when a submit button is clicked or `form.submit()` is called).
- The handler receives an `Event` object as its first argument. Use `event.preventDefault()` to stop the browser's default navigation/submit behavior so you can handle submission in JavaScript.
- When a handler is assigned as `form.onsubmit = handler`, inside a non-arrow `handler` function `this` refers to the form. You can also use `event.target` or `event.currentTarget` to reference the form.

## Usage tips

- Keep the handler body short; just log a message for this level.

## Example

```js
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  console.log("Form was submitted");
}
```
