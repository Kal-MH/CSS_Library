const span = document.querySelector("#value");

const btnContainer = document.querySelector(".button-container");
const btn_de = btnContainer.querySelector(".decrease");
const btn_re = btnContainer.querySelector(".reset");
const btn_in = btnContainer.querySelector(".increase");

const btns = btnContainer.querySelectorAll("button");

// const funcs = {
//     'decrease' : function () {
//         const curValue = Number(span.textContent);
//         if (curValue - 1 < 0) span.style.color = 'red';
//         else if (curValue - 1 === 0) span.style.color = 'black';
//         span.textContent = curValue - 1;
//     },
//     'reset' : function () {
//         span.textContent = 0;
//         span.style.color = 'black';
//     },
//     'increase' : function () {
//         const curValue = Number(span.textContent);
//         if (curValue + 1 > 0) span.style.color = 'green';
//         else if (curValue + 1 === 0) span.style.color = 'black';
//         span.textContent = curValue + 1;
//     }
// }

// function handleEventClick(e) {
//     const btn_name = e.target.textContent;
//     funcs[btn_name]();
// }

// btns.forEach(b => {
//     b.addEventListener("click", handleEventClick);
// })

//-----------------------------
let count = 0;
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.target.classList;

        if (style.contains('decrease')) count--;
        else if (style.contains('reset')) count = 0;
        else count++;

        if (count > 0) span.style.color = 'green';
        else if (count < 0) span.style.color = 'red';
        else span.style.color = '#222';

        span.textContent = count;
    })
})