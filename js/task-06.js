const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.value.length;
  const requiredLength = parseInt(validationInput.getAttribute("data-length"));

  if (inputLength === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});