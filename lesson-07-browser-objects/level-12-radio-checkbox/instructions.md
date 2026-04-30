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
- `checked` is a boolean; `value` on radios/inputs is a string.

## More information

- Radio buttons that share a `name` form a group; when accessed via `form.elements.name` you typically get a `RadioNodeList` whose `.value` reflects the currently selected radio's `value` (or an empty string if none are selected).
- Checkboxes expose a boolean `checked` property. For a single checkbox use `form.elements.checkboxName.checked` to read its state.
- Access patterns:
  - Single radio group: `const color = form.elements.color.value` (selected value as string)
  - Single checkbox: `const subscribed = form.elements.subscribe.checked` (boolean)
- Remember types: `.value` is a string, `.checked` is boolean — coerce as needed before using in logic.

## Usage tips

- Use descriptive variable names like `const subscribed = form.elements.subscribe.checked`.

## Example

```js
// small hint
console.log(form.elements.color.value, form.elements.subscribe.checked);
```
