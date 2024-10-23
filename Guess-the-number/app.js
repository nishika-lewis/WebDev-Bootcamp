let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

let targetNumber = Math.floor(Math.random() * maximum) + 1;
console.log(targetNumber);

let guess = prompt("Guess the number or type 'q' to quit!");
let attempt = 1;

while (true) {
    // Check if the user wants to quit
    if (guess === 'q') {
        console.log("You quit the game.");
        break;
    }

    // Convert the guess to an integer after checking for 'q'
    guess = parseInt(guess);

    if (guess === targetNumber) {
        console.log("You win");
        console.log(`You guessed the number in ${attempt} move(s)!`);
        break;
    }
    else if (!guess && guess !== 0) {
        guess = prompt("Invalid input, try again!");
    }
    else {
        if (guess > targetNumber) {
            guess = prompt("Too high, try again!");
        }
        else if (guess < targetNumber) {
            guess = prompt("Too low, try again!");
        }
        attempt++;
    }
}




