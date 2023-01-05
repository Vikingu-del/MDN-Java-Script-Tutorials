const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

function isShort(name) {
  return name.length < 5;
}

para.textContent = names.filter( name => name.length < 5);

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);