## Level 04 — Query params

Objective
Convert a data object to URL query parameters and inspect the result.

Benefits

- Helps build GET request URLs and understand serialization.

Complete these tasks

- Read form values using `FormData` or `form.elements`.
- Build a plain object from the values and construct `URLSearchParams`.
- Attach the serialized query string to a GET request URL.

Hints

- `const params = new URLSearchParams(Object.fromEntries(new FormData(form)))` can help.

More information

- `URLSearchParams` encodes values correctly for query strings.

Usage tips

- Test the generated URL by logging it to the console.

Example

```
const params = new URLSearchParams({ q: 'search' });
fetch(`/api?${params.toString()}`)
```
