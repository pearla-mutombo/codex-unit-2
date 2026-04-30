# Level 10 — form elements

## Objective

Use `const form = event.target` and read values via `form.elements` (for example `form.elements.message.value`), saving into descriptive variables and logging them.

## Benefits

- Teaches reading control values by `name` from inside a handler.

## Complete these tasks

- Assign a named function to `form.onsubmit` and ensure it accepts `event`.
- Call `event.preventDefault()` and read a text input value using `form.elements`.
- Display the value in the DOM using `innerText`.

## Hints

- Ensure inputs have `name` attributes so `form.elements` exposes them.

## More information

- `form.elements` uses control `name` attributes as keys (e.g. `form.elements.message`).
- `form.elements` is an array-like, live collection of a form's controls. It updates automatically when controls are added or removed.
- You can access controls by `name` (for example `form.elements.message`) or by index (`form.elements[0]`). Use `form.elements.namedItem(name)` or `form.elements.item(index)` when helpful.
- For groups of controls with the same `name` (for example radio buttons), the collection returns a `RadioNodeList` — read its `.value` to get the currently selected value.

## Usage tips

- Use `const message = form.elements.message.value` and then update an output element.

## Example

```js
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const userName = form.elements.userName.value;
  console.log(userName);
}
```
