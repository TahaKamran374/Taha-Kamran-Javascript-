// Cricket Tournament Analysis System (10 Marks)


// A cricket academy wants to analyze the performance of its players after a tournament.

// Create an array containing the following player scores:

// [45, 67, 89, 34, 90, 76, 54, 61]

// Write a JavaScript program that performs the following tasks:

// Calculate the total score of all players.
// Calculate the average score.
// Round the average score using the appropriate Math method.
// Count how many players scored 50 or above.
// Count how many players scored below 50.
// Find the highest score.
// Find the lowest score.
// If the average score is 70 or above, display "Excellent Team Performance".
// Otherwise display "Team Needs Improvement".
// Display a complete performance report showing:
// Total Players
// Total Score
// Average Score
// Highest Score
// Lowest Score
// Passed Players
// Failed Players
// Team Performance



let scores = [45, 67, 89, 34, 90, 76, 54, 61];

let totalScore = 0;
let highestScore = scores[0];
let lowestScore = scores[0];
let passedPlayers = 0;
let failedPlayers = 0;

for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];

    if (scores[i] > highestScore) {
        highestScore = scores[i];
    }

    if (scores[i] < lowestScore) {
        lowestScore = scores[i];
    }

    if (scores[i] >= 50) {
        passedPlayers++;
    } else {
        failedPlayers++;
    }
}

let averageScore = totalScore / scores.length;
let roundedAverage = Math.round(averageScore);

let teamPerformance = "";
if (roundedAverage >= 70) {
    teamPerformance = "Excellent Team Performance";
} else {
    teamPerformance = "Team Needs Improvement";
}

alert(
    "--- Performance Report ---\n" +
    "Total Players: " + scores.length + "\n" +
    "Total Score: " + totalScore + "\n" +
    "Average Score: " + roundedAverage + "\n" +
    "Highest Score: " + highestScore + "\n" +
    "Lowest Score: " + lowestScore + "\n" +
    "Passed Players: " + passedPlayers + "\n" +
    "Failed Players: " + failedPlayers + "\n" +
    "Team Performance: " + teamPerformance
);
