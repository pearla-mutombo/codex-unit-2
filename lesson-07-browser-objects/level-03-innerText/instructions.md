## Level 03 — Inner Text

## Objective

Select an element by id and change its `innerText` to a new descriptive string.

## Benefits

- **Content updates**: Learn how to change visible text dynamically.
- **Safety**: `innerText` preserves plain text and avoids inserting HTML.

## Complete these tasks

- Select element with `getElementById('desc')` into `element`.
- Log previous `innerText`.
- Set `element.innerText` to a new descriptive string that mentions 'innerText'.
- Use the debugger to inspect changes.

## Hints

- `innerText` reflects the rendered text and will strip HTML tags.

## More information

- `innerText` provides the text content as displayed; it may differ from `textContent` in layout-sensitive cases.

## Usage tips

- Test changes in the console: `document.getElementById('desc').innerText`.

## Example

```js
const element = document.getElementById("desc");
console.log(element.innerText);
element.innerText = "This demonstrates innerText.";
```
