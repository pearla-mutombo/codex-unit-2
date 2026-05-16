## Level 04 — Inner HTML

## Objective

Select an element by id and set its `innerHTML` to include simple HTML.

## Benefits

- **Flexible content**: `innerHTML` lets you insert markup when needed.

## Complete these tasks

- Select element with `getElementById('content')` into `element`.
- Log previous `innerHTML`.
- Set `element.innerHTML` to HTML that explains 'innerHTML' and 'innerText'.
- Use the debugger to inspect the element.

## Hints

- Avoid inserting user-provided HTML directly without sanitizing.

## More information

- `innerHTML` returns a string of HTML markup; changing it reparses the element's contents.
- Difference: `innerText` shows visible text; `innerHTML` contains markup.

## Usage tips

- For simple text, prefer `innerText` to avoid accidental markup.

## Example

```js
const element = document.getElementById("content");
console.log(element.innerHTML);
element.innerHTML = "<strong>innerHTML</strong> vs innerText";
```
