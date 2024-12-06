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

let current_value = '';
let previous_value = '';
let operator_value = '';
 
document.addEventListener("DOMContentLoaded", function(){
    let numbers = document.querySelectorAll('.numbers_b');
    let operator = document.querySelectorAll('.operator_b');
    let clear = document.querySelector('#clear_bt');
    let equal = document.querySelector('#equal_bt');
    let decimal = document.querySelector('#decimal_bt');
    let current_number = document.querySelector('#current_number');
    let previous_number = document.querySelector('#previous_number');

    numbers.forEach((numbers_b) => numbers_b.addEventListener('click', function(e){
        handlenum(e.target.textContent);
        current_number.textContent = current_value;
    }))


    operator.forEach((operator_b) => operator_b.addEventListener('click',function(e){
        handleoperator(e.target.textContent);
        previous_number.textContent = current_number.textContent + " " + operator_value;
        current_number.textContent = current_value;

    }))

    clear.addEventListener("click", function(){
        operator_value = "";
        current_value = "";
        previous_value = "";
        
        current_number.textContent = current_value;
        previous_number.textContent = previous_value;
    })

    equal.addEventListener("click", function(){
        calculate();
        previous_number.textContent = "";
        current_number.textContent = previous_value;

    })

    decimal.addEventListener("click",function(){
        add_decimal();
    })
})


function handlenum(num){
    if(current_value.length<=4){
        current_value += num;
    }
}

function handleoperator(operator){
    operator_value = operator;
    previous_value = current_value;
    current_value = ""
}

function calculate(){
    current_value = Number(current_value);
    previous_value = Number(previous_value);

    if (operator_value == "+"){
        previous_value += current_value;
    } else if (operator_value == "-"){
        previous_value -= current_value;
    } else if (operator_value == "*"){
        previous_value *= current_value;
    } else{
        previous_value /= current_value;
    }


    current_value = current_value.toString();
    previous_value = previous_value.toString();
}

function add_decimal(){
    if(!current_value.includes(".")){
        current_value += ".";
    }
}