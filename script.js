//Below is the implementation of 
const numbers = document.getElementById('numbers');
let parentWidthtNumbers = numbers.offsetWidth;
let parentHeightNumbers = numbers.offsetHeight;
let j = 9;
for (let i = 1; i < 20 ; i++) {
    
    let number = document.createElement('div');
    number.className = ''+(i);
    number.style.width = (parentWidthtNumbers-30)/4 + 'px';
    number.style.height =( parentWidthtNumbers-30)/4 + 'px';
    number.style.backgroundColor = "black";
    number.style.marginTop = '10px';
    number.style.borderRadius = "50%";
    number.style.color = "white";
    number.style.display = "flex";
    number.style.justifyContent = "center";
    number.style.alignItems = "center";
    number.style.fontSize = "25px";
    number.style.fontWeight = "bold";

    if (i >=5 && i<=17 ) {
        if (i%4 != 0) {     
        number.textContent = ''+ j;
        --j;
        }
        
    }

    if (i == 19) {
        number.style.flexGrow = "0.8";
        number.style.borderRadius = "40px";
        number.textContent = "=";
        number.style.fontSize = "50px";
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

