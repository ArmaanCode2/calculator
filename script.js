const controllDv = document.querySelector('.controls');
const equalBtn = document.querySelector('.equal');
const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('.ac');
const deleteBtn = document.querySelector('.delete');

controllDv.querySelectorAll('button').forEach(btn=>{
    btn.onclick = function(){showNumber(btn.value);}
})

equalBtn.addEventListener('click',() => {
    getResult(screen.innerHTML);
})

clearBtn.addEventListener('click',()=>{
    screen.innerHTML = '';
});

deleteBtn.addEventListener("click",()=>{
    const string = screen.innerHTML;
    const result = string.slice(0,-1);
    screen.innerHTML = result;
})

function showNumber(number){
    let input = number;
    screen.innerHTML += input;
}

function getResult(equation){
    let result = eval(equation);
    screen.innerHTML = result;
}