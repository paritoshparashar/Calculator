//Below is the implementation of 
const numbers = document.getElementById('numbers');
let parentWidthtNumbers = numbers.offsetWidth;
let parentHeightNumbers = numbers.offsetHeight;
let j = 9;
for (let i = 1; i < 20 ; i++) {
    
    let number = document.createElement('button');
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
    number.style.fontFamily = "'Courier New', Courier, monospace";
    number.style.boxShadow = "5px 5px 7px rgba(0, 0, 0, 0.57)"
    

    if (i >=5 && i<=17 ) {
        if (i%4 != 0) {     
        number.textContent = ''+ j;
        number.addEventListener('click', dispPopNum);
        --j;
        }
        
    }

    if (i == 19) {
        number.style.flexGrow = "0.8";
        number.style.borderRadius = "40px";
        number.textContent = "=";
        number.style.fontSize = "50px";
    }
    else if (i == 1) {
        number.textContent = "AC"
    }
    else if (i == 2) {
        number.textContent = "C"
    }
    else if (i == 3) {
        number.textContent = "%"
    }
    else if (i == 4) {
        number.textContent = "/"
    }
    else if (i == 8) {
        number.textContent = "x"
    }
    else if (i == 12) {
        number.textContent = "-"
    }
    else if (i == 16) {
        number.textContent = "+"
    }
    else if (i == 18) {
        number.textContent = "."
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
    else if (op === 'x') {
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


//Below is the implementation to populate the display when the buttons are pressed

const display = document.querySelector('.display');
display.textContent = "10";
display.style.padding = "10px"
display.style.color = "darkgreen";
display.style.display = "flex";
display.style.justifyContent = "end";
display.style.alignItems = "end";
display.style.fontSize = "30px";
display.style.fontFamily = "'Courier New', Courier, monospace";
display.style.fontWeight = "bold";

function dispPopNum () {
    display.textContent = (parseInt(display.textContent) * 10) + parseInt(this.textContent);
}

