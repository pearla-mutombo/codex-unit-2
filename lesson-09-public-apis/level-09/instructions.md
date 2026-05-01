## Level 09 — Challenge

Objective
Build a small client: choose a public API, implement a form, fetch data, paginate or filter results, and show robust feedback.

Benefits

- Integrates multiple concepts: fetch, query params, error handling, UI updates.

Complete these tasks

- Create a form that collects search or filter inputs.
- Prevent default submit, construct a request URL or body, and fetch data.
- Render results, implement pagination or filtering, and show error/success feedback.
- Use at least two lesson concepts (e.g., fetch + query params, or fetch + API key).

Hints

- Start with a single page that logs the fetched JSON to the console, then display results.
- For pagination, track `page` and update the request to fetch different slices.

More information

- Choose an API that allows client-side requests or use a server-side proxy for keys.

Usage tips

- Build incrementally: fetch → render → paginate → add error handling.

Example

```
// fetch and render flow:
// 1) build url, 2) await fetch(url), 3) parse json, 4) render list
```
