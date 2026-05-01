# Level 05 — Access the headers

## Objective

Read useful properties from the `Response` (URL and selected headers) and display them on the page.

## Benefits

- **Inspect metadata**: Learn to read `response.url` and `response.headers`.
- **UI integration**: Display header values in the DOM.

## Complete these tasks

- **GET request**: use `async`/`await` to fetch GET `https://postman-echo.com/get`.
- **Parse body**: await `response.json()`.
- **Save url**: assign `response.url` to a variable.
- **Save headers**: read `response.headers.get('host')` and `response.headers.get('accept-encoding')` into variables.
- **Render**: insert the three values into three distinct elements' `innerText`.

## Hints

- Use `response.headers.get('header-name')` to access headers.
- Not all headers are always present; tests expect `host` and `accept-encoding` from the echo service.

## More information

- `Response.headers` is a `Headers` object; use `.get(name)` to read values.
- `response.url` contains the final request URL (after redirects).

## Usage tips

- Display clear labels (URL, Host, Accept-Encoding) so tests can find content.

## Example

```js
const r = await fetch("https://postman-echo.com/get");
const url = r.url;
const host = r.headers.get("host");
```
