## Level 05 — Query Selector

## Objective

Use `querySelector` with a CSS selector (for example `#content`) to select a single element.

## Benefits

- **Flexible selectors**: Use any CSS selector to find elements.

## Complete these tasks

- Select the element with `querySelector('#content')` into `element`.
- Log previous `innerHTML`.
- Set `element.innerHTML` to explain `querySelector` vs `getElementById`.
- Use the debugger to inspect the element.

## Hints

- `querySelector` returns the first matching element; use `querySelectorAll` for many.

## More information

- `querySelector` accepts CSS selectors like `#id`, `.class`, or `tag[attr=value]`.

## Usage tips

- Prefer `getElementById` when you have an ID and need maximum speed and clarity.

## Example

```js
const element = document.querySelector("#content");
```
