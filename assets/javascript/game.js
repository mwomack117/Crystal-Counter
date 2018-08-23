
$(document).ready(function () {

    startGame();

    //var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var buttons = document.getElementsByClassName("crystal");
    var currentScore; // players score counter
    //var targetNumber = Math.floor(Math.random() * 101) + 19;
    var targetNumber;
    var wins = 0;
    var losses = 0;
    var button;


    function startGame() {

        //reset current score back to zero
        currentScore = 0;
        $("#current-score").text(currentScore);

        // set random target number for game between 19 and 120.
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#random-number").text(targetNumber);

        // update wins/losses
        $("#win-count").text(wins);
        $("#loss-count").text(losses);

    };

    
        // Loop through all of the (crystal) button elements
        for (let i = 0; i < buttons.length; i++) {
            // store current button element into the button variable
            button = buttons[i];
            //  set a custom attribute on the button element to a radom number
            $(button).attr("data-value", Math.floor(Math.random() * 12) + 1);

        };
    

    $(".crystal").on("click", function () {

        var crystalValue = ($(this).attr("data-value"));
        crystalValue = parseInt(crystalValue);

        currentScore += crystalValue;

        $("#current-score").text(currentScore);

        if (currentScore === targetNumber) {
            $("#current-score").text(currentScore);
            wins++;
            alert("You win!!");
            startGame();
            for (let i = 0; i < buttons.length; i++) {
                // store current button element into the button variable
                button = buttons[i];
                //  set a custom attribute on the button element to a radom number
                $(button).attr("data-value", Math.floor(Math.random() * 12) + 1);
    
            };
        }

        else if (currentScore >= targetNumber) {
            $("#current-score").text(currentScore);
            losses++;
            alert("You lose!!");
            startGame();
            for (let i = 0; i < buttons.length; i++) {
                // store current button element into the button variable
                button = buttons[i];
                //  set a custom attribute on the button element to a radom number
                $(button).attr("data-value", Math.floor(Math.random() * 12) + 1);
    
            };
        };

    });

});

