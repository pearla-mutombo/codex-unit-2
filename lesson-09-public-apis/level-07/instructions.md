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

- API keys identify and authenticate the application or user making requests so the service can allow or deny access, enforce quotas, and bill usage. Keys let providers associate requests with an account so they can monitor activity, rate-limit clients, and detect abuse.
- Every request that includes the key is logged by the API provider. Providers record metrics such as request counts, endpoints called, timestamps, IP addresses, and error rates tied to the key. These logs power dashboards, quota enforcement, billing, and alerting. Compromised keys can be revoked or rotated to stop further requests.

## Usage tips

- Keep keys secret and change or rotate keys periodically.

## Example

```js
const msg = document.getElementById("message");
msg.innerText = "API keys identify your app to a service.";
```
