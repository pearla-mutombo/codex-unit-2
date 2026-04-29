# Level 01 — Document Object

## Objective

Use the browser console to inspect properties in the `document` object.

## Benefits

- Quick visibility into page metadata and loaded assets.

## Complete these tasks

- Preview `index.html`
- Open the console in the browser Dev Tools.
- Type these in the console and view their values: `document.title`, `document.URL`, `document.scripts`, and `document.styleSheets`.
- Edit `script.js` to `console.log` the values of those properties.

## Hints

- Start by typing `document.` then use autocomplete to explore properties.

## More information

- `document` represents the loaded HTML document. `document.scripts` is a collection of script elements; `document.styleSheets` lists stylesheets.

## Usage tips

- Type each line from scratch to build confidence with DOM autocompletion.

## Example

```js
// Simple console log example
console.log(document.title);
console.log(document.URL);
console.log(document.contentType);
console.log(document.scripts);
console.log(document.styleSheets);
```
