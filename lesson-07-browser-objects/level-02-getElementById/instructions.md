## Level 02 — Get Element By ID

## Objective

Use `document.getElementById` to select an element and inspect its common properties.

## Benefits

- **Precision**: Select a single element quickly by its `id`.
- **Exploration**: See common element properties used in scripting.

## Complete these tasks

- Type each line from scratch. Do not copy/paste.
- Use `getElementById` to obtain the element with the sample ID.
- Save the element in a variable called `element`.
- Use `console.log` to display `element.id`, `element.classList`, `element.innerText`, `element.innerHTML`, and `element.attributes`.
- Use the debugger to inspect `element`.

## Hints

- `element.classList` is a DOMTokenList you can iterate.
- `element.attributes` is a NamedNodeMap of attributes.

## More information

- `document.getElementById(id)` returns the first matching element or `null` if none.
- `innerText` shows rendered text, `innerHTML` shows markup.

## Usage tips

- If `getElementById` returns `null`, check that the script runs after the element (use `defer`).

## Example

```js
const element = document.getElementById("sample");
console.log(element.id);
```
