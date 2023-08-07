const numbers = document.getElementById('numbers');
// let parentWidthtNumbers = numbers.offsetWidth;
// let parentHeightNumbers = numbers.offsetHeight;

for (let i = 0; i < 16 ; i++) {
      
    let number = document.createElement('div');
    number.className = ''+(i+1);
    numbers.appendChild(number);
}
