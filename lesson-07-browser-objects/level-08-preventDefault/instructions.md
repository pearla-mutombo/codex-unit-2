## Level 08 — Prevent Default

## Objective

Call `preventDefault` in a submit handler so the browser doesn't reload the page.

## Benefits

- **Single-page flow**: Prevent form navigation to handle data client-side.

## Complete these tasks

- Select the form `sample-form`.
- Create `handleSubmit(event)` and assign to `form.onsubmit`.
- Call `event.preventDefault()` at handler start.
- Log explanation of `preventDefault`.

## Hints

- `preventDefault` stops the browser's default submit behavior, like navigation.

## More information

- By preventing default, you can validate or process the form client-side before sending.

## Usage tips

- Always call `preventDefault()` early in the handler if you intend to stop navigation.

## Example

```js
function handleSubmit(event) {
  event.preventDefault();
}
```
