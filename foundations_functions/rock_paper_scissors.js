
function computer_play (list) {
    return list[Math.floor((Math.random()*list.length))];
}
function playRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        return "A Tie";
    }else if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper')
    || (computerSelection === 'paper' && playerSelection === 'rock') 
    ){
        return 'You Lose!';
    }else {
        return 'You Win!';
    }
}
function chooseOption(){
    return prompt("Paper ✋🏼, Rock 👊🏼 or Scissors ✌🏼? ").trim().toLowerCase();
}

function game(){
    const options = ['rock', 'paper', 'scissors'];
    let computerScore = 0;
    let playerScore = 0;
    const rounds = Number(prompt("How round do you want? 1 to 10: "));
    for (let i=0; i < rounds; i++){
        let computerSelection = computer_play(options);
        let playerSelection = chooseOption();
        let winner = playRound(computerSelection, playerSelection);
        if (winner === 'You Lose!'){
            computerScore++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        }else if (winner === 'You Win!'){
            playerScore++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        }else {
            console.log("A Tie");
        }
    }
    console.log(`computer scores: ${computerScore}`);
    console.log(`Your score is: ${playerScore}`);
    if (computerScore > playerScore){
        return 'You Lose! 🤪 🤪 🤪';
    }else if (computerScore < playerScore){
        return 'Congratulations!!! You Win! 😍 😍 😍';
    }else {
        return "DRAW play again";
    }
}

const div = document.querySelector(".mum");
div.style.backgroundColor = "pink";

rock = document.createElement("button");
rock.textContent = "Rock";
rock.setAttribute("class", "button");
rock.setAttribute("id", "rock")
rock.style.color = "red";

paper = document.createElement("button");
paper.setAttribute("class", "button");
paper.setAttribute("id", "paper");
paper.textContent = "paper";
paper.style.color = "blue";

scissors = document.createElement("button");
scissors.setAttribute("class", "button");
scissors.setAttribute("id", "scissors")
scissors.textContent = "Scissors";

div.append(rock, paper, scissors);
// ----------------------------------------------------------------
options = document.querySelectorAll(".button");
for (let i = 0; i < options.length; i++){
    if (options[i].getAttribute("id") === "rock"){
        playerSelection
        console.log("yes");
    }
    // options[i].addEventListener("click", chooseOption);
}
// paper.addEventListener("click", game);

// console.log(game());