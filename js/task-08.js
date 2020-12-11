const btnRenderRef = document.querySelector('button[data-action="render"');
// console.dir(btnRenderRef);
const btnDestroyRef = document.querySelector('button[data-action="destroy"');
// console.dir(btnDestroyRef);
const countElementsRef = document.querySelector("#controls > input");
// console.dir(countElementsRef);
const canvasBoxRef = document.querySelector("#boxes");
// console.dir(canvasBoxRef);

function randomColorFnc() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
// console.log(randomColorFnc());

function createBoxes(amount) {
  if (amount == 0) {
    return;
  }
  const boxArray = [];
  const size = 30;
  for (let i = 0; i < amount; i += 1) {
    boxArray.push(document.createElement("div"));
    boxArray[i].style.width = boxArray[i].style.height = `${size + i * 10}px`;
    boxArray[i].style.display = "block";
    boxArray[i].style.backgroundColor = randomColorFnc();
    // console.dir(boxArray[i]);
  }
  canvasBoxRef.append(...boxArray);
}

function destroyBoxes() {
  while (canvasBoxRef.firstChild) {
    canvasBoxRef.removeChild(canvasBoxRef.firstChild);
  }
  canvasBoxRef.innerHTML = "";
  countElementsRef.value = "";
}

btnRenderRef.addEventListener("click", () => {
  createBoxes(countElementsRef.value);
});
btnDestroyRef.addEventListener("click", () => {
  destroyBoxes();
});

// console.log(countElementsRef.value);
