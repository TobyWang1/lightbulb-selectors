// Write your code here
const bulb1 = document.querySelector("#lightbulb1");
const bulb2 = document.querySelector("#lightbulb2");
const bulb3 = document.querySelector("#lightbulb3");

const subtitle = document.querySelector(".subtitle");

let count = 0;

bulb1.addEventListener("click", function (){
    count++;
    subtitle.innerHTML = `You've clikced the light ${count} times`;
    bulb1.classList.toggle("active")
});

bulb2.addEventListener("click", function (){
    count++;
    subtitle.innerHTML = `You've clikced the light ${count} times`;
    bulb2.classList.toggle("active")
});

bulb3.addEventListener("click", function (){
    count++;
    subtitle.innerHTML = `You've clikced the light ${count} times`;
    bulb3.classList.toggle("active")
})
