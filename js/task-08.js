const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const formData = new FormData(loginForm);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  if (!formObject.email || !formObject.password) {
    alert("All fields must be filled in.");
    return;
  }

  console.log(formObject);
  loginForm.reset();
});
