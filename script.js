let boxes= document.querySelectorAll(".box");
let rstBtn= document.querySelector(".rst-btn");
let newBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector("#msg-container");
let msg= document.querySelector("#msg");

// let turnVal = prompt("Select the turn. Enter 0 or X.");
// console.log(turnVal);

let turn0 = true;

/* const chooseTurn= () => {
    if(turnVal === 0) {
        turn0 = true;
        return turn0;
    } else {
        turn0 = false;
        return turn0;
    }
} */

// let turn0 = chooseTurn();
 
const winPatterns =[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText="0";
            turn0 = false;
        } else {
            box.innerText= "X";
            turn0 = true;
        }
        box.disabled= "true";
        checkWinner();
    })
})

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                setTimeout(() => {
                    showWinner(pos1Val);
                }, 500);
                // showWinner(pos1Val);
            }
        }
    }
}

const showWinner= (winner) => {
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    rstBtn.style.display="none";
}

const disableBoxes= () => {
    for(box of boxes) {
        box.disabled= true;
    }
}

const resetGame= () => {
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hide");
    rstBtn.style.display="";
}

const enableBoxes= () => {
    for(box of boxes) {
        box.disabled= false;
        box.innerText="";
    }
}

rstBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);