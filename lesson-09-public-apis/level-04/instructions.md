## Level 04 — Query params

## Objective

Convert a data object to URL query parameters.

## Benefits

- Demonstrates how GET requests carry data in the URL.
- Shows `URLSearchParams` for safe encoding of query strings.

## Complete these tasks

- Read form values via `form.elements`.
- Create a `data` object from form values.
- Use `URLSearchParams` to convert `data` into a query string.
- Save the string to `query` and `console.log` it.

## Hints

- Use `new URLSearchParams(data)` and call `.toString()` when needed.
- Only use query strings with the GET method.

## More information

- Explain `URLSearchParams` and GET query strings.

## Usage tips

- Keep sensitive data out of query strings; they appear in browser history.

## Example

```js
const params = new URLSearchParams({ category, difficulty });
const query = params.toString();
```
