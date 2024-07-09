let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = () =>{
    console.log("Game was a draw!");
    msg.innerText = "Game was draw!Play again";
    msg.style.backgroundColor = "#081b31"
};
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer win!");
        msg.innerText = `You lose!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    let compChoice = genCompChoice();
    if(userChoice == compChoice){
        drawGame(); //Game was a draw
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissors
            userWin = compChoice === "paper"? false:true; //if compChoice is "paper" then user wins as his choice is rock
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors"? false:true;
        }
        else{
            //rock,paper
            userWin = compChoice ==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});