// Write your code here
const bulbs = document.querySelectorAll(".lightbulb");
const subtitle = document.querySelector(".subtitle");

let count = 0;

bulbs.forEach((bulb) => {
    bulb.addEventListener("click", function() {
        count++;
        subtitle.innerHTML = `You've clicked the light ${count} times`;
        bulb.classList.toggle("active");
    })
})
