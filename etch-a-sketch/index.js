const canvas = document.getElementById('canvas');





const square_height = canvas.clientHeight / 16;
const square_width = canvas.clientWidth / 16;







for(i=0; i<256; i++){
    const square = document.createElement('div');

    square.style.backgroundColor = 'white'
    square.style.width = square_width+'px';
    square.style.height = square_height+'px';
    
    canvas.appendChild(square);
}



const square = canvas.querySelectorAll('div');
const colors = ['red','blue','aquamarine','aqua','orange','yellow','purpleviolet',"chartreuse","coral","crimson",'cornflowerblue','darkviolet','deeppink']


function changeColor(process){
    let color = Math.floor(Math.random() * colors.length);
    process.target.style.backgroundColor = colors[color];
}


square.forEach(square =>{
    square.addEventListener('mouseover',changeColor);
})




function Reset(){
    let user_square_prompt = prompt("Enter how many pixels for row you want on the canvas:");
    const user_square_height = canvas.clientHeight / user_square_prompt
    const user_square_width = canvas.clientWidth / user_square_prompt



    const divs = canvas.querySelectorAll('div');
    divs.forEach(divs => canvas.removeChild(divs));

    for(let i=0;i< user_square_prompt*user_square_prompt; i++){
        const user_square = document.createElement('div');

        user_square.style.width = user_square_width+"px";
        user_square.style.height = user_square_height+"px";
        user_square.style.backgroundColor = 'white';
        canvas.appendChild(user_square);


        user_square.addEventListener('mouseover', changeColor);
        canvas.appendChild(user_square);


    }

   
}