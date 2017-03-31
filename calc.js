"use strict";

var input = document.getElementById('field'),
    numbers = document.getElementsByName('number'),
    operators = document.getElementsByName('operator'),
    result = document.getElementById('equal'),
    dot = document.getElementById('dot'),
    zero = document.getElementById('zero'),
    clear = document.getElementById('clear'),
    resultDisplayed = true;



//Функция вычисления

function answer() {
    resultDisplayed = true;
    var answer = '',
        string = input.innerHTML,
        arr = string.split(/\s\+|\s\-|\s\*|\s\//),
        num1 = arr[0],
        num2 = arr[1];
    if(/\s\+/.test(string)) {
       answer = +num1 + +num2;
       input.innerHTML = answer;
    } else if(/\s\-/.test(string)) {
       answer = +num1 - +num2;
       input.innerHTML = answer;
    } else if(/\s\*/.test(string)) {
       answer = +num1 * +num2;
       input.innerHTML = answer;
    } else if(/\s\//.test(string)) {
        if(num2 === " 0") {
            answer = "Неверное выражение";
            input.innerHTML = answer;
        } else {
            answer = +num1 / +num2;
            input.innerHTML = answer;
               }
                                   }
               };

// Функции ниже проверяют состояние строки

function numberCheck() {
    var string = input.innerHTML;
    if(/\s\+|\s\-|\s\*|\s\//.test(string)) {
        var arr = string.split(/\s\+|\s\-|\s\*|\s\//),
            num1 = arr[0],
            num2 = arr[1];
        if(num2[1] === '0' && num2[2] !== '.') {
            return false;
        } else if(num2.length === 16) {
            return false;
        } else {
            return true;
        }
    } else {
        if(string[0] === '0' && string[1] !== '.' && resultDisplayed === false) {
            return false;
        } else if(string.length === 16) {
            return false;
        } else {
            return true;
        }
    }
};


function zeroCheck() {
    var string = input.innerHTML;
    if(/\+|\-|\*|\//.test(string)) {
        var arr = string.split(/\+|\-|\*|\//),
            num1 = arr[0],
            num2 = arr[1];
        if(num2[0] == 0 && string.length === 2) {
            return false;
        } else if(num2.length === 16) {
            return false;
        } else {
            return true;
        }
    } else {
        if(string[0] == 0 && string.length === 1) {
            return false;
        } else if(string.length === 16) {
            return false;
        } else {
            return true;
        }
    }
};
    

function dotCheck() {
    var string = input.innerHTML;
    if(/\+|\-|\*|\//.test(string)) {
        var arr = string.split(/\+|\-|\*|\//),
            num1 = arr[0],        
            num2 = arr[1];
        if(/\./.test(num2)) {
            return false;
        } else { 
            return true;
               }
    } else {
        if(/\./.test(string)) {
            return false;
        } else { 
            return true;
               }
            }
                    };

function operCheck() {
    var string = input.innerHTML;
    if(/\s\+|\s\-|\s\*|\s\//.test(string)) {
        return false;   
    } else {
        if(string === '') {
            return false;
        } else { 
            return true;
               }
            }
                    };

/*
Функции ниже выполняют действия в зависимости от
возвращенных значений проверочных функциий
 */

function addNumber(element) {
    if(numberCheck() && resultDisplayed) {
        input.innerHTML = element.value;
        resultDisplayed = false;
    } else if(numberCheck() && !resultDisplayed) {
        input.innerHTML = input.innerHTML += element.value;
        return false;
    }
};


function addZero() {
    if(zeroCheck()) {
        resultDisplayed = false;
        input.innerHTML = input.innerHTML += zero.value;
    } else {
        return false;
    }
};

function addOperator(element) {
    if(operCheck()) {
        resultDisplayed = false;
        input.innerHTML = input.innerHTML += element.value;
    } else {
        answer();
        resultDisplayed = false;
        input.innerHTML = input.innerHTML += element.value;
    }
}


function addDot() {
    resultDisplayed = false;
    if(dotCheck()) {
        input.innerHTML = input.innerHTML += dot.value;
    } else {
        return false;
    }
}





//обработчики кнопок
    
numbers.forEach (function(item, i) {
    numbers[i].onclick = function () {
    if(numberCheck() && resultDisplayed) {
        input.innerHTML = numbers[i].value;
        resultDisplayed = false;
    } else if(numberCheck() && !resultDisplayed) {
        input.innerHTML = input.innerHTML += numbers[i].value;
        return false;
    }
  }
});


zero.onclick = addZero;


operators.forEach (function(item, i) {
    operators[i].onclick = function () {
        if(operCheck()) {
            resultDisplayed = false;
            input.innerHTML = input.innerHTML += operators[i].value;
        } else {
            answer();
            resultDisplayed = false;
            input.innerHTML = input.innerHTML += operators[i].value;
        }
    }
});


dot.onclick = addDot;


result.onclick = answer;


clear.onclick = function() {
    input.innerHTML = '0';
    resultDisplayed = true;
        };




//привязка клавиш

document.addEventListener('keydown', function(e) {
    var str = input.innerHTML;
    if(e.keyCode === 8 && str.length !== 1) {
        input.innerHTML = str.substring(0, str.length - 1);
    } else if(e.keyCode === 8 && str.length === 1) {
        input.innerHTML = 0;
        resultDisplayed = true;
    }
});

document.addEventListener('keypress', function(e) {
    if(e.charCode === 49) {
        addNumber(numbers[0]);
    } else if(e.charCode === 50) {
        addNumber(numbers[1]);
    } else if(e.charCode === 51) {
        addNumber(numbers[2]);
    } else if(e.charCode === 52) {
        addNumber(numbers[3]);
    } else if(e.charCode === 53) {
        addNumber(numbers[4]);
    } else if(e.charCode === 54) {
        addNumber(numbers[5]);
    } else if(e.charCode === 55) {
        addNumber(numbers[6]);
    } else if(e.charCode === 56) {
        addNumber(numbers[7]);
    } else if(e.charCode === 57) {
        addNumber(numbers[8]);
    } else if(e.charCode === 43) {
        addOperator(operators[0]);
    } else if(e.charCode === 45) {
        addOperator(operators[1]);
    } else if(e.charCode === 42) {
        addOperator(operators[2]);
    } else if(e.charCode === 47) {
        addOperator(operators[3]);
    } else if(e.charCode === 48) {
        addZero();
    } else if(e.charCode === 46) {
        addDot();
    } else if(e.charCode === 61) {
        answer();
    } else {
        return false;
    }
});






