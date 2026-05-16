// TODO: Starter for Level 06: API GET practice.

// Students should replace the URL below with their chosen API endpoint.
// TODO: fetch('https://api.example.com/endpoint')

const response = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
const result = await response.json();
const titleData = result[0].title;
const descriptionData = result[0].description;
console.log(titleData);
console.log(descriptionData);
console.log("A REST Harry Potter API provides detail decription about different Harry Potter books.");
