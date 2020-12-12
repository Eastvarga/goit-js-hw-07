const inputNameRef = document.querySelector("#name-input");
// console.dir(inputNameRef);
const nameOutputRef = document.querySelector("#name-output");
// console.dir(nameOutputRef);

// const nameOutputHandler = (event) => {
//   if (event.target.value.length !== 0) {
//     nameOutputRef.textContent = event.target.value;
//     return;
//   }
//   nameOutputRef.textContent = "незнакомец";
// };

// inputNameRef.addEventListener("input", nameOutputHandler);

nameOutputRef.hidden = true;
const checkUp = () => {
  let userInfo = inputNameRef.value.trim();
  nameOutputRef.hidden = false;
  inputNameRef.value.length === 0
    ? (nameOutputRef.textContent = "незнакомец")
    : (nameOutputRef.textContent = userInfo);
};
inputNameRef.addEventListener("input", checkUp);
inputNameRef.addEventListener("blur", checkUp);
