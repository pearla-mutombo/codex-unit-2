## Level 05 — POST with JSON payloads

## Objective

- Send a POST request with a JSON payload and appropriate headers.

## Benefits

- Teach the `Content-Type` header and how servers parse JSON bodies.
- Prepare students to construct payloads matching API schemas.

## Complete these tasks

- Set `Content-Type: application/json` and include a JSON body matching the API schema.
- Send the request and inspect the parsed response in Postman.

## Hints

- Use Postman's Body → raw → JSON option and validate the JSON before sending.

## More information

- The `Content-Type` header tells the server how to parse the request body; JSON is commonly used for APIs.

## Usage tips

- Start with a minimal JSON object and add fields if required by the API.

## Example

```
// Example payload shape (do not copy as a full solution):
// { "title": "My post", "body": "Text" }
```
