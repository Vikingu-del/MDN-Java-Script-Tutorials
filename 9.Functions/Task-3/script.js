const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
function random(smallerNum, bigerNum) {
  const randomNumber = Math.floor(Math.random() * (bigerNum - smallerNum) + smallerNum);
  return randomNumber;
}

function chooseName(array) {
  const randomName = array[random(0, array.length)];
  return randomName;
}

para.textContent = chooseName(names);
// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);