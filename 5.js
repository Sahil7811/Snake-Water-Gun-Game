// SWG
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScr = document.querySelector("#user-score");
const cScr =document.querySelector("#comp-score");
// function for draw result
const drawGame =()=>{
    console.log("Draw :|");
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "rgb(0, 69, 109)";
}
//function to generate random choice for computer
const compChoice = ()=>{
    const options = ["snake","water","gun"];
    const rdmIdx = Math.floor(Math.random()*3);
    return options[rdmIdx]; 
}
// Function for result
const showWinner = (userWin,user_choice,comp_choice)=>{
    if(userWin){
        userScore++;
        uScr.innerText = userScore;
        console.log("You Win :)");
        msg.innerText = `You Win :) | Your ${user_choice} Beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        cScr.innerText = compScore;
        console.log("You Lose :(");
        msg.innerText = `You Lose :( | ${comp_choice} Beats Your ${user_choice}`;
        msg.style.backgroundColor = "red";
    }
}
// Function to make output out of choices
const playGame = (user_choice)=>{
    const comp_choice = compChoice();
    console.log("Computer Choice :",comp_choice);
    console.log("User Choice :",user_choice);
    if(comp_choice===user_choice){
        drawGame();
    }else{
        let userWin = true;
        if(user_choice==="snake"){
            //comp choice will be water or gun
            if(comp_choice==="water"){
                userWin = true;
            }else{
                userWin = false;
            }
        }
        else if(user_choice==="water"){
            // comp choice will be snake or gun
            if(comp_choice==="snake"){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        else if(user_choice==="gun"){
            //comp choice will be water and snake
            if(comp_choice==="water"){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        showWinner(userWin,user_choice,comp_choice);
    }
}

// Function which give user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice = choice.getAttribute("id");
        playGame(user_choice)
    })
});

