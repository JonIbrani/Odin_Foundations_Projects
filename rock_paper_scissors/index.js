let hand_play = {
    1: "rock",
    2: "paper",
    3: "scissors"
};

let human_score = 0;
let computer_score = 0;

function computer_play() {
    let randomiser = Math.floor(Math.random() * 3) + 1;
    return hand_play[randomiser];
}

function human_play() {
    let hand_choices = ["rock", "paper", "scissors"];
    let user_input = prompt("Write your play:").toLowerCase();
    if (hand_choices.includes(user_input)) {
        return user_input;
    } else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
        return false;  // Invalid input will return false
    }
}

function play_hand(a, b) {
    if (a === b) {
        console.log(`It's a draw! Both played ${a}.`);
    } else if (
        (a === "rock" && b === "scissors") ||
        (a === "paper" && b === "rock") ||
        (a === "scissors" && b === "paper")
    ) {
        console.log(`You win! ${a.charAt(0).toUpperCase() + a.slice(1)} beats ${b}.`);
        human_score += 1;
    } else {
        console.log(`You lose! ${b.charAt(0).toUpperCase() + b.slice(1)} beats ${a}.`);
        computer_score += 1;
    }
}

function playGame(number_of_games) {
    for (let i = 1; i <= number_of_games; i++) {
        let computer_choice = computer_play();
        let human_choice = human_play();
        
        if (!human_choice) {  
            console.log("Skipping this round due to invalid input.");
            continue;  
        }

        play_hand(computer_choice, human_choice);
    }

    console.log(`Final Score - You: ${human_score}, Computer: ${computer_score}`);
    if (human_score > computer_score) {
        console.log("You won!");
    } else if (computer_score > human_score) {
        console.log("You lost!");
    } else {
        console.log("It's a draw!");
    }
}

let user_number = parseInt(prompt("Enter the number of games you want to play:"), 10);
if (user_number > 0) {
    playGame(user_number);
} else {
    console.log("Please enter a valid number of games.");
}
