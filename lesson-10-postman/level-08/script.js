// TODO: Starter for Level 08: implement submit handler.
const form = document.getElementById("api-form");
const inputEl= document.getElementById("input");
const outputEl = document.getElementById("result");

form.onsubmit = handleSubmit;

// implement submit handler
async function handleSubmit(event){
    event.preventDefault();

    // visible feeback for the user during the request
    outputEl.style.color = "black";
    outputEl.innerText = "Sending request..";

    const form = event.target;
    const requestData = {
        title: inputEl,
        body: "Sent via API Challenge Form",
        userId: 1
    };
    const response = await fetch("https://typicode.com", {
      methond: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(requestData)  
    });
    const data =  await response.json();
    // parsing the reponse into separate variables
    const responseId = data.id;
    const responseTittle = data.title;

    //providing clear sucess feedback to the user
    outputEl.style.color = "green";
    outputEl.innerText = "Success! Created post" + responseId + "with value" + responseTittle;
    // reseting the form fields
    form.reset();
    //providing clear user feedback if/for failures and error messages
    outputEl.style.color = "red";
    outputEl.innerText = "Error" + error.message;

}
