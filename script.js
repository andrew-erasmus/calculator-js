//Button click handler
let eqn = '';

let buttons = document.querySelectorAll('button');
buttons = Array.from(buttons);

let clearBtn = document.getElementById("ac-button");



buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        eqn += e.target.innerHTML;
        console.log(eqn);
        
    });
});

clearBtn.onclick = () => {
    eqn = '';
    console.log(eqn);
};

