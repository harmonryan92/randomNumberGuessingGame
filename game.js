function playGuessMyNumber(){                                                       //function that chooses a random number when the button is clicked.

    var totalGuesses = 0;                                                           //totalGuesses set to 0 so we can count how many guesses we've had
    var secretNumber = Math.round(Math.random()*100+1);                             //generates a random number. since range is from 1-100, we have to multiply by 100, add 1, and round it.
    var guess = prompt("Guess My Number. It's Between 1-100.");                     //prompt fires after a random number is chosen
    var divGameResult = document.getElementById("divGameResult");                   //variable for our results (number of guesses). Calls the divGameResult div from the game.html file.
    var guessedIt = false;                                                          //guessedIt set to false by default so the correct answer will be easier to identify

    //guessing loop
    while (!guessedIt) {                                                            //while loop for when a guess is entered. If statements run while it checks to see is guessedIt is true.
        totalGuesses++;                                                             //adds 1 to totalGuesses 

        if(parseInt(guess) > secretNumber){                                         //if statement for when the number is greater than the secretNumber
            var guess = prompt("Too high, guess again or type 'Q' to quit.");       //prompt tells you guess was too high
        }
        else if (parseInt(guess) < secretNumber) {                                  //else if statement for when the number is less than the secretNumber
            var guess = prompt("Too low, guess again or type 'Q' to quit.");        //prompt tells you guess was too low
        }
        else if (parseInt(guess)==secretNumber){                                    //else if statement for when the number is correct
            divGameResult.innerHTML = secretNumber+" is correct. Total guesses: "+totalGuesses;     //sets the innerhtml of the divGameResult div to tell you your guess was correct, and display your total guesses
            guessedIt=true;                                                         //guessedIt set to true to the loop knows it has found the correct answer
            displayRanking(totalGuesses);                                           //calls displayRanking function (below) for the ranking based on the number of guesses.
        }
        else if(guess=="Q"){                                                        //else if statement for when "Q" is entered
            divGameResult.innerHTML = "Quitter! It was " + secretNumber+". Total guesses: "+totalGuesses;       //sets innterHTML of the divGameResult div to tell you what the correct answer was and your total guesses
            break;                                                                  //break literally breaks the loop and tells it to stop running.
        }
        else{                                                                       //else statement for anything entered that isn't a number or "Q"
            var guess = prompt("Was that a real guess? Guess again or type 'Q' to quit.");      //prompt asks question signifying an unknown character was used.
        }
    }
}

function displayRanking(totalGuesses) {                                             //function for ranking you based on total guesses
    var divRanking = document.getElementById("divRanking");                         //tells the function to add the switch statement to the divRanking div from the game.html file

    switch(totalGuesses){                                                           //switch statement with totalGuesses passed into it.
        case 1:                                                                     //case 1 displays this message if you guessed it right the first time.
            divRanking.innerHTML = "Hole in one! Get out of my CPU circuits!";
            break;                                                                  //break literally breaks the loop and tells it to stop running.
        case 2:                                                                     //cases 2-4 are blank and it picks back up at 5 as the next message is for if you guessed it between 2-5 guesses.
        case 3:
        case 4:
        case 5:
            divRanking.innerHTML = "Very good. We should play chess... I'll win, but at least it will be a challenge";
            break;                                                                  //break literally breaks the loop and tells it to stop running.
        case 6:                                                                     //cases 6-9 are blank and it picks back up at 10 as the next message is for if you guessed it between 6-10 guesses.
        case 7:
        case 8:
        case 9:
        case 10:
            divRanking.innerHTML = "Average Score";
            break;                                                                   //break literally breaks the loop and tells it to stop running.
        default:                                                                     //you can do better set to default if more than 10 guesses are attempted.
            divRanking.innerHTML = "You can do better";
            break;                                                                   //break literally breaks the loop and tells it to stop running.                                                           
    }
}