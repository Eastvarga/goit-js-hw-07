const counterRef = document.querySelector("#counter");
const counterValueRef = counterRef.querySelector("#value");
const btnIncrement = counterRef.querySelector(
  'button[data-action="increment"]'
);
// console.dir(btnIncrement);
const btnDecrement = counterRef.querySelector(
  'button[data-action="decrement"]'
);
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
  // console.log("Added count!!");
};
const decrement = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
  // console.log("Decriesed count!!");
};

btnIncrement.addEventListener("click", increment);

btnDecrement.addEventListener("click", decrement);
