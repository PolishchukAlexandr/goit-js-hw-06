// const validationInput = document.querySelector("#validation-input");

// validationInput.addEventListener("blur", () => {
//   const inputLength = validationInput.value.length;
//   const requiredLength = parseInt(validationInput.getAttribute("data-length"));

//   if (inputLength === requiredLength) {
//     validationInput.classList.add("valid");
//     validationInput.classList.remove("invalid");
//   } else {
//     validationInput.classList.remove("valid");
//     validationInput.classList.add("invalid");
//   }
// });


const validationInput = document.querySelector("#validation-input");

function setValidationClass(isValid) {
  validationInput.classList.toggle("valid", isValid);
  validationInput.classList.toggle("invalid", !isValid);
}

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.value.length;
  const requiredLength = parseInt(validationInput.getAttribute("data-length"));
  const isValid = inputLength === requiredLength;

  setValidationClass(isValid);
});