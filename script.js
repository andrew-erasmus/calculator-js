//Button click handler
let eqn = '';
let buttons = document.querySelectorAll('button');
buttons = Array.from(buttons);

let clearBtn = document.getElementById("ac-button");
let display = document.getElementById('equation');
display.style.fontSize = '40px';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        eqn += e.target.innerHTML;
        display.innerHTML = eqn;
        console.log(eqn);
        
    });
});

clearBtn.onclick = () => {
    eqn = '';
    display.innerHTML = eqn;
    console.log(eqn);
};

