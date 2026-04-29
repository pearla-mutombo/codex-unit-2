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

## Usage tips

- Use `const message = form.elements.message.value` and then update an output element.

## Example

```
// hint only
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements.name.value;
  console.log(name);
}
```
