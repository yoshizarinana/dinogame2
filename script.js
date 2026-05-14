var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }

    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function () {

    let characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));

    let blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 90 && blockLeft > 40 && characterTop < 50) {

        block.style.animation = "none";
        alert("Game Over! Score: " + counter);
        counter = 0;
        block.style.animation = "block 1.2s infinite linear";

    } else {
        counter++;
        document.getElementById("score").innerHTML = counter;
    }

}, 10);

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        jump();
    }
});