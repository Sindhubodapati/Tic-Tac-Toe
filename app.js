let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#newgame");
const winpatterns=[[0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [6,7,8],
                [3,4,5]]

let true0=true;
let count=0;
let gameOver=false;
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
            if(true0===true){
               
                box.innerText="0";
                box.style.color="red";
                true0=false;
                
            } else{
                box.innerText="X";
                box.style.color="blue";
                true0=true;
            }
            count++;
            box.disabled=true;
            checkWinner(); 
            if(!gameOver && count==9){
                msg.innerText="It's a Draw Game";
                msgcontainer.classList.remove("hide");
            }     
    })
   
})

const enableboxes = () =>{
    boxes.forEach((box) => {
        box.disabled=false;
        box.innerText="";
        true0=true;
    })
}
const disableboxes = () =>{
    boxes.forEach((box) => {
        box.disabled=true;
    })
}

const resetgame=() => {
    enableboxes();
    true0=true;
    count=0;
    msgcontainer.classList.add("hide");
}


const showWinner=(winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disableboxes();
    msgcontainer.classList.remove("hide");
   
}



const checkWinner=()=>{
    for(let pattern of winpatterns){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1==posval2 && posval2==posval3){
               showWinner(posval1);
               gameOver=true;
            }
        }
    }
}

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);