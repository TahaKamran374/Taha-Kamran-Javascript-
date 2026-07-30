// Lucky Draw Game (20 Marks)

// Create a lucky draw game.

// Requirements:
// Generate a random number between 1 and 20.
// Give the player 5 chances.
// Ask the player to guess the number.
// If guessed correctly:
// Display "Congratulations! You Won."
// Stop the loop immediately.
// If the player fails after 5 attempts:
// Display "Better Luck Next Time."
// Display the correct number.
// Also display the number of attempts used.



let correctNumber = Math.floor(Math.random() * 20) + 1;
let attemptsUsed = 0;
let won = false;

for (let i = 1; i <= 5; i++) {
    let guess = parseInt(prompt("Guess a number between 1 and 20 (Attempt " + i + "/5):"));
    attemptsUsed++;

    if (guess === correctNumber) {
        alert("Congratulations! You Won.");
        won = true;
        break;
    }
}

if (!won) {
    alert("Better Luck Next Time.\nThe correct number was: " + correctNumber);
}

alert("Total attempts used: " + attemptsUsed);
