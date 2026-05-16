// TODO: Starter for Level 08: implement submit handler.
const formTag = document.getElementById("api-form");
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("result");

formTag.onsubmit = handleSubmit;

// implement submit handler
async function handleSubmit(event) {
  event.preventDefault();

  // visible feeback for the user during the request
  outputEl.style.color = "black";
  outputEl.innerText = "Sending request..";

  // const form = event.target;

  const requestData = {
    title: inputEl.value,
    body: "Sent via API Challenge Form",
    userId: 1,
  };
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(requestData),
    });
    const result = await response.json();
    // parsing the reponse into separate variables
    const resultId = result.id;
    const resultTittle = result.title;

    //providing clear sucess feedback to the user
    outputEl.style.color = "green";
    outputEl.innerText = "Success! Created post " + resultId + " with " + resultTittle;
    // reseting the form fields
    formTag.reset();

  } catch (error) {
    //providing clear user feedback if/for failures and error messages
    console.error(error);
    outputEl.style.color = "red";
    outputEl.innerText = error.message;
  }
}
