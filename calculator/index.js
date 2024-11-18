const operators_container = document.getElementById('operators');
const number_container = document.getElementById('numbers');
numbers = [1,2,3,4,5,6,7,8,9,0];
operators = ['+','-','*','/','.'];




function number_picker(number){

    switch (number){
        case 1:
            return 1;
            break;
        case 2:
            return 2;
            break;
        case 3:
            return 3;
            break;
        case 4:
            return 4;
            break;
        case 5:
            return 5;
            break;
        case 6:
            return 6;
            break;
        case 7:
            return 7;
            break;
        case 8:
            return 8;
            break;
        case 9:
            return 9;
            break;
        case 0:
            return 0;
            break;
    }

}







for(i=0;i<5;i++){


    const operator_bt = document.createElement('button');
    operator_bt.textContent = operators[i]
    operator_bt.style.backgroundColor = '#f419ff';
    operator_bt.style.width = "60px";
    operator_bt.style.height = "60px";
    operator_bt.style.borderRadius = "50px";

    operators_container.appendChild(operator_bt);
    
}


for(i=0;i<10;i++){
    
    

    const number_button = document.createElement('button');
    number_button.textContent = numbers[i]
    number_button.style.backgroundColor = 'aqua';
    number_button.style.width = "75px";
    number_button.style.height = "75px";
    number_button.style.borderRadius = "50px";


    number_button.addEventListener('click', function(){
        number_picker(numbers[i])
    })
    number_container.appendChild(number_button);
    
}


// const zero_bt = document.createElement('button');
// zero_bt.style.backgroundColor = 'aqua';
// zero_bt.style.width = "75px";
// zero_bt.style.height = "75px";
// zero_bt.style.borderRadius = "50px";
// number_container.appendChild(zero_bt);


