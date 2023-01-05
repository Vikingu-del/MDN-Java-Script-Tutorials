const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here
for (const food of myArray) {
    const foodLi = document.createElement("li");
    foodLi.textContent = food;
    list.appendChild(foodLi);
}
// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(list);