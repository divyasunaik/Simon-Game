var buttonColors = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

$(document).on("keydown", function () {
    if (gameStarted == false) {
        nextSequence();
        $("h1").text("Level 0");
    }
    gameStarted = true;


});


$(".btn").click(function () {

    var userChosenColor = this.id;//$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

});

function nextSequence() {
    level = level + 1;
    $("h1").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];
    gamepattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut().fadeIn();

    playSound(randomChosenColor);

}



function playSound(name) {
    var audioFile = "sounds/" + name + ".mp3";
    var audio = new Audio(audioFile);
    audio.play();

}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}



