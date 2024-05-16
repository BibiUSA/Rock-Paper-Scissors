const paper1= document.querySelector("#paper1");
const rock1= document.querySelector("#rock1");
const scissors= document.querySelector("#scissors1");
const yourScore= document.querySelector("#your-score");
const aiScore = document.querySelector("#ai-score");
const signs= document.querySelectorAll(".signs");
const yourMove = document.querySelector("#your-move");
const aiMove = document.querySelector("#ai-move");
const aiSigns = document.querySelector(".ai-side").querySelectorAll(".signs");
const keepPlaying = document.querySelector("#keep-playing"); //box to click to keep playing
const youWin = document.querySelector("#you-win");
const youLose = document.querySelector("#you-lose");



let chosenSign; //sign that you chose

yourScore.innerHTML =0; //scoreboard number
aiScore.innerHTML= 0; // ai scoreboard number

let chosenButton =0;


for (let i=0; i<3; i++){
    signs[i].addEventListener("click", function(){
        console.log(signs[i].classList);
        let chosenButton=0;
        for(let j=0; j<3; j++){
            if(signs[j].classList.contains("chosen")){
                chosenButton++;
            } else{
                console.log("hello");
            }
        
        }
        if(chosenButton===0){
            signs[i].classList.add("chosen");
            console.log(signs[i].id);
            chosenSign = signs[i].id;
            setTimeout(function(){
                yourMove.classList.add("invisible");
                aiMove.classList.remove("invisible");
            },2000);
            setTimeout(function(){
                let aiChoice = aiPlay();
            if(chosenSign === aiChoice){
                battle(i, chosenSign,aiChoice);        
            } else if(chosenSign === "paper1" && aiChoice=== "rock1"){
                battle(1, chosenSign,aiChoice,yourScore);
                winner();
                
            }else if (chosenSign === "paper1" && aiChoice === "scissors1"){
                battle(2, chosenSign,aiChoice,aiScore);
                winner();
                
            }else if(chosenSign === "rock1" && aiChoice === "paper1"){
                battle(0, chosenSign,aiChoice,aiScore);
                winner();
                
            }else if(chosenSign === "rock1" && aiChoice === "scissors1"){
                battle(2, chosenSign,aiChoice, yourScore)
                winner();
                
            }else if(chosenSign === "scissors1" && aiChoice === "paper1"){
                battle(0, chosenSign,aiChoice, yourScore);
                winner();
                
            }else if(chosenSign === "scissors1" && aiChoice === "rock1"){
                battle(1, chosenSign,aiChoice, aiScore);
                winner();
                
            }else {
                console.log("we'see");
                console.log(chosenSign);
            }
            },3000);

        }else{
            console.log("button already selected");
        }
    })
    chosenButton =0;  
}


//ai chosing a random number;
let randomNum;
function aiPlay(){
    let randomNum = Math.ceil(Math.random()*3);
     randomNum;
    console.log(randomNum);
    let aiChoicetest;
    if (randomNum ==1){
        aiChoicetest= "rock1";
    } else if(randomNum ==2){
         aiChoicetest = "paper1";
    } else if(randomNum == 3){
         aiChoicetest = "scissors1";
    } else{
         aiChoicetest ="what the hell";
    }
    return aiChoicetest;
}

let aiChoice = aiPlay();
console.log(aiChoice +"ARE ");

//allows you to click next game

keepPlaying.addEventListener("click", function(){
    chosenButton =0;
    keepPlaying.classList.add("hidden");
    yourMove.classList.remove("invisible");
    aiMove.classList.add("invisible");
    for(let i=0; i<signs.length; i++){
        signs[i].classList.remove("chosen");
    }
    console.log("here2")
})

//checking to see if you or AI have winning score and displaying it if you do

function winner(){
if(yourScore.innerHTML ==="3"){
    console.log("GAME OVER!! YOU WIN!")
    keepPlaying.classList.add("hidden");
    youWin.classList.remove("hidden");
} else if (aiScore.innerHTML==="3"){
    console.log("GAME OVER!! YOU LOSE!")
    keepPlaying.classList.add("hidden");
    youLose.classList.remove("hidden");
} else{
    console.log(yourScore.innerHTML+ "YOUR SCORE");
    console.log(aiScore.innerHTML +"AI SCORE");
}
}

//allows you to click to next game


function ending(event){
    event.addEventListener("click", function(){
        chosenButton =0;
        yourMove.classList.remove("invisible");
        aiMove.classList.add("invisible");
        event.classList.add("hidden");
        yourScore.innerHTML =0; 
        aiScore.innerHTML= 0; 
        for(let i=0; i<signs.length; i++){
            signs[i].classList.remove("chosen");
        }
    })
}

ending(youWin);
ending(youLose);


function battle(signNum, chosenSign,aiChoice,scorer){
aiSigns[signNum].classList.add("chosen");
keepPlaying.classList.remove("hidden");
scorer.innerHTML =parseInt(scorer.innerHTML)+1;
if (chosenSign === aiChoice){
    console.log("we have a draw");
} else{
    console.log("You win AI: " + aiChoice);
}
}
