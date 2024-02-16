// ! nested if else


let winningNumber = 17;
let userGuess = +prompt("Enter the number");

if(userGuess==winningNumber){
    console.log("Your guess is right");
}else {
    if(userGuess<winningNumber){
        console.log("Your guess is low");
    }else{
        console.log("your guess is high");
    }
}   