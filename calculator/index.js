const operators_container = document.getElementById('operators');
const number_container = document.getElementById('numbers');



for(i=0;i<5;i++){
    const operator_bt = document.createElement('button');
    operator_bt.style.backgroundColor = '#f419ff';
    operator_bt.style.width = "60px";
    operator_bt.style.height = "60px";
    operator_bt.style.borderRadius = "50px";

    operators_container.appendChild(operator_bt);
    
}


for(i=0;i<10;i++){
    const number_button = document.createElement('button');
    number_button.style.backgroundColor = 'aqua';
    number_button.style.width = "75px";
    number_button.style.height = "75px";
    number_button.style.borderRadius = "50px";

    number_container.appendChild(number_button);
    
}