# Level 05 — Access the data

## Objective

Read useful properties from the parsed results and display them on the page.

## Benefits

- **Inspect metadata**: Learn to read `response.url` and `response.headers`.
- **UI integration**: Display header values in the DOM.

## Complete these tasks

- **GET request**: use `async`/`await` to fetch GET `https://jsonplaceholder.typicode.com/todos/1`.
- **Parse body**: await `response.json()` and store it in `result`.
- **Save data**: assign the `result` properties `userId`, `title`, and `completed` into separate variables.
- **Render**: insert the three values into three distinct elements' `innerText`.

## Hints

- Use dot notation to access `result` properties.

## More information

- The `result` object will have these properties: `userId`, `title`, `completed`.
- The debugger console can be used to inspect `result` after the `response` has been parsed.

## Usage tips

- Display clear labels (Example: User ID, Title, Is Completed).

## Example

```js
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const result = await response.json();
const userId = result.userId;
```
