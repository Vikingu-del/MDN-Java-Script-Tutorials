const btn = document.querySelector('.off');

// Add your code here

btn.addEventListener("click", () => {
    if (btn.textContent === "Machine is off") {
        btn.textContent = "Machine is on"
    } else {
        btn.textContent = "Machine is off"
    }
})