// TODO: Starter for Level 06: API GET practice.

// Students should replace the URL below with their chosen API endpoint.
// TODO: fetch('https://api.example.com/endpoint')
const data = {
    message: "",
};
const dataString = new URLSearchParams(data);
const response = await fetch("https://potterapi-fedeperin.vercel.app" + "?" + dataString);
const result = await response.json();
result.message = "",
console.log("A REST Harry Potter API with images and information about books, characters and spells. Translated to many languages");
