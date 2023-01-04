const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here

const index = birds.indexOf("Eagles");
birds.splice(index, 1);
function startsWithE(bird) {
    return bird.startsWith("E");
}
const eBirds = birds.filter(startsWithE);
console.log(eBirds);


// Don't edit the code below here!
const section = document.querySelector("section");
const para1 = document.createElement('p');
para1.textContent = eBirds;
section.appendChild(para1);