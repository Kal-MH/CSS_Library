const color = ['red', 'green', 'blue', 'white', 'rgb(22, 90, 30)', 'rgb(133, 122, 200'];

const btn = document.querySelector("#btn");
const span = document.querySelector(".color");

function generateNumber() {
    return Math.floor(Math.random() * color.length);
}

btn.addEventListener("click", () => {
    let selectedColor = color[generateNumber()];

    span.innerText = selectedColor;
    document.body.style.backgroundColor = selectedColor;
})