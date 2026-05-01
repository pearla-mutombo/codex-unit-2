# Level 08 — GET vs POST

## Objective

Explain the semantic differences between GET and POST and when to use each.

## Benefits

- **Correct usage**: Avoids misuse of HTTP verbs in apps.
- **Best practices**: Helps pick appropriate methods for operations.

## Complete these tasks

- **Select an element**: save a target element to a variable in `script.js`.
- **Explain**: set the element's `innerText` to a short explanation comparing GET and POST.

## Hints

- Mention that `GET` is safe/idempotent and `POST` is for sending or changing data.

## More information

- `GET` requests retrieve resources and should not change server state; parameters are in the URL.
- `POST` requests send a body and are commonly used to create or update resources.

## Usage tips

- Keep the comparison succinct (1–2 sentences).

## Example

```js
result.innerText = "GET reads data; POST sends data in the request body.";
```
