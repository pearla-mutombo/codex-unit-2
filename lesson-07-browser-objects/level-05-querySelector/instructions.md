# Level 05 — querySelector

## Objective

Use `document.querySelector` and `document.querySelectorAll` to select elements and update their text; iterate a `NodeList` to apply changes.

## Benefits

- Flexible CSS-style selection and batch updates.

## Complete these tasks

- Use `querySelector` to pick one element and change its text.
- Use `querySelectorAll` to get a `NodeList` and loop to update every `.item`.

## Hints

- `NodeList` supports `forEach` in modern browsers.

## More information

- `querySelector` accepts any valid CSS selector; it returns the first match.

## Usage tips

- Test selectors in the console before writing code.

## Example

```js
document
  .querySelectorAll(".item")
  .forEach((el, i) => (el.innerText = "Item " + (i + 1)));
```
