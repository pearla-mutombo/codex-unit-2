## Level 07 — API Keys

## Objective

Understand API keys and create one at https://humorapi.com.

## Benefits

- Introduces API key concepts and safe handling patterns.
- Explains why services require keys and how they track usage.

## Complete these tasks

- Add an element with `id="message"` to `index.html`.
- Include `script.js` in the `head` with `defer`.
- Select the `message` element and save to a variable.
- Insert an explanation about API keys into `message` (`innerText` or `innerHTML`).

## Hints

- Use `document.getElementById('message')` to select the element.
- Keep the explanation short and avoid revealing private keys.

## More information

- Explain why API keys are used and how they can track usage.

## Usage tips

- Emphasize that keys are secrets and should not be committed to repositories.

## Example

```js
const msg = document.getElementById("message");
msg.innerText =
  "API keys identify your app to a service; do not commit them publicly.";
```
