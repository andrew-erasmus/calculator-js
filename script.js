let equals = document.getElementById('equals');
let eqnArr = [];
let eqn = '';
let deleteBtn = document.getElementById("delete");
let clearBtn = document.getElementById("ac-button");
let display = document.getElementById('equation');
let buttons = document.querySelectorAll('button');
buttons = Array.from(buttons);
display.style.fontSize = '40px';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML != '=' && e.target.innerHTML != 'Del') {
            eqn += e.target.innerHTML;
            updateDisplay(eqn)
            console.log(eqn);
        }
    });
});

clearBtn.onclick = () => {
    eqn = '';
    updateDisplay(eqn)
    console.log(eqn);
};

equals.onclick = () => {
    eqn = String(display.innerHTML);
}

deleteBtn.onclick = () => {
    eqn = eqn.slice(0, eqn.length - 1);
    updateDisplay(eqn)
}

function updateDisplay(eqn) {
    display.innerHTML = eqn;
}


// FIX ISSUE WHERE A POINT IS NOT INCLUDED FOR THE DOUBLES
// function toArray(equation) {
//     let num = '';
//     for (let i = 0; i < equation.length; i++) {
//         if (isNaN(parseInt(equation.charAt(i)))) {
//             eqnArr.push(equation.charAt(i));
//         } else {
//             let j = i;
//             let found = false;
//             while (found === false) {
//                 if (isNaN(parseInt(equation.charAt(j)))) {
//                     found = true;
//                     num = parseInt(num);
//                     eqnArr.push(num);
//                     num = '';
//                     i = j - 1;
//                     break;
//                 }
//                 num += String(equation.charAt(j));
//                 j++;
//             }
//         }
//     } console.log(eqnArr);
//     return eqnArr;
// }

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '\u00D7':
            multiply(a, b);
            break;
        case '\u00F7':
            divide(a,b);
            break;
        case '\u002B':
            add(a,b);
            break;
        case '\u2212':
            subtract(a,b);
            break;
    }
}


function setAnswer(answer) {
    display.innerHTML = answer;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
