// burger menu

const burger = document.querySelector('.burger');

burger.addEventListener('click',() =>{
    burger.classList.toggle('active')
    document.querySelector('nav').classList.toggle('show');
});


// Button

let btn1 = document.getElementById("togg1");
let btn2 = document.getElementById("togg2");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})

function togg(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
};
togg2.onclick = togg;