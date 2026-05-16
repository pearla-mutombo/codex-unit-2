## Level 10 — Form elements

## Objective

Access a form value using `form.elements` and display it in the DOM.

## Benefits

- **Readability**: Use named form controls for easy access.

## Complete these tasks

- Call `preventDefault` in handler.
- Save form via `event.target`.
- Read text input value from `form.elements.message.value` into `message`.
- Select output tag and set its `innerText` to the message.

## Hints

- `form.elements` lets you access controls by their `name` attribute.

## More information

- Accessing `form.elements.name` returns the control; use `.value` to get its current value.

## Usage tips

- `form.elements.message` is a reference to the input element, while `.value` is the string content.

## Example

```js
const message = form.elements.message.value;
```
