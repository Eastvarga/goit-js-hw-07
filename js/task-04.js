let counterValue = 0;
const counterRef = document.querySelector("span#value");
const increment = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
  // console.log("Added count!!");
};
const decrement = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
  // console.log("Decriesed count!!");
};
const btnIncrement = document.querySelector('button[data-action="increment"]');
// console.dir(btnIncrement);
const btnDecrement = document.querySelector('button[data-action="decrement"]');

btnIncrement.addEventListener("click", increment);

btnDecrement.addEventListener("click", decrement);
