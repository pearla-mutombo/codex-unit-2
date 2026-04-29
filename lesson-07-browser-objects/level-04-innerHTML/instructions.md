# Level 04 — innerHTML

## Objective

Set an element's `innerHTML` to include simple markup (for example a `<strong>` element) and log before/after values; discuss differences with `innerText`.

## Benefits

- Shows how HTML markup can be injected versus plain text.

## Complete these tasks

- Select the element (e.g. `content`) and log its `innerHTML`.
- Set `innerHTML` to a small markup string and confirm it changed.

## Hints

- `innerHTML` accepts HTML strings; do not insert untrusted content in production.

## More information

- `innerHTML` updates the DOM and can include tags such as `<strong>` or `<em>`.

## Usage tips

- Use simple markup to demonstrate differences from `innerText`.

## Example

```
const el = document.getElementById('content');
console.log(el && el.innerHTML);
```
