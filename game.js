

//the words of the game

var words = [
    {a:"a"},
];

var score = 0;
//var chance;
var i;
var j=5;

var result;

var wordIndex = 0;

function updateScore(){
    document.querySelector("#score").innerHTML = "Score: " + score;
}

function updateChance(){
    document.querySelector("#chance").innerHTML="Chance left: " + j;
}

function renderLetter(){

}

//main process

updateScore();
updateChance();
var userInput 

    document.onkeypress = function(event){
        userInput = event.key.toLowerCase();
        
        if(userInput === words[wordIndex].a){
            //console.log(userInput)
            document.getElementById("letter").innerHTML = "You are right, the letter is " + userInput;
            score++;
            updateScore();
        }else{
         j--;
            if(j>1){
                document.getElementById('chance').innerHTML = 'wrong, you have '+ j +" chances left";
            }else if(j>=0){
                document.getElementById('chance').innerHTML = 'wrong, you have '+ j +" chance left";
            }else{
                document.getElementById('chance').innerHTML = "Gameover";
                
            }
        }
    }
     


    