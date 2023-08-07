//Below is the implementation of 
const numbers = document.getElementById('numbers');
let parentWidthtNumbers = numbers.offsetWidth;
let parentHeightNumbers = numbers.offsetHeight;

for (let i = 0; i < 19 ; i++) {
      
    let number = document.createElement('div');
    number.className = ''+(i+1);
    number.style.width = (parentWidthtNumbers-30)/4 + 'px';
    number.style.height =( parentWidthtNumbers-30)/4 + 'px';
    number.style.backgroundColor = "black";
    number.style.marginTop = '10px';
    number.style.borderRadius = "50%";
    if (i == 18) {
        number.style.flexGrow = "0.8";
        number.style.borderRadius = "40px";
    }
    numbers.appendChild(number);
}
//Implementing Calculator From here

var leftNum;
var rightNum;
var operator;

function operate (op, first, second){
    if (op === '+') {
        return sum(first , second);
    }
    else if (op === '-') {
        return subtract(first, second);
    }
    else if (op === '/') {
        return divide(first, second);
    }
    else if (op === '*') {
        return multiply(first, second);
    }
    else if (op === '%') {
        return mod(first, second);
    }

}

function sum (a, b){
    return a+b;
}
function subtract (a, b){
    return a-b;
}
function multiply (a, b){
    return a*b;
}
function divide (a, b){
    return a/b;
}
function mod (a, b){
    return a % b;
}

