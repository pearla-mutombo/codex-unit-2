## Level 01 — Login API

Objective
Use a fake login API to authenticate a user.

Benefits

- Improves familiarity with `fetch()` and POST requests.
- Demonstrates handling JSON request/response.

Complete these tasks

- Add a login form (username/email + password) in `index.html`.
- Include `script.js` with `defer` and attach a submit handler.
- In the handler, call `event.preventDefault()` and build a `data` object.
- Send a POST request to a dummy login endpoint using `fetch` with JSON headers.
- Parse the JSON response and show feedback in the UI.

Hints

- Use `new FormData(form)` or read `form.elements` to get values.
- Add `Content-Type: application/json` and `body: JSON.stringify(data)`.
- Use `try`/`catch` when awaiting `fetch()` to handle network errors.

More information

- For tests and local development, use a dummy or mock endpoint (do not commit real keys).

Usage tips

- Keep network calls in `async` functions and use `await` for `fetch()` and `.json()`.

Example

- Minimal pattern:

```
form.addEventListener('submit', async (e) => {
  // preventDefault, gather data, await fetch, parse response
});
```
