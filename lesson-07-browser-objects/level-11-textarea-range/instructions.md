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

## More information

- Use `console.log(typeof value)` to confirm conversions during debugging.

## Usage tips

- Validate user input before using numeric values in calculations.

## Example

```
// hint-only
const vol = Number(form.elements.volume.value);
console.log(typeof vol, vol);
```
