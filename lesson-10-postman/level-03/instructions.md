## Level 03 — GET with query parameters

## Objective

- Send a GET request with query parameters and observe response differences.

## Benefits

- Demonstrate how query parameters change server responses.
- Practice reading docs to understand parameter meanings and types.

## Complete these tasks

- In Postman, send a GET request to `https://the-trivia-api.com/v2/questions`.
- Add query parameters for `categories` and `difficulties`.
- Open the API docs `https://the-trivia-api.com/docs/#tag/Questions/operation/getRandomQuestions`.
- In Postman, try different valid values for `categories` and `difficulties`.
- Inspect how results change with each request.
- Use `script.js` to `console.log` one fact learned from the documentation.

## Hints

- Look at the endpoint documentation for parameter names and types.
- Try changing one parameter at a time to observe effects.

## More information

- Query parameters follow the `?name=value&other=val` format in URLs and are commonly used to filter or paginate results.
- To add query parameters in Postman, open the `Params` tab, enter keys and values on separate rows, and Postman will append them to the request URL automatically.
- Use the checkbox beside each param to enable or disable it without removing the row.
- To get a list of valid `categories` and `difficulties`, use Postman to send a GET request to `https://the-trivia-api.com/v2/metadata`
- This page provides documentation for the `/metadata` endpoint.

## Usage tips

- Use Postman's Params tab to add parameters instead of editing the URL manually.
