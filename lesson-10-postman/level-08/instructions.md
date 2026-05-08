## Level 08 — API Challenge (Integrate with a webpage)

## Objective

- Build a small webpage with a form that submits to a chosen API and displays feedback.

## Benefits

- Combine frontend form handling with API integration.
- Demonstrate UX feedback and response parsing for real requests.

## Complete these tasks

- Choose an API.
- Create `index.html` with a form and attach `script.js` in the head.
- Implement a submit handler that prevents default.
- Format the data object.
- Send the API request with data.
- Parse the response into separate variables.
- Provide user feedback and error messages.

## Hints

- Use `event.preventDefault()` in the submit handler to stop page reload.
- Show clear success/error messages based on response status and parsed body.

## More information

- Use `fetch()` with `async/await` and `response.json()` to parse the received data.

## Usage tips

- Test the API call in Postman first, then wire it into the form handler.
