// Level 11 starter script
// TODO: Implement a complete flow: create form, collect values, POST to echo server, render response fields.
const form = document.getElementById("sample-form");

form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    one: form.elements["one"].value,
    two: form.elements["two"].value,
    three: form.elements["three"].value
  };

  const response = await fetch("https://api.jsoning.com/mock/public/products", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  // TODO: build data object, POST it, parse response, and display three response values

const pData = await response.json();
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

if (r1) {
  r1.innerText = "Result One: ${pData.one}";
}

if (r2) {
  r2.innerText = "Result Two: ${pData.two}";
}

if (r3) {
  r3.innerText = "Result Three: ${pData.three}";
}

console.log("Parsed result:", pData);

}





