# Level 06 — Form Object

## Objective

Select a form element and log properties: `id`, `name`, `elements.length`, `method`, `action`, `enctype`.

## Benefits

- Understand form metadata useful for submission and client-side handling.

## Complete these tasks

- Select `#sample-form` and `console.log` the listed properties.

## Hints

- `form.elements` is a collection indexed by `name` and number.

## More information

- When you select a form (eg., with `document.getElementById(...)`) you receive an `Element` that has access to the values collected by the form.

## Usage tips

- Use descriptive variable names like `const form = document.getElementById('sample-form')`.

## Example

```js
const form = document.getElementById("sample-form");
```
