const inputRef = document.querySelector("#validation-input");
// console.dir(inputRef);

const inputValidtionHandler = (event) => {
  if (event.target.value === "") {
    inputRef.classList.remove("invalid");
    inputRef.classList.remove("valid");
    return;
  }
  if (event.target.value.length == event.target.getAttribute("data-length")) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", inputValidtionHandler);
