## Level 07 — Submit Handler

## Objective

Assign a function to `form.onsubmit` to handle form submissions.

## Benefits

- **Scripting submissions**: Learn to run JavaScript when a form is submitted.

## Complete these tasks

- Select the form `sample-form`.
- Create function `handleSubmit(event)`.
- Assign `handleSubmit` to `form.onsubmit`.
- Use `console.log` inside the handler to explain `onsubmit`.
- Click submit to run handler and inspect `form.onsubmit`.

## Hints

- `form.onsubmit` should be set to a function reference, not the result of calling the function.

## More information

- A submit handler receives an `event` object and can read form fields or prevent default behavior.

## Usage tips

- Name handlers descriptively, e.g., `handleSubmit`.

## Example

```js
// Assign a reference, not a call
// form.onsubmit = handleSubmit;
```
