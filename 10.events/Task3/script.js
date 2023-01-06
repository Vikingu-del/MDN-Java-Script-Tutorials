const buttonBar = document.querySelector('.button-bar');

// Add your code here
buttonBar.addEventListener("click", (e) => {
    e.currentTarget.style.backgroundColor = e.target.textContent;
})