// local reviews data
const reviews = [
{
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
    "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
},
{
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
    "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
},
{
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
    "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
},
];

//Variables

let currentId = 0;

//person info tags
const reviewArticle = document.querySelector(".review");
const imgContainer = reviewArticle.querySelector(".img-container");
const img = imgContainer.querySelector("#person-img");

const author = reviewArticle.querySelector("#author");
const job = reviewArticle.querySelector("#job");
const info = reviewArticle.querySelector("#info");

//btn
const btns = document.querySelectorAll("button");

//Event
function _prevBtnClick() {
    currentId = currentId - 1 < 0 ? reviews.length - 1 : currentId - 1;
    author.textContent = reviews[currentId].name;
    job.textContent = reviews[currentId].job;
    info.textContent = reviews[currentId].text;
    img.src = reviews[currentId].img;
}
function _nextBtnClick() {  
    currentId = currentId + 1 >= reviews.length ? 0 : currentId + 1;
    author.textContent = reviews[currentId].name;
    job.textContent = reviews[currentId].job;
    info.textContent = reviews[currentId].text;
    img.src = reviews[currentId].img;
}
function _randomBtnClick() {
    currentId = Math.floor(Math.random() * reviews.length);

    author.textContent = reviews[currentId].name;
    job.textContent = reviews[currentId].job;
    info.textContent = reviews[currentId].text;
    img.src = reviews[currentId].img;    
}


function handleBtnClick(e) {
const targetClassName = e.target.classList;
const targetParentClassName = e.target.parentNode.classList;

if (targetClassName.contains("prev-btn") || targetParentClassName.contains("prev-btn")) {
    _prevBtnClick();
}
if (targetClassName.contains("next-btn") || targetParentClassName.contains("next-btn")) {
    _nextBtnClick();
}
if (targetClassName.contains("random-btn") || targetParentClassName.contains("random-btn")) {
    _randomBtnClick();
}
}


//start
function initPage() {
    btns.forEach((btn) => btn.addEventListener("click", handleBtnClick));
    
    author.textContent = reviews[currentId].name;
    job.textContent = reviews[currentId].job;
    info.textContent = reviews[currentId].text;
    img.src = reviews[currentId].img;

    currentId++;
}

initPage();