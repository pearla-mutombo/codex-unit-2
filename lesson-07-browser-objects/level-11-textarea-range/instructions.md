## Level 11 — Textarea and range values

## Objective

Read textarea and range control values from `form.elements`. Convert numeric strings with `Number()` as needed.

## Benefits

- **Data types**: Learn that form inputs return strings and may need conversion.

## Complete these tasks

- Call `preventDefault` at handler start.
- Save form via `event.target`.
- Save `form.elements.message.value` into `message`.
- Save `form.elements.volume.value` into `volume` and convert with `Number()`.
- Console.log both values.

## Hints

- Use `Number()` to convert string input to numeric type for calculations.

## More information

- Form input values are always strings; use `Number()` or `parseInt`/`parseFloat` for numeric conversion.

## Usage tips

- Use `let` when you plan to reassign variables later.

## Example

```js
const message = form.elements.message.value;
const volume = Number(form.elements.volume.value);
```
