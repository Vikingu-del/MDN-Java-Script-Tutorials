const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
/* Declaring the alternative text for each image file */
const altText = {"pic1.jpg": "blue eyes", "pic2.jpg": "stone", "pic3.jpg": "purple flowers", "pic4.jpg": "egiptian pyramid wall symbols", "pic5.jpg": "butterfly"};
/* Looping through images */
for (const pic of pictures) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${pic}`);
    newImage.setAttribute('alt', altText[pic]);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
})
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    overlay.classList.toggle("darknes");
    if (overlay.classList.contains("darknes")) {
        btn.textContent = "lighten";
    } else {
        btn.textContent = "darken";
    }
})
