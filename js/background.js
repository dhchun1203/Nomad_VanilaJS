const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];
const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

body.appendChild(bgImage);
