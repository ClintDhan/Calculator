let showNumber = document.querySelector('.show');
let showNumber2 = document.querySelector('.showSecond');
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

document.querySelector('.dot').addEventListener("click", function(){
    if(showNumber.innerHTML.includes('.') == false){
        showNumber.innerHTML = showNumber.innerHTML + '.'
    } else {
        showNumber.innerHTML = showNumber.innerHTML;
    }
})
document.querySelector('.clear').addEventListener("click", function () {
    showNumber.innerHTML = '';
    showNumber2.innerHTML = '';
    document.querySelector('.operation').innerHTML = '';
})

document.querySelector('.delete').addEventListener("click", function () {
    var newNumber = showNumber.innerHTML.slice(0, -1);
    showNumber.innerHTML = newNumber;
    console.log(newNumber);
});
document.querySelector('.multiply').addEventListener("click", function () {
    operationShown.innerHTML = 'X';
    firstNum = showNumber.innerHTML;
    showNumber.innerHTML = '';


});
document.querySelector('.add').addEventListener("click", function () {
    operationShown.innerHTML = '+';
    firstNum = showNumber.innerHTML;
    firstNum = Number(firstNum);
    showNumber.innerHTML = '';
})

document.querySelector('.subtract').addEventListener("click", function () {
    operationShown.innerHTML = '-';
    firstNum = showNumber.innerHTML;
    firstNum = Number(firstNum);
    showNumber.innerHTML = '';
})

document.querySelector('.divide').addEventListener("click", function () {
    operationShown.innerHTML = '/';
    firstNum = showNumber.innerHTML;
    firstNum = Number(firstNum);
    showNumber.innerHTML = '';
})

document.querySelector('.last').addEventListener("click", function () {
    secondNum = showNumber.innerHTML;
    secondNum = Number(secondNum);
    showNumber.innerHTML = Number(showNumber.innerHTML);
    if (operationShown.innerHTML == 'X') {
        showNumber.innerHTML = firstNum * secondNum;
    }
    else if (operationShown.innerHTML == '+') {
        showNumber.innerHTML = firstNum + secondNum;
    }
    else if (operationShown.innerHTML == '-') {
        showNumber.innerHTML = firstNum - secondNum;
    }
    else if (operationShown.innerHTML == '/') {
        showNumber.innerHTML = firstNum / secondNum;
    }
    else{
        showNumber.innerHTML = 'Insufficient input';
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
        case '+':
            operationShown.innerHTML = '+';
            firstNum = showNumber.innerHTML;
            firstNum = Number(firstNum);
            showNumber.innerHTML = '';
            break;
        case '/':
            operationShown.innerHTML = '/';
            firstNum = showNumber.innerHTML;
            firstNum = Number(firstNum);
            showNumber.innerHTML = '';
            break;
        case '-':
            operationShown.innerHTML = '-';
            firstNum = showNumber.innerHTML;
            firstNum = Number(firstNum);
            showNumber.innerHTML = '';
            break;
        case '*':
            operationShown.innerHTML = 'X';
            firstNum = showNumber.innerHTML;
            showNumber.innerHTML = '';
            break;
        default:
            break;
    }
})







