## Level 08 — Joke API

## Objective

Use an API key to fetch jokes from https://humorapi.com.

## Benefits

- Demonstrates passing API keys and handling auth-related errors.
- Shows how to safely include keys in requests (query or header per API).

## Complete these tasks

- Create a `data` object with an `api-key` property (quoted when hyphenated).
- Convert `data` into a `queryString` using `URLSearchParams`.
- Use `async/await` to fetch jokes from the API including the key as required.
- Parse the response and render a joke into the DOM.
- Handle errors and display messages when the key is invalid.

## Hints

- Put quotes around the `api-key` property: `{ "api-key": 'YOUR_KEY' }`.
- Use `new URLSearchParams(data)` for query construction.

## More information

- https://humorapi.com/

## Usage tips

- If testing without a real key, stub responses or use a mock endpoint.

## Example

```js
// Use URLSearchParams for key-in-query examples (API may accept headers instead)
const qs = new URLSearchParams({ "api-key": "..." }).toString();
const res = await fetch(url + "?" + qs);
```
