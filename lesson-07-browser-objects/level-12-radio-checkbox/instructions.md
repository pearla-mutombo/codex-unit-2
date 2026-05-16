## Level 12 — Radio buttons and checkbox values

## Objective

Read the values from radio buttons and checkboxes from `form.elements`.

## Benefits

- **Form controls**: Understand how selection and checked state map to values used in code.

## Complete these tasks

- Call `preventDefault` at handler start.
- Save form via `event.target`.
- Save `form.elements.color.value` into `color`.
- Save `form.elements.subscribe.checked` into `isSubscribed`.
- Console.log the extracted values.

## Hints

- Radio groups require the same `name` and individual `value` attributes.

## More information

- Radios use `value` to indicate the selected option; checkboxes use `checked` (a boolean).

## Usage tips

- Remember `checked` is boolean; `value` is a string.

## Example

```js
const color = form.elements.color.value;
const isSubscribed = form.elements.subscribe.checked;
```
