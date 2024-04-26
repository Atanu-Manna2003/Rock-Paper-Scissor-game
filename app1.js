let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const showWinner=(userWin,userChoice,comChoice)=>{
       if(userWin){
        user_score++;
        userScorePara.innerText=user_score;
        msg.innerText=`you are win ! your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
       }
       else{
        comp_score++;
        compScorePara.innerText=comp_score;
       msg.innerText=`you are lose ! ${comChoice} beats  your${userChoice}`;
       msg.style.backgroundColor="red";
       }
}
const drawGame=()=>{
    msg.innerText=" Game was draw";
}
const playGame=(userChoice)=>{
    
    const comChoice=genCompChoice();
    
    if(userChoice===comChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=comChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin=comChoice==="scissors"? false:true;
        }
        else{
            userWin=comChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,comChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       
        playGame(userChoice);
    })
})