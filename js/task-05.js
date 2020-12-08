const inputNameRef = document.querySelector("input#name-input");
// console.dir(inputNameRef);
const nameOutputRef = document.querySelector("span#name-output");
// console.dir(nameOutputRef);
const nameOutputHandler = (event) => {
  if (event.target.value === "") {
    nameOutputRef.textContent = "незнакомец";
  } else nameOutputRef.textContent = event.target.value;
};

inputNameRef.addEventListener("input", nameOutputHandler);
