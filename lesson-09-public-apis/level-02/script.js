const form2 = document.getElementById("login-form");
const errorEl2 = document.getElementById("error");
const successEl2 = document.getElementById("success");

if (form2) {
  form2.addEventListener("submit", async (e) => {
    // TODO: prevent default, call fetch/login flow
    // TODO: update errorEl2 or successEl2 depending on response
    // On success, call form.reset() per the tasks
    console.log("level-02 submit placeholder");
  });
}
