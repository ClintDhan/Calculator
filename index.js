let showNumber = document.querySelector('.show');
let showAnswer = document.querySelector('.showAnswer');
let operationShown = document.querySelector('.operation');
let firstNum;
let secondNum;
document.querySelector('.seven').addEventListener("click", function () {
    showNumber.innerHTML = showNumber.innerHTML + 7;
})
document.querySelector('.eight').addEventListener("click", function () {
    showNumber.innerHTML = showNumber.innerHTML + 8;
})
document.querySelector('.nine').addEventListener("click", function () {
    showNumber.innerHTML = showNumber.innerHTML + 9;
})

document.querySelector('.four').addEventListener("click", function () {
    showNumber.innerHTML = showNumber.innerHTML + 4;
})
document.querySelector('.five').addEventListener("click", function () {
    showNumber.innerHTML = showNumber.innerHTML + 5;
})
document.querySelector('.six').addEventListener("click", function () {
    showNumber.innerHTML = showNumber.innerHTML + 6;
})

document.querySelector('.three').addEventListener("click", function () {
    showNumber.innerHTML = showNumber.innerHTML + 3;
})
document.querySelector('.two').addEventListener("click", function () {
    showNumber.innerHTML = showNumber.innerHTML + 2;
})
document.querySelector('.one').addEventListener("click", function () {
    showNumber.innerHTML = showNumber.innerHTML + 1;
})
document.querySelector('.zero').addEventListener("click", function () {
    showNumber.innerHTML = showNumber.innerHTML + 0;
})

// symbolsokayy

document.querySelector('.dot').addEventListener("click", function () {
    if (showNumber.innerHTML.includes('.') == false) {
        showNumber.innerHTML = showNumber.innerHTML + '.'
    } else {
        showNumber.innerHTML = showNumber.innerHTML;
    }
})
document.querySelector('.clear').addEventListener("click", function () {
    showNumber.innerHTML = '';
    document.querySelector('.operation').innerHTML = '';
    showAnswer.innerHTML = '';
})

document.querySelector('.delete').addEventListener("click", function () {
    var newNumber = showNumber.innerHTML.slice(0, -1);
    showNumber.innerHTML = newNumber;
    console.log(newNumber);
});
document.querySelector('.add').addEventListener("click", function () {
    if (operationShown.innerHTML !== '' && showNumber.innerHTML.length >= 1) {
        secondNum = Number(showNumber.innerHTML);
        calculate();
        operationShown.innerHTML = '+';
    }
    else if (operationShown.innerHTML !== '' && showNumber.innerHTML == '') {
        showAnswer.innerHTML = firstNum;
        operationShown.innerHTML = '+';
    }
    else {
        operationShown.innerHTML = '+';
        firstNum = Number(showNumber.innerHTML);
        showAnswer.innerHTML = firstNum;
        showNumber.innerHTML = '';
    }

})

document.querySelector('.subtract').addEventListener("click", function () {
    if (operationShown.innerHTML !== '' && showNumber.innerHTML.length >= 1) {
        secondNum = Number(showNumber.innerHTML);
        calculate();
        operationShown.innerHTML = '-';
    }
    else if (operationShown.innerHTML !== '' && showNumber.innerHTML == '') {
        showAnswer.innerHTML = firstNum;
        operationShown.innerHTML = '-';
    }
    else {
        operationShown.innerHTML = '-';
        firstNum = Number(showNumber.innerHTML);
        showAnswer.innerHTML = firstNum;
        showNumber.innerHTML = '';
    }
})

document.querySelector('.multiply').addEventListener("click", function () {
    if (operationShown.innerHTML !== '' && showNumber.innerHTML.length >= 1) {
        secondNum = Number(showNumber.innerHTML);
        calculate();
        operationShown.innerHTML = '*';
    }
    else if (operationShown.innerHTML !== '' && showNumber.innerHTML == '') {
        showAnswer.innerHTML = firstNum;
        operationShown.innerHTML = '*';
    }
    else {
        operationShown.innerHTML = '*';
        firstNum = Number(showNumber.innerHTML);
        showAnswer.innerHTML = firstNum;
        showNumber.innerHTML = '';
    }
})

document.querySelector('.divide').addEventListener("click", function () {
    if (operationShown.innerHTML !== '' && showNumber.innerHTML.length >= 1) {
        secondNum = Number(showNumber.innerHTML);
        calculate();
        operationShown.innerHTML = '/';
    }
    else if (operationShown.innerHTML !== '' && showNumber.innerHTML == '') {
        showAnswer.innerHTML = firstNum;
        operationShown.innerHTML = '/';
    }
    else {
        operationShown.innerHTML = '/';
        firstNum = Number(showNumber.innerHTML);
        showAnswer.innerHTML = firstNum;
        showNumber.innerHTML = '';
    }
})

