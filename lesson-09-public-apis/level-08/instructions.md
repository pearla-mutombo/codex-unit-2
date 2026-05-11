## Level 08 — Joke API

## Objective

Use an API key to fetch memes from https://api.humorapi.com/memes/random.

## Benefits

- Demonstrates passing API keys and handling auth-related errors.
- Shows how to safely include keys in requests (query or header per API).

## Complete these tasks

- Create a `data` object with an `api-key` property (quoted when hyphenated).
- Convert `data` into a `queryString` using `URLSearchParams`.
- Use `async/await` to fetch memes from the API including the key as required.
- Parse the response and render a meme into an `img` tag.

## Hints

- Put quotes around the `api-key` property: `{ "api-key": 'YOUR_KEY' }`.
- Use `new URLSearchParams(data)` for query construction.

## More information

- HumorAPI docs: https://humorapi.com/docs/#Random-Meme

## Usage tips

- In JavaScript objects, unquoted property names must no contain hyphens. A hyphen is interpreted as the subtraction operator, so `{"api-key": "..."}` must use quotes. If you used `api-key` without quotes, it would be parsed as `api - key`, which is invalid as an object property.

## Example

```js
// Use URLSearchParams to create a query string from an object.
const data = { "api-key": "abc123" };
const qs = new URLSearchParams(data);
const res = await fetch(url + "?" + qs);
```
