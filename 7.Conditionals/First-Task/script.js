let season = 'summer';
let response;

// Add your code here
if (season === "summer") {
    response = "Yes is the season of vacations and beach!";
} else if(season === "winter") {
    response = "It is the season of snow and you should take care for your health!";
} else {
    response = "We don't know what season it is";
}
// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);