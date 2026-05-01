// Level 06 — form-object starter
// TODO: select the form element (e.g. document.getElementById('sample-form'))

// select the form element
const form = document.getElementById ("sample-form");

// TODO: log form.id, form.name, form.elements.length, form.enctype, form.className
if (form) {
    console.log("sample-form", form.id);
    console.log("sampleForm", form.name);
    console.log("0", form.min.length);
    console.log("10", form.max.length);
    console.log("radio", form.enctype);
    console.log("radio", form.enctype);
    console.log("checkbox", form.enctype);
    console.log("text", form.enctype);
    console.log("submit", form.enctype);
    console.log("message", form.className);
    console.log("volume", form.className);
    console.log("color", form.className);
    console.log("color", form.className);
    console.log("agree", form.className);
    console.log("attachment", form.className);
} else {
    console.log("Form not found!");
}
// Scaffold:
// const form = document.getElementById('sample-form');
// if (form) {
//   console.log('id:', form.id);
//   console.log('name:', form.name);
//   console.log('elements length:', form.elements.length);
//   console.log('enctype:', form.enctype);
//   console.log('className:', form.className);
// }
