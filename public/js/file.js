function game(player1) {
	let comPlayer = "";
    let comPlayerId = "";
let randomChoice = Math.floor(Math.random()*3 + 1);
    if (randomChoice === 1) {
        comPlayer = "scissors";
        comPlayerId = "scissorsCom"
    } else if (randomChoice === 2) {
        comPlayer = "paper";
        comPlayerId = "paperCom"
    } else if (randomChoice === 3) {
        comPlayer = "rock";
        comPlayerId = "rockCom"
    }
    document.getElementById(comPlayerId).style.cssText = 
    `background: #C4C4C4;
    border-radius: 30px;
    width: 180px;
    height: 170px;
    margin-left: 7rem;
    z-index: 300;
    cursor: pointer;`;
    
let playersChoice = player1+comPlayer;

switch (playersChoice) {
    case "scissorsscissors":
        console.log("Draw");
        document.getElementById("result").innerHTML = "Draw"
        return "Draw";
    case "scissorspaper":
        console.log("Player 1 Win");
        document.getElementById("result").innerHTML = "Player 1 win"
        return "Player 1 Win";
    case "scissorsrock":
        console.log("Com Win");
        document.getElementById("result").innerHTML = "Com Win"
        return "Com 1 Win";
    case "paperpaper":
        console.log("Draw");
        document.getElementById("result").innerHTML = "Draw"
        return "Draw";
    case "paperscissors":
        console.log("Com Win");
        document.getElementById("result").innerHTML = "Com Win"
        return "Com Win";
    case "paperrock":
        console.log("Player 1 Win");
        document.getElementById("result").innerHTML = "Player 1 Win"
        return "Player 1 Win";
    case "rockrock":
        console.log("Draw");
        document.getElementById("result").innerHTML = "Draw"
        return "Draw";
    case "rockpaper":
        console.log("Com Win");
        document.getElementById("result").innerHTML = "Com Win"
        return "Com Win";
    case "rockscissors":
        console.log("Player 1 Win");
        document.getElementById("result").innerHTML = "Player 1 Win"
        return "Player 1 Win";              
}
}

function refresh (idName) {
    document.getElementById(idName).style.cssText = `outline: none;
    border: none;
    margin-top: 3rem;
    margin-left: 7rem;
    margin-bottom: 2rem;
    z-index: 1000;
    position: relative;
    background-color: transparent;
    border: solid 2px transparent;
    border-radius: 30px;`
}

function disabledButton (idName, removeDisable) {
    if (!removeDisable) {
        document.getElementById(idName).setAttribute("disabled","disabled")
    } else {
        document.getElementById(idName).removeAttribute("disabled")
    }
}

// const hideVsText = document.getElementById('vs-text').style.display="hidden";

document.getElementById('scissors').onclick = function() {
    document.getElementById('scissors').style.cssText = 
        `background: #C4C4C4;
        border-radius: 30px;
        width: 180px;
        height: 170px;
        margin-left: 7rem;
        z-index: 300;
        cursor: pointer;`;

    document.getElementById('vs-text').style.display="none";
    document.getElementById('result-wrapper').style.cssText = `
        display: flex !important;
    `;
    game('scissors');
    disabledButton('rock');
    disabledButton('paper');
    disabledButton('scissors');
};

document.getElementById('rock').onclick = function() {
    document.getElementById('rock').style.cssText = 
        `background: #C4C4C4;
        border-radius: 30px;
        width: 180px;
        height: 170px;
        margin-left: 7rem;
        z-index: 300;
        cursor: pointer;`;

    document.getElementById('vs-text').style.display="none";
    document.getElementById('result-wrapper').style.cssText = `
        display: flex !important;
    `;
        
   game('rock');
   disabledButton('rock');
   disabledButton('paper');
   disabledButton('scissors');
};

document.getElementById('paper').onclick = function() {
    document.getElementById('paper').style.cssText = 
        `background: #C4C4C4;
        border-radius: 30px;
        width: 180px;
        height: 170px;
        margin-left: 7rem;
        z-index: 300;
        cursor: pointer;`;

    document.getElementById('vs-text').style.display="none";
    document.getElementById('result-wrapper').style.cssText = `
        display: flex !important;
    `;

   game('paper');
   disabledButton('rock');
   disabledButton('paper');
   disabledButton('scissors');
};

document.getElementById('refresh-button').onclick = function () {
    refresh('rock');
    refresh('paper');
    refresh('scissors');
    refresh('rockCom');
    refresh('paperCom');
    refresh('scissorsCom');
    document.getElementById('vs-text').style.display="inline";
    document.getElementById('result-wrapper').style.cssText = `
        display: none !important;
    `;
    disabledButton('rock', true);
    disabledButton('paper', true);
    disabledButton('scissors', true);
}