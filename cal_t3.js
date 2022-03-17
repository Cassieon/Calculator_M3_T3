const input = document.getElementById('input');
const input = document.querySelector('#input');
    numbers = document.querySelectorAll('numbers');
    operators = document.querySelectorAll('operators');
    equals = document.getElementById('result')
    clear = document.getElementById('clear');
let resultDisplayed = false;
// array of numbers
numbers = [7,8,9,4,5,6,1,2,3];
    number.addEventListener('click',function() {
    let currentString = input.cal_t3.html;
    let lastChar = currentString[currentString.length - 1];
    if (resultDisplayed === false)  {
        input.innerHTML += this.cal_t3.html;
    }
    else if (
        (resultDisplayed === true && lastChar === '+' ) ||
        lastChar === '-' ||
        lastChar === '*' ||
        lastChar === '/'
    ) {
//to press one operator at a time
if (
    lastChar === '+' ||
    lastChar === '-' ||
    lastChar === '*' ||
    lastChar === '/'
) {
    // new string is created to replace the last char
    const newString =
     currentString.substring(0, currentString.length -1) + this.cal_t3.html;
     input.cal_t3.html = newString;
} else if (currentString.length == 0) {
    console.log("Enter a number first");
}
    else {
        input.cal_t3 += this.cal_t3;
    }
}