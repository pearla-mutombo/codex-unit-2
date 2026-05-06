## Level 08 — API Challenge (Integrate with a webpage)

## Objective

- Build a small webpage with a form that submits to a chosen API and displays feedback.

## Benefits

- Combine frontend form handling with API integration.
- Demonstrate UX feedback and response parsing for real requests.

## Complete these tasks

- Create `index.html` with a form and attach `script.js`.
- Implement a submit handler that prevents default, constructs the request, calls the API, and updates the DOM with parsed JSON or error messages.

## Hints

- Use `event.preventDefault()` in the submit handler to stop page reload.
- Show clear success/error messages based on response status and parsed body.

## More information

- Use `fetch()` for HTTP requests in the browser and `response.json()` to parse JSON.

## Usage tips

- Test the API call in Postman first, then wire it into the form handler.

## Example

```
// Minimal handler outline (students should complete):
// form.addEventListener('submit', e => { e.preventDefault(); /* build request */ });
```
