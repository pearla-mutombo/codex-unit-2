# Level 12 — radio & checkbox

## Objective

Read selected radio values and checkbox states via `form.elements` or `FormData` and log descriptive variables.

## Benefits

- Shows how to read selection controls and boolean `checked` states.

## Complete these tasks

- Ensure the submit handler calls `preventDefault()`.
- Read `form.elements.color.value` for the selected radio and `form.elements.subscribe.checked` for the checkbox.
- Log both values.

## Hints

- Radios with the same `name` expose the selected value via `.value`.

## More information

- `checked` is a boolean; `value` on radios/inputs is a string.

## Usage tips

- Use descriptive variable names like `const subscribed = form.elements.subscribe.checked`.

## Example

```
// small hint
console.log(form.elements.color.value, form.elements.subscribe.checked);
```
