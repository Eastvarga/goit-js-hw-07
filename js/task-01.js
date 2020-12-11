const subCategoriesArray = document.querySelectorAll("#categories > .item");
const amountOfElements = `В списке ${subCategoriesArray.length} категорий.`;
console.log(amountOfElements);

for (const elem of subCategoriesArray) {
  console.log(`Категория: ${elem.firstElementChild.textContent}`);
  const categoryCount = elem.querySelector(".item__list").children.length;
  console.log(`Количество элементов: ${categoryCount}`);
}

// console.dir(subCategoriesArray);
// const categoriesRef= document.querySelector('ul#categories');

// console.dir(categoriesRef);
// const subCategoriesRef = document.querySelectorAll('li.item > h2');
// console.dir(subCategoriesRef);
// const subCategoriesNames = subCategoriesRef.forEach((elem)=>console.log(elem.textContent));
// console.dir(subCategoriesNames);
// for(const elem of subCategoriesRef){
//     console.log(elem.textContent);
// }
