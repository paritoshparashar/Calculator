//Below is the implementation of 
const numbers = document.getElementById('numbers');
let parentWidthtNumbers = numbers.offsetWidth;
let parentHeightNumbers = numbers.offsetHeight;
let j = 9;

for (let i = 1; i < 20 ; i++) {
    
    let number = document.createElement('button');
    number.id = 'boxed';
    number.className = ''+(i);
    number.style.width = (parentWidthtNumbers-30)/4 + 'px';
    number.style.height =( parentWidthtNumbers-30)/4 + 'px';    

    if (i >=4 && i<=17 ) {

        number.addEventListener('click', dispPopNum);

        if (i%4 != 0) {     
        number.textContent = ''+ j;
        
        --j;
        }
        else if (i == 4) {
        number.textContent = "/";
        }
        else if (i == 8) {
            number.textContent = "x";
        }
        else if (i == 12) {
            number.textContent = "-";
            number.style.fontSize = "45px";
            number.style.fontWeight = "100";
        }
        else if (i == 16) {
            number.textContent = "+";
        }
    }

    else if (i == 19) {
        number.style.flexGrow = "0.8";
        number.style.borderRadius = "40px";
        number.textContent = "=";
        number.style.fontSize = "50px";
        number.addEventListener('click' , dispPopNum);
    }
    else if (i == 1) {
        number.textContent = "AC";
        number.addEventListener('click' , clear);
    }
    else if (i == 2) {
        number.textContent = "C";
    }
    else if (i == 3) {
        number.textContent = "%";
    }
    
    else if (i == 18) {
        number.textContent = ".";
        number.addEventListener('click', dispPopNum);

    }

    numbers.appendChild(number);
}


//Implementing Calculator From here

let leftNum = 0;
let sign = 1;
let rightNum = 1;
let result = 0;
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

const upDisplay = document.querySelector('.upDisplay');
upDisplay.textContent = "0";

let text = 0;
let previousInput = undefined;


function dispPopNum () {
    
    
    let input = this.textContent;

    if ((input == "x") || (input == "+") || (input == "/") || (input =="=") || (input == "AC") || (previousInput == "-")) {

        if (previousInput == input) {
            return;
        }
        //else

    }
    previousInput = input;

    if (upDisplay.textContent == "0") {
        if (input == '.') {
            upDisplay.textContent = "0.";
            return;
        }
        else{
            upDisplay.textContent = "";
        }
        
    }


    if ((leftNum == 0)) {

        if (((input != "x") && (input != "+") && (input != "/") && (input != "-") ) || ( (input == "-") && (text == 0))) {

            if (input == "-" && text == 0)  {
                sign = -1;
            }
            upDisplay.textContent += input ;
            text = (text *  10) + parseFloat(input);
            return;
        }
        else if ((input == "x") || (input == "+") || (input == "/") || (input == "-")){ 
            leftNum = sign * parseFloat(text);
            operator = input;
            upDisplay.textContent += input; 
            text = "0"
            rightNum = 0;
            return;
        }

    }
    if ((rightNum == 0)) {

        if (((input != "x") && (input != "+") && (input != "/") && (input != "=") && (input !="-")) || ( (input == "-") && (text == 0))) {

            if (input == "-" && text == 0)  {
                sign = -1;
            }
            upDisplay.textContent += input ;
            text = (text *  10) + parseFloat(input);

        }
        else if ((input == "x") || (input == "+") || (input == "/") || (input == "=") || (input == "-")){

            rightNum = sign * parseFloat(text);
            result = operate(operator, leftNum, rightNum);
            dispResult(result);
            leftNum = result;
            operator = input;
            rightNum = 0;
            if (input != "=") {
                upDisplay.textContent += input;
            }
            
            text = "0";
        }

    }
   
}
 function clear (){
        rightNum = 0;
        leftNum = 0;
        text = 0;
        previousInput = undefined;
        result = 0;
        upDisplay.textContent = "0"
        downDisplay.textContent ="";
    }


const downDisplay = document.querySelector('.downDisplay');

function dispResult(){
    text = "" + result;
    downDisplay.textContent = '' + result;

   } 



