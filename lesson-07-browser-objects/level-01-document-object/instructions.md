## Level 01 — Document Object

## Objective

Use the debugger console to inspect the `document` object and observe common properties such as `title`, `URL`, `contentType`, `scripts`, and `styleSheets`.

## Benefits

- **Inspectability**: Learn how to explore page state in the console.
- **Debugging**: Find values quickly with `console.log` and the debugger.

## Complete these tasks

- Use `console.log` to display `document.title`.
- Use `console.log` to display `document.URL`.
- Use `console.log` to display `document.contentType`.
- Use `console.log` to display `document.scripts`.
- Use `console.log` to display `document.styleSheets`.
- Use the debugger to inspect an element on the page.

## Hints

- Open DevTools (F12) and use the Console panel.
- Add `debugger;` in `script.js` to pause execution where needed.

## More information

- The DOM (Document Object Model) represents the page as a tree of nodes.
- The global `document` object exposes metadata and collections like `scripts` and `styleSheets`.

## Usage tips

- Set a breakpoint in the Sources panel or insert the `debugger` keyword.
- Use `console.dir(document)` to view properties as an object.

## Example

```js
// Minimal inspection example
console.log(document.title);
```
