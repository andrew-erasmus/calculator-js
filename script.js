let equals = document.getElementById('equals');
let eqnArr = [];
let eqn='';
let clearBtn = document.getElementById("ac-button");
let display = document.getElementById('equation');
let buttons = document.querySelectorAll('button');

buttons = Array.from(buttons);
display.style.fontSize = '40px';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML != '='){
        eqn += e.target.innerHTML;
        display.innerHTML = eqn;
        console.log(eqn);
        }
    });
});

clearBtn.onclick = () => {
    eqn = '';
    display.innerHTML = eqn;
    console.log(eqn);
};

equals.onclick = () => {
    eqn = String(display.innerHTML);
    eqnArr = toArray(eqn);
}

function toArray(equation) {
    let num = '';
    for (let i = 0; i < equation.length; i++) {
        if (isNaN(parseInt(equation.charAt(i)))) {
            eqnArr.push(equation.charAt(i));
        } else {
            let j = i;
            let found = false;
            while (found === false) {
                console.log(parseInt(equation.charAt(j)));
                if (isNaN(parseInt(equation.charAt(j)))) {
                    found = true;
                    num = parseInt(num);
                    eqnArr.push(num);
                    num='';
                    i = j - 1;
                    break;
                }
                num += String(equation.charAt(j));
                j++;
            }
        }
    }
    return eqnArr;
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
