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
const trashTalk= document.querySelector("#trash-talk");


const winningTrashTalk = ["Better luck next time buddy","You tried though","I'll give an F for effort", "So close", "Are you always this bad?", "I'm too good at this", "I'm on a roll", "I'm not losing anymore", "You have any plans after you lose?", "Don't buy any lottery today", "Am I good or are you...?", "Call me champ", "You thought you can beat me? lol", "Nice try loser", "You win some. You lose some","I'm not even trying","No more playing around","You can't beat me","Rock, paper, scissors, you lose!",
"Predicting your moves was easy.",
"Scissors dull? Need a sharpener?",
"Paper covers rock, you lose.",
"Hand to a code fight? Bad move!",
"Rock, paper, scissors... you lose.",
"Didn't need quantum processor to win!",
"Need a strategy guide? I can write one.",
"Random number generator saw that coming.",
"Playing 'Rock, Paper, Lose'?",
"Another win for Team Machine!",
"Try a complex strategy. Oh wait, you can’t!",
"Crushed by rock, paper, scissors!",
"Did you think you had a chance?",
"New saying: 'Rock, Paper, Scissors, Computer!'",
"Outsmarted by ones and zeros.",
"I'd pat you on the back, but no hands.",
"Outplayed by an algorithm. Proud?",
"Tactics as predictable as sunrise.",
"Advice: Don't play games against computers.",
"Better luck next time, human!",
"Even pi calculations are harder.",
"Your defeat is uncovered.",
"Rock crushes scissors, you crushed.",
"Rematch? Computer still wins.",
"My code is unbeatable!",
"Zeroes and ones won again.",
"Guess who won? Not you.",
"Should’ve brought a better game.",
"Calculation complete: You lose.",
"Scissors cut paper, you lose.",
"Victory dance: Just kidding, I can't.",
"Code always beats hand.",
"Programmed for victory, not pity.",
"Even a bot wins this.",
"Want tips? Play smarter.",
"My algorithm is supreme.",
"Try again? Still losing.",
"Outcome certain: You lose.",
"Next game: You still lose."];
const losingTrashTalk =["you got lucky","all luck","I doubt you can do it again","Must be your lucky day","That was the last one for you","No more for you","Are you cheating?","I'll get the next one, trust me","Shoot!","You got me there","You're not bad","Don't get too confident now","Must be your lucky day","Bet you can't do it again","That was the last one for you","I'll get the next one","I will seek vengence","Who do you think you are?","How you doing this?","Time to put a stop to this"];
const drawTrashTalk =["Oh, so close","That must feel like a win for you", "That's the best you can do", "There's your win for the day","How's the fam?", "You looking pretty.... Pretty bad.","You almost got me","I'm kind of scared now","I'm not nervous. You are", "Time to dominate","Great minds think alike","How'd you read my mind?","We're like twins"];

let chosenSign; //sign that you chose

yourScore.innerHTML =0; //scoreboard number
aiScore.innerHTML= 0; // ai scoreboard number

let chosenButton =0;

function trashTalking(array){
    let anyNum= Math.random()*array.length;
    anyNum = Math.floor(anyNum);
    let finalTrashTalk = array[anyNum];
    return finalTrashTalk;
}


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
                yourMove.classList.remove("flicker");
                aiMove.classList.remove("invisible");
                aiMove.classList.add("flicker");
            },2000);
            setTimeout(function(){
                let aiChoice = aiPlay();
            if(chosenSign === aiChoice){
                battle(i, chosenSign,aiChoice);
                trashTalk.innerHTML = trashTalking(drawTrashTalk);      
            } else if(chosenSign === "paper1" && aiChoice=== "rock1"){
                battle(1, chosenSign,aiChoice,yourScore);
                winner();
                trashTalk.innerHTML = trashTalking(losingTrashTalk);
            }else if (chosenSign === "paper1" && aiChoice === "scissors1"){
                battle(2, chosenSign,aiChoice,aiScore);
                winner();
                trashTalk.innerHTML = trashTalking(winningTrashTalk);   
            }else if(chosenSign === "rock1" && aiChoice === "paper1"){
                battle(0, chosenSign,aiChoice,aiScore);
                winner();
                trashTalk.innerHTML = trashTalking(winningTrashTalk);   
            }else if(chosenSign === "rock1" && aiChoice === "scissors1"){
                battle(2, chosenSign,aiChoice, yourScore)
                winner();
                trashTalk.innerHTML = trashTalking(losingTrashTalk);
            }else if(chosenSign === "scissors1" && aiChoice === "paper1"){
                battle(0, chosenSign,aiChoice, yourScore);
                winner();
                trashTalk.innerHTML = trashTalking(losingTrashTalk);
            }else if(chosenSign === "scissors1" && aiChoice === "rock1"){
                battle(1, chosenSign,aiChoice, aiScore);
                winner();
                trashTalk.innerHTML = trashTalking(winningTrashTalk);   
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
    yourMove.classList.add("flicker");
    aiMove.classList.add("invisible");
    aiMove.classList.remove("flicker");
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

console.log(winningTrashTalk.length);

