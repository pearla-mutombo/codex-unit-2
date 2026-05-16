## Level 06 — Form Object

## Objective

Select a `form` element with `getElementById` or `querySelector` and inspect its properties.

## Benefits

- **Form metadata**: Learn common form properties useful for handling submissions.

## Complete these tasks

- Select form with id `sample-form` via `getElementById` or `querySelector`.
- Save the form as `form`.
- Save `form.id`, `form.name`, `form.elements.length`, `form.enctype`, `form.className`.
- Log each saved variable and inspect `form` in the debugger.

## Hints

- `form.elements` exposes named controls accessible by name.

## More information

- Forms have properties like `enctype` (encoding type) and a elements collection for inputs.

## Usage tips

- Use `console.log(form.elements)` to inspect controls.

## Example

```js
const form = document.getElementById("sample-form");
console.log(form.elements.length);
```
