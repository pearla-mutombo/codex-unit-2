# Level 04 — Parsing the response

## Objective

Inspect the fetched `Response` object and parse the JSON payload returned by the echo server.

## Benefits

- **Data access**: Learn to extract usable JSON from network responses.
- **Practical**: Prepares students to read API payloads.

## Complete these tasks

- **Async/await**: use `async`/`await` during the `fetch` call.
- **Parse JSON**: call `response.json()` and `await` the parsed JSON.
- **Explain parsing**: set a target element's `innerText` describing parsing the response.

## Hints

- `const data = await response.json()` returns the parsed object.
- Check `response.ok` or response status for errors.

## More information

- `response.json()` reads the response body and returns a Promise resolving to the parsed object.
- The `Response` also exposes `status`, `headers`, and `url`.

## Usage tips

- Parsing large responses can be slow — in exercises we use small echo responses.

## Example

```js
const response = await fetch(url);
const json = await response.json();
```
