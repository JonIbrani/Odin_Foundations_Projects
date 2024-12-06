const operators_container = document.getElementById('operators');
const number_container = document.getElementById('numbers');
const calculator_nav = document.getElementById('calculator_nav');


numbers_list = [1,2,3,4,5,6,7,8,9,0];
operators = ['+','-','*','/'];

//Operator buttons
for(i=0;i<4;i++){
    const operator_bt = document.createElement('button');
    operator_bt.textContent = operators[i]
    operator_bt.style.backgroundColor = '#f419ff';
    operator_bt.style.width = "60px";
    operator_bt.style.height = "60px";
    operator_bt.style.borderRadius = "50px";
    operator_bt.classList.add('operator_b')
    operators_container.appendChild(operator_bt);
    
}

//Decimal button
const operator_dot = document.createElement('button');
operator_dot.textContent = ".";
operator_dot.style.backgroundColor = '#f419ff';
operator_dot.style.width = "60px";
operator_dot.style.height = "60px";
operator_dot.style.borderRadius = "50px";
operator_dot.id = "decimal_bt";
operators_container.appendChild(operator_dot);


//Numbers button
for(i=0;i<10;i++){
    const number_button = document.createElement('button');
    number_button.textContent = numbers_list[i]
    number_button.style.backgroundColor = 'aqua';
    number_button.style.width = "75px";
    number_button.style.height = "75px";
    number_button.style.borderRadius = "50px";
    number_button.classList.add('numbers_b');
    number_container.appendChild(number_button);
}



//Function Implementation


 
document.addEventListener("DOMContentLoaded", function(){
    let numbers = document.querySelectorAll('.numbers_b');
    let operator = document.querySelectorAll('.operator_b');
    let clear = document.querySelector('clear_bt');
    let equal = document.querySelector('equal_bt');
    let decimal = document.querySelector('decimal_bt');
})


