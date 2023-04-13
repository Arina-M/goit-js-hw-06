const categoriesAmount = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesAmount}`);
console.log(" ");

const categoriesList = document.querySelectorAll(`ul#categories .item`);

categoriesList.forEach(category => {
    const categories = category.firstElementChild.textContent;
    const elements = category.lastElementChild.children.length;
    console.log(`Category: ${categories}` );
    console.log(`Elements: ${elements}`);
    console.log(" ");
});



