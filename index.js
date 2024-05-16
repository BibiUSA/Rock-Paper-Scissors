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


console.log(aiSigns);

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
                console.log(aiPlay() +"HELLO CAN YOU See this");
                console.log(aiChoice +"IS THIS REPEATING?");  
            if(chosenSign === aiChoice){
                console.log("we have a draw");
                aiSigns[i].classList.add("chosen");
                keepPlaying.classList.remove("hidden");  
                winner();         
            } else if(chosenSign === "paper1" && aiChoice=== "rock1"){
                aiSigns[1].classList.add("chosen");
                console.log("You win AI rock");
                yourScore.innerHTML =parseInt(yourScore.innerHTML)+1;
                keepPlaying.classList.remove("hidden");
                winner();
            }else if (chosenSign === "paper1" && aiChoice === "scissors1"){
                aiSigns[2].classList.add("chosen");
                console.log("AI win AI scissors");
                aiScore.innerHTML =parseInt(aiScore.innerHTML)+1;
                keepPlaying.classList.remove("hidden");
                winner();
            }else if(chosenSign === "rock1" && aiChoice === "paper1"){
                aiSigns[0].classList.add("chosen");
                console.log("AI wins AI paper");
                aiScore.innerHTML =parseInt(aiScore.innerHTML)+1;
                keepPlaying.classList.remove("hidden");
                winner();
            }else if(chosenSign === "rock1" && aiChoice === "scissors1"){
                aiSigns[2].classList.add("chosen");
                console.log("You win AI scissors");
                yourScore.innerHTML =parseInt(yourScore.innerHTML)+1;
                keepPlaying.classList.remove("hidden");
                winner();
            }else if(chosenSign === "scissors1" && aiChoice === "paper1"){
                aiSigns[0].classList.add("chosen");
                console.log("You win AI paper");
                yourScore.innerHTML =parseInt(yourScore.innerHTML)+1;
                keepPlaying.classList.remove("hidden");
                winner();
            }else if(chosenSign === "scissors1" && aiChoice === "rock1"){
                aiSigns[1].classList.add("chosen");
                console.log("You win AI rock");
                aiScore.innerHTML =parseInt(aiScore.innerHTML)+1;
                keepPlaying.classList.remove("hidden");
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
// youWin.addEventListener("click", function(){
//     chosenButton =0;
//     yourMove.classList.remove("invisible");
//     aiMove.classList.add("invisible");
//     youWin.classList.add("hidden");
//     yourScore.innerHTML =0; 
//     aiScore.innerHTML= 0; 
//     for(let i=0; i<signs.length; i++){
//         signs[i].classList.remove("chosen");
//     }
// })

// //allows you to click to next game

// youLose.addEventListener("click", function(){
//     chosenButton =0;
//     yourMove.classList.remove("invisible");
//     aiMove.classList.add("invisible");
//     youLose.classList.add("hidden");
//     yourScore.innerHTML =0; 
//     aiScore.innerHTML= 0; 
//     for(let i=0; i<signs.length; i++){
//         signs[i].classList.remove("chosen");
//     }
// })

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