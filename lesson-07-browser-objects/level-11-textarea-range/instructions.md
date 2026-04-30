# Level 11 — textarea & range

## Objective

Read `textarea` and `range` input values from `form.elements` and coerce numeric values with `Number()` when appropriate.

## Benefits

- Demonstrates reading different control types and simple type conversion.

## Complete these tasks

- Save `event.target` to `form` in your handler and call `preventDefault()`.
- Read `form.elements.message.value` and `Number(form.elements.volume.value)` and log them.

## Hints

- Range inputs return strings; use `Number()` to convert to numeric values.
- The `Number` function takes in a string, then returns it as a number.

## More information

- `textarea` values are plain strings and preserve newlines; read and set them with the `.value` property. Use `.trim()` to remove surrounding whitespace when appropriate.
- `range` inputs (`<input type="range">`) expose their value via `.value` (a string) and `.valueAsNumber` (a number or `NaN`). Use `min`, `max`, and `step` attributes to control allowed values.
- Browsers fire `input` events continuously as a range slider moves (good for live previews) and `change` when the value is committed; choose the event that fits your UX.
- When reading from `form.elements`, the range control is returned as an `HTMLInputElement` — coerce with `Number(form.elements.volume.value)` or use `form.elements.volume.valueAsNumber` for numeric math.

## Usage tips

- Validate user input before using numeric values in calculations.

## Example

```js
const vol = Number(form.elements.volume.value);
console.log(typeof vol, vol);
```
