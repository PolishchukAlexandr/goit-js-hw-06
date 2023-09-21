const categories = document.querySelector('#categories').querySelectorAll('li.item');

const categoriesCount = categories.length;
console.log(`Number of categories: ${categoriesCount}`);

categories.forEach((category) => {
  const title = category.querySelector('h2').textContent;
  console.log(`Category: ${title}`);
  const itemsCount = category.querySelectorAll('li').length;
  console.log(`Elements: ${itemsCount}`);
});