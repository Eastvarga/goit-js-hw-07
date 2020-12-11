const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const newElementsArray = ingredients.map((element) => {
  const newElement = document.createElement("li");
  newElement.textContent = element;
  return newElement;
});
// [ingredients.length];

// for (const elem of ingredients) {
//   newElementsArray[ingredients.indexOf(elem)] = document.createElement("li");
//   newElementsArray[ingredients.indexOf(elem)].textContent = elem;
// }
//   console.dir(newElementsArray);
document.querySelector("#ingredients").append(...newElementsArray);
