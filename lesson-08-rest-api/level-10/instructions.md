# Level 10 — Display response data

## Objective

Send a POST with form data, parse the response, and display selected response values in the page.

## Benefits

- **Verification**: Confirms the server received the expected payload.
- **UI rendering**: Practice mapping response fields into the DOM.

## Complete these tasks

- **POST**: use `async`/`await` to POST to `https://api.jsoning.com/mock/public/users`.
- **Formath data**: ensure the pre-processed `data` is stringified to `dataString`.
- **Attach data**: ensure the `dataString` is attached to the request body.
- **Parse JSON**: await and parse the JSON response.
- **Select values**: save three values from the response into three variables.
- **Render**: insert each variable's value into three separate elements' `innerText`.

## Hints

- The echo server returns your sent JSON under `json` in the response object.

## More information

- After posting JSON, the response includes an object like `{json: { ... }}` containing the echoed data.

## Usage tips

- Choose three meaningful fields to show (for example the three form values).

## Example

```js
const r = await fetch(url, {...}); const body = await r.json(); const v = body.json;
```
