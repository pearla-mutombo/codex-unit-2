// TODO: Starter for Level 07: API POST practice.

// Students should construct a JSON payload and send it to their chosen API.
const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=UTF-8"},
  body: JSON.stringify({
    title: "Learning API POST Requests",
    body: "This request sends raw JSON data to a target endpoint.",
    userId: 1,
  }),
});
const result = await response.json();
const resultData = result.id;
console.log(resultData);
console.log("We learned that we need to pay close attention to the POST components, for example here we had to add an extra headers that the API website required.");