document.querySelector('.last').addEventListener("click", function () {
    secondNum = Number(showNumber.innerHTML);
    let equals;
    if (operationShown.innerHTML == '+') {
        equals = firstNum + secondNum;
       
    }
    else if (operationShown.innerHTML == '-') {
        equals = firstNum - secondNum;
        
    }
    else if (operationShown.innerHTML == '/') {
        equals = firstNum / secondNum;
        
    }
    else if (operationShown.innerHTML == "*") {
        equals = firstNum * secondNum;
    }

    firstNum = equals;
    showAnswer.innerHTML = equals;
    showNumber.innerHTML = secondNum;
    
    if(showNumber.innerHTML !== '' && operationShown.innerHTML == "+"){
        showAnswer.innerHTML = firstNum + 0;
    }
    else if(showNumber.innerHTML !== '' && operationShown.innerHTML == "-"){
        showAnswer.innerHTML = firstNum - 0;
    }
    else if(showNumber.innerHTML !== '' && operationShown.innerHTML == "*"){
        showAnswer.innerHTML = firstNum * 1;
    }
    else if(showNumber.innerHTML !== '' && operationShown.innerHTML == "/") {
        showAnswer.innerHTML = firstNum / 1;
    }
})

//keypress
document.addEventListener("keypress", function (e) {
    buttonPress = e.key;

    switch (buttonPress) {
        case '1':
            showNumber.innerHTML = showNumber.innerHTML + 1;
            break;

        case '2':
            showNumber.innerHTML = showNumber.innerHTML + 2;
            break;

        case '3':
            showNumber.innerHTML = showNumber.innerHTML + 3;
            break;
        case '4':
            showNumber.innerHTML = showNumber.innerHTML + 4;
            break;
        case '5':
            showNumber.innerHTML = showNumber.innerHTML + 5;
            break;
        case '6':
            showNumber.innerHTML = showNumber.innerHTML + 6;
            break;
        case '7':
            showNumber.innerHTML = showNumber.innerHTML + 7;
            break;
        case '8':
            showNumber.innerHTML = showNumber.innerHTML + 8;
            break;
        case '9':
            showNumber.innerHTML = showNumber.innerHTML + 9;
            break;
        case '0':
            showNumber.innerHTML = showNumber.innerHTML + 0;
            break;
        case '=':
            secondNum = Number(showNumber.innerHTML);
            calculate();
            document.querySelector('.operation').innerHTML = '';
            showAnswer.innerHTML = '';
            break;
        case '+':
            if (operationShown.innerHTML !== '' && showNumber.innerHTML.length >= 1) {
                secondNum = Number(showNumber.innerHTML);
                calculate();
            }
            else if (operationShown.innerHTML !== '' && showNumber.innerHTML == '') {
                showAnswer.innerHTML = firstNum;
                operationShown.innerHTML = '+';
            }
            else {
                operationShown.innerHTML = '+';
                firstNum = Number(showNumber.innerHTML);
                showAnswer.innerHTML = firstNum;
                showNumber.innerHTML = '';
            }
            break;
        case '/':
            if (operationShown.innerHTML !== '' && showNumber.innerHTML.length >= 1) {
                secondNum = Number(showNumber.innerHTML);
                calculate();
            }
            else if (operationShown.innerHTML !== '' && showNumber.innerHTML == '') {
                showAnswer.innerHTML = firstNum;
                operationShown.innerHTML = '/';
            }
            else {
                operationShown.innerHTML = '/';
                firstNum = Number(showNumber.innerHTML);
                showAnswer.innerHTML = firstNum;
                showNumber.innerHTML = '';
            }
            break;
        case '-':
            if (operationShown.innerHTML !== '' && showNumber.innerHTML.length >= 1) {
                secondNum = Number(showNumber.innerHTML);
                calculate();
            }
            else if (operationShown.innerHTML !== '' && showNumber.innerHTML == '') {
                showAnswer.innerHTML = firstNum;
                operationShown.innerHTML = '-';
            }
            else {
                operationShown.innerHTML = '-';
                firstNum = Number(showNumber.innerHTML);
                showAnswer.innerHTML = firstNum;
                showNumber.innerHTML = '';
            }
            break;
        case '*':
            if (operationShown.innerHTML !== '' && showNumber.innerHTML.length >= 1) {
                secondNum = Number(showNumber.innerHTML);
                calculate();
            }
            else if (operationShown.innerHTML !== '' && showNumber.innerHTML == '') {
                showAnswer.innerHTML = firstNum;
                operationShown.innerHTML = '*';
            }
            else {
                operationShown.innerHTML = '*';
                firstNum = Number(showNumber.innerHTML);
                showAnswer.innerHTML = firstNum;
                showNumber.innerHTML = '';
            }
            break;
        case '.':
            if (showNumber.innerHTML.includes('.') == false) {
                showNumber.innerHTML = showNumber.innerHTML + '.'
            } else {
                showNumber.innerHTML = showNumber.innerHTML;
            }
            break;
        default:
            break;
    }
})

function calculate() {
    let result;
    if (operationShown.innerHTML == '+') {
        result = firstNum + secondNum;
        
    }
    else if (operationShown.innerHTML == '-') {
        result = firstNum - secondNum;
    }
    else if (operationShown.innerHTML == '/') {
        result = firstNum / secondNum;
    }
    else if (operationShown.innerHTML == "*") {
        result = firstNum * secondNum;
    }

    firstNum = result;
    showAnswer.innerHTML = result;
    showNumber.innerHTML = '';

}










