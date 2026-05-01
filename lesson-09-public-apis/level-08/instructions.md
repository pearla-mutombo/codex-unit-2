## Level 08 — Joke API

Objective
Use an API key to fetch content (jokes) and display results in the page.

Benefits

- Shows how API keys are used in real requests and how to handle API errors.

Complete these tasks

- Implement a small fetch that sends the API key in a header or query param as required by the API.
- Parse and render the joke string into the DOM and handle errors.

Hints

- For exercises, use a demo key or mock the network responses; never commit real keys.

More information

- If the API returns an invalid-key error, surface a clear message and suggest obtaining a valid key.

Usage tips

- Prefer sending keys in headers; show examples but omit real values in code.

Example

```
// Example header usage (do not include actual keys)
fetch(url, { headers: { 'x-api-key': 'YOUR_KEY' } })
```
