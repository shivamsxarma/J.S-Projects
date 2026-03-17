


// let randomNumber = Math.floor(Math.random() * max - min)+min;
// console.log(randomNumber);
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel")
const myLabe2 = document.getElementById("myLabe2")
const myLabe3 = document.getElementById("myLabe3")
const myLabe4 = document.getElementById("myLabe4")

const min =1;
const max =6;

let randomNum;
let randomNum2;
let randomNum3;
let randomNum4;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    randomNum4 = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
    myLabe2.textContent = randomNum2;
    myLabe3.textContent = randomNum3;
    myLabe4.textContent = randomNum4;
}

function createDice (){
    
}