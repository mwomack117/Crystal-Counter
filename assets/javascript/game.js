
$(document).ready(function () {


    
    //var targetNumber;

    //var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var buttons = document.getElementsByClassName("crystal");
    //var buttons = $(".crystal");
    var currentScore = 0; // players score counter
    var targetNumber = Math.floor(Math.random() * 101) + 19;
    var wins = 0;
    var losses = 0;

    startGame();

    function startGame() {

        // set random target number for game between 19 and 120.
        var targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#random-number").text(targetNumber);

        $("#win-count").text(wins);
        $("#loss-count").text(losses);
        currentScore = 0;

    };

    // Loop through all of the (crystal) button elements
    for (let i = 0; i < buttons.length; i++) {
        //  store current button element into the button variable
        let button = buttons[i];
        //  set a custom attribute on the button element to a radom number
        $(button).attr("data-value", Math.floor(Math.random() * 12) + 1);
    }



    $(".crystal").on("click", function () {

        var crystalValue = ($(this).attr("data-value"));
        crystalValue = parseInt(crystalValue);

        currentScore += crystalValue;

        $("#current-score").text(currentScore);

        if (currentScore === targetNumber) {
            alert("You win!!")
            wins++;
            startGame();
        }

        else if (currentScore > targetNumber) {
            alert("You lose!!")
            losses++;
            startGame();
        }

        
    });

});

