# Level 11 — Apply what you learned

## Objective

Build a complete form flow: create the form, collect values, POST to the echo server, and render response fields back into the page.

## Benefits

- **Integration**: Combines form handling, fetch, async/await, and DOM updates.
- **Capstone**: Demonstrates full end-to-end client behavior.

## Complete these tasks

- **Attach script**: ensure `script.js` is included in the `head` with `defer`.
- **Create form**: the HTML contains a form with three inputs and a submit button.
- **Name attributes**: form inputs have `name` attributes.
- **Handler**: implement a form handler in `script.js` and save the form element to `form`.
- **Attach handler**: set `form.onsubmit` to the handler and call `event.preventDefault()`.
- **Collect values**: use `form.elements` to access the three values and build a `data` object with matching keys.
- **Format data**: Stringify `data` into `dataString`.
- **POST**: use `async`/`await` to send the `dataString` to `https://api.jsoning.com/mock/public/products` with the POST method.
- **Parse response**: await and parse the JSON response.
- **Render**: store three pieces of response data into variables and insert each into three elements' `innerText`.

## Hints

- Reuse patterns from earlier levels: build `data`, `JSON.stringify`, and `fetch`.

## More information

- A complete flow validates both client-side code and server echoes; the echo service returns sent JSON under `json`.

## Usage tips

- Test with simple values first and inspect the echoed JSON to find the fields to render.

## Example

```js
const res = await fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
});
```
