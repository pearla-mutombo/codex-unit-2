// TODO: Starter for Level 07: API POST practice.

// Students should construct a JSON payload and send it to their chosen API.
const response = await fetch("https://zenquotes.io/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Learning API POST Requests",
    body: "This request sends raw JSON data to a target endpoint.",
    userId: 1,
  }),
});
const result = await response.json();

console.log(
  "Zenquotes.io is a simple API that can be used to fetch quotes from infuential figures throughout history into JSON format. While it's not hard to find a database of inspirational quotes online, most of them require registration or just plain suck.",
);
