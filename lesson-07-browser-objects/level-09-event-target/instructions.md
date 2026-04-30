# Level 09 — event.target

## Objective

Inside a submit handler, inspect `event.target` and `event.currentTarget`, and save references to the form and named inputs using `form.elements`.

## Benefits

- Shows how to access the form that triggered the event without querying the DOM again.

## Complete these tasks

- In your submit handler save `const form = event.target` and verify it references the form.
- Call `event.preventDefault()` and log a property from `form`.

## Hints

- `event.target` is the element that dispatched the event; in a form submit it is the form.

## More information

- `event.target` is the original element that dispatched the event.
- In a submit handler attached directly to a form, `event.target` is typically the form.
- If a child element (for example a button) triggers the event, `event.target` may be that child — use `event.currentTarget` or to reliably reference the right element.

## Usage tips

- Save `event.target` to a descriptive variable like `form`.

## Example

```js
// hint-only
function handleSubmit(event) {
  const form = event.target;
  event.preventDefault();
  console.log(form.id);
}
```
