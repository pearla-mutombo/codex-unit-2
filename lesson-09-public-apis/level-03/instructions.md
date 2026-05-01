## Level 03 — Error handling

Objective
Detect and handle network and HTTP errors; surface user-friendly messages.

Benefits

- Makes apps resilient to network failures.
- Teaches use of `try`/`catch` and `response.ok` checks.

Complete these tasks

- Wrap `fetch` calls in `try`/`catch` and handle thrown errors.
- Detect non-2xx responses via `response.ok` and surface a message.
- Write error messages into the error UI element and log as needed.

Hints

- Use `if (!response.ok) throw new Error(await response.text())` or similar.
- Differentiate between network errors and HTTP errors in messages.

More information

- For automated tests, ensure the code checks `response.ok` and writes to the error element.

Usage tips

- Keep error messages brief and avoid leaking sensitive info.

Example

- Pattern:

```
try { const res = await fetch(url); if (!res.ok) { /* handle */ } } catch (err) {}
```
