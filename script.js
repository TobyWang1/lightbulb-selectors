// Write your code here
const bulbs = document.querySelectorAll(".lightbulb");
const subtitle = document.querySelector(".subtitle");

let count = 0;

bulbs.forEach((bulb) => {
    bulb.addEventListener("mouseenter", function() {
        count++;
        if (count === 1){
            subtitle.innerHTML = `You've lit the light ${count} time`;
        } else {subtitle.innerHTML = `You've lit the light ${count} times`;}
        bulb.classList.toggle("active");
    });

    bulb.addEventListener("mouseleave", function() {
        bulb.classList.remove("active");
    })
})
