# Level 02 — getElementById

## Objective

Use `document.getElementById` to select an element and log its properties (`id`, `classList`, `innerText`, `innerHTML`, `attributes`).

## Benefits

- Learn reliable selection by id and inspect element metadata.

## Complete these tasks

- Select the `#sample` element with `document.getElementById`.
- Log each property listed above.

## Hints

- Ensure the id used in your code matches the element's `id` attribute.

## More information

- `classList` is a DOMTokenList with `add`/`remove` helpers; `attributes` is a NamedNodeMap.

## Usage tips

- Use `console.log(sampleElement.classList)` to inspect classes interactively.

## Example

```js
const el = document.getElementById("sample");
```
