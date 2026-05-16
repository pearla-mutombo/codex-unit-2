## Level 09 — Event Target

## Objective

Inside a submit handler, use `event.target` to save a reference to the form without additional DOM queries.

## Benefits

- **Efficiency**: Avoid extra DOM lookups by using the event-provided target.

## Complete these tasks

- In `handleSubmit` call `event.preventDefault()`.
- Save form reference with `const form = event.target`.
- Log explanation of `event.target` and inspect in debugger.

## Hints

- `event.target` is the element that dispatched the event; for delegated handlers, it may differ from `currentTarget`.

## More information

- Use `event.currentTarget` when you want the element the listener is attached to rather than the actual origin.

## Usage tips

- Prefer `event.target` inside directly-attached submit handlers on forms.

## Example

```js
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
}
```
