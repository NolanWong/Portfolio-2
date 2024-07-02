let input=document.querySelector(".input");
let play=document.querySelector(".play");
let result=document.querySelector(".result");
let opps=document.querySelector(".computerChoice");
play.addEventListener("click", function(){
    let input_value=input.value;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    var computerResponse = getRandomInt(1, 3);
    console.log(computerResponse);
document.querySelector(".userChoice").innerHTML=input_value;
if (computerResponse===1){
    opps.innerHTML="Rock";
} else if (computerResponse===2){
    opps.innerHTML="Scissors";
}else if (computerResponse===3){
    opps.innerHTML="Paper";
};
if (input_value=== "Rock" && computerResponse===1){
 result.innerHTML="Tie";
} else if (input_value=== "Scissors" && computerResponse===2){
    result.innerHTML="Tie";
} else if (input_value===  "Paper" && computerResponse===3){
    result.innerHTML="Tie";
}else if (input_value=== "Rock" && computerResponse===2){
    result.innerHTML="win";
    } else if (input_value=== "Paper"  && computerResponse===1){
        result.innerHTML="win";
    } else if (input_value=== "Scissors"  && computerResponse===3){
        result.innerHTML="win";
    } else{
        result.innerHTML="loss";
    };
});





// if (input_value=== "" || "" && computerResponse===){
// }