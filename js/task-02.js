const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const newElementsArray =[ingredients.length];
  for (const elem of ingredients){
     newElementsArray[ingredients.indexOf(elem)] = document.createElement('li');
     newElementsArray[ingredients.indexOf(elem)].textContent=elem;
  }
//   console.dir(newElementsArray);
  document.querySelector('ul#ingredients').append(...newElementsArray);
