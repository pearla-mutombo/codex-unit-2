# Level 06 — Pre-process the form

## Objective

Collect form input values into a plain JavaScript object before sending.

## Benefits

- **Structure data**: Prepare values for JSON serialization.
- **Predictability**: Ensures keys match server expectations.

## Complete these tasks

- **Inputs may not have names**: the provided form's inputs do not include `name` attributes.
- **Use form.elements**: in the handler, access inputs by index via `form.elements[index]`.
- **Build data**: save input values into a `data` object (choose descriptive keys) before sending.

## Hints

- Use `form.elements[0].value`, `form.elements[1].value`, etc., when inputs have no `name`.
- Use a plain object: `const data = { name: form.elements[0].value, email: form.elements[1].value }`.

## More information

- `form.elements` exposes inputs keyed by their `name` attribute and also as an indexed collection.
- JSON-ready objects can be passed to `fetch` via `JSON.stringify(data)`.

## Usage tips

- Keep object keys identical to `name` attributes to match tests when names are present; otherwise choose clear keys.

## Example

```js
const data = { name: form.elements[0].value };
```
