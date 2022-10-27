// burger menu

const burger = document.querySelector('.burger');

burger.addEventListener('click',() =>{
    burger.classList.toggle('active')
    document.querySelector('nav').classList.toggle('show');
});


// SELECTOR CONTAINER PIZZA TYPE

let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");

// const togg1 = document.getElementById("togg1");

togg1.addEventListener("click", (event) => {
    togg2.classList.remove("active");
    event.target.classList.add("active");
    d1.style.display = "block";
    d2.style.display = "none";
})

togg2.addEventListener("click", (event) => {
  togg1.classList.remove("active");
  event.target.classList.add("active");
  d1.style.display = "none";
  d2.style.display = "block";
})