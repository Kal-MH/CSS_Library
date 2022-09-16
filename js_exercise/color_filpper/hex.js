const btn = document.querySelector("#btn");
const spanColor = document.querySelector(".color");
const main = document.querySelector("main");

/* generate random color value */
function generateRandomColor() {
    let r = Math.floor(Math.random() * 256).toString(16);
    let g = Math.floor(Math.random() * 256).toString(16);
    let b = Math.floor(Math.random() * 256).toString(16);

    return `#${r < 10 ? '0' + r : r}${g < 10 ? '0' + g : g}${b < 10 ? '0' + b : b}`;
}

/* btn click -> change span text */
function handleBtnClick(e) {
    let color = colorObj[generateRandomColor()] || generateRandomColor();

    spanColor.innerText = color;
    main.style.background = color;
    console.dir(main);
}

btn.addEventListener("click", handleBtnClick);


//---------------------
// const color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// function generateHexColor() {
//     return Math.floor(Math.random() * color.length);
// }

// btn.addEventListener("click", () => {
//     let hex = "#";

//     for(let i = 0; i < 6; i++)
//         hex += color[generateHexColor()];

//     spanColor.innerText = hex;
//     document.body.style.backgroundColor = hex;
// })