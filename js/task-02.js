const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul#ingredients');
const makeItem = ingredients => {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = ingredient;
    return item;
  });
}
const elements = makeItem(ingredients);
ingredientsList.append(...elements);
