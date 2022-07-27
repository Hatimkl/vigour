const container = document.querySelector('.container4');
const helmet = document.querySelector('.helmet img');


container.addEventListener("mouseenter", (e)=>{
    helmet.style.transform = "translateZ(200px) rotateZ(30deg)";
})
container.addEventListener("mouseleave", (e)=>{
    helmet.style.transform = "translateZ(0px) rotateZ(-20deg)";
})

const shop = [
    { id : 1,
    title: "New England ",
    h1:"NE Patriots Revolution Speed Full-Size Authentic Football Helmet.",
    img:"./images/h9.png",
},
    {
    id: 2,
    title: "San Francisco",
    h1 : "Revolution Speed Full-Size Replica Football Helmet.",
    img: "./images/helmet1.png",
    },   
    {
        id: 3,
        title: "Detroit Lions",
        h1 : "Detroit Lions Fanatics Authentic Riddell LUNAR Alternate Football Helmet.",
        img: "./images/h3.png",
    }, 
    {
        id: 4,
        title: "Atlanta Falcons",
        h1 : "Fanatics Authentic Riddell 2022 Full-Size Authentic Football Helmet.",
        img: "./images/h4.png",
    },
    {
        id: 5,
        title: "Baltimore ",
        h1 : "Riddell Baltimore Ravens Black Matte Alternate Football Helmet.",
        img: "./images/h6.png",
    },
    {
        id: 6,
        title: "Arizona",
        h1 : "Arizona Cardinals Riddell Alternate Speed Authentic Helmet.",
        img: "./images/h8.png",
    },
    {
        id: 7,
        title: "Denver Broncos",
        h1 : "Fanatics Authentic Riddell Eclipse Alternate Speed Authentic Helmet.",
        img: "./images/h10.png",
    }, 
]
const img = document.getElementById("img-helmet");
const title = document.getElementById("titel-helmet");
const h1 = document.getElementById("h1-helmet");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
    shopcontent(currentItem);
});

function shopcontent (items){
    const item = shop[items];
    img.src = item.img;
    title.textContent = item.title;
    h1.textContent = item.h1;
}
nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > shop.length -1){
        currentItem = 0;
    }
    shopcontent(currentItem);
});
prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        currentItem = shop.length -1;
    }
    shopcontent(currentItem);
});

