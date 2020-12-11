const inputNameRef = document.querySelector("#name-input");
// console.dir(inputNameRef);
const nameOutputRef = document.querySelector("#name-output");
// console.dir(nameOutputRef);
const nameOutputHandler = (event) => {
  if (event.target.value.length !== 0) {
    nameOutputRef.textContent = event.target.value;
    return;
  }
  nameOutputRef.textContent = "незнакомец";
};

inputNameRef.addEventListener("input", nameOutputHandler);
