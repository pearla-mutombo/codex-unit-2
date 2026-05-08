## Level 04 — POST request basics

## Objective

- Make a simple POST request to a test endpoint and view the response.

## Benefits

- Introduces sending data to an API and inspecting returned responses.
- Prepares students for constructing and validating request bodies.

## Complete these tasks

- Send a POST request to `https://dummyjson.com/auth/login`.
- Inspect the response status and body.
- Read the API docs for required fields at `https://dummyjson.com/docs/auth`.
- Use `script.js` to `console.log` one fact learned from the documentation.

## Hints

- In Postman, select POST as the method.
- Look for a 201 or 200 status to confirm the request succeeded.

## More information

- POST requests are commonly used to create resources. Responses often include the created item or an ID.
- To sending a POST request in Postman, set the request method to `POST` and enter the URL.
- Postman will add the header `Content-Type: application/json` for raw JSON bodies, but check the `Headers` tab to confirm or add custom headers as needed.
- Use the `Preview` / `Pretty` response view after clicking `Send` to inspect the returned status and JSON body. Look for a `201` or `200` status.

## Usage tips

- Set the request body to raw JSON and preview in Postman before sending.
