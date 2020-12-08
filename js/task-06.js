const inputRef = document.querySelector("input#validation-input");
// console.dir(inputRef);

const inputValidtionHandler = (event) => {
  if (event.target.value === "") {
    inputRef.classList.remove("invalid");
    inputRef.classList.remove("valid");
    return;
  }
  if (event.target.value.length <= event.target.getAttribute("data-length")) {
    if (inputRef.classList.contains("invalid")) {
      inputRef.classList.remove("invalid");
    }
    if (!inputRef.classList.contains("valid")) {
      inputRef.classList.add("valid");
    }
  } else {
    if (inputRef.classList.contains("valid")) {
      inputRef.classList.remove("valid");
    }
    if (!inputRef.classList.contains("invalid")) {
      inputRef.classList.add("invalid");
    }
  }
};

inputRef.addEventListener("blur", inputValidtionHandler);
