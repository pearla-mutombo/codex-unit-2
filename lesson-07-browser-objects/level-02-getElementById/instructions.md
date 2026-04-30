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

- `document.getElementById(id)` returns the first Element whose `id` attribute matches `id`, or `null` if no matching element exists. IDs should be unique within a document.
- The returned value is a live DOM `Element` (or `null`) — check for `null` before accessing properties to avoid runtime errors.

## Usage tips

- Use `console.log(sampleElement.classList)` to inspect classes interactively.

## Example

```js
const element = document.getElementById("sample");
```
