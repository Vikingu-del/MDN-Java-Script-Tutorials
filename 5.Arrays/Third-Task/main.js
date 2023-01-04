let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here
myArray.pop();
myArray.push("Xhiku", "Doraci");
myArray.forEach(function(item, index) {
    let newItem = `${item} (${index})`;
    myArray[index] = newItem;
})
const myString = myArray.join("-");
// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);