// Add your code here
const myArray = ["BABASTARS", "PIN", "OTR",];
myArray[0] = "DMK";
myArray[1] = "PINT";
myArray.unshift("REAL1");
// Don't edit the code below here!
const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

section.appendChild(para1);