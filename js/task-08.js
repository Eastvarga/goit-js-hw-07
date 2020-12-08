const btnRenderRef = document.querySelector('button[data-action="render"');
// console.dir(btnRenderRef);
const btnDestroyRef = document.querySelector('button[data-action="destroy"');
// console.dir(btnDestroyRef);
const countElementsRef = document.querySelector("div#controls > input");
// console.dir(countElementsRef);
const canvasBoxRef = document.querySelector("div#boxes");
// console.dir(canvasBoxRef);

function randomFnc() {
  return Math.floor(Math.random() * 256);
}

function randomColorFnc() {
  const r = randomFnc();
  const g = randomFnc();
  const b = randomFnc();
  return `rgb(${r},${g},${b})`;
}
// console.log(randomColorFnc());

function createBoxes(amount) {
  if (amount == 0) {
    return;
  }
  const boxArray = [amount];
  const size = 30;
  for (let i = 0; i < amount; i += 1) {
    boxArray[i] = document.createElement("div");
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
}

btnRenderRef.addEventListener("click", () => {
  createBoxes(countElementsRef.value);
});
btnDestroyRef.addEventListener("click", () => {
  destroyBoxes();
});

// console.log(countElementsRef.value);
