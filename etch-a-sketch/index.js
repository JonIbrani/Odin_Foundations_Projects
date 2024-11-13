const canvas = document.getElementById('canvas');



const square_height = canvas.clientHeight / 16;
const square_width = canvas.clientWidth / 16;



for(i=0; i<256; i++){
    let square = document.createElement('div');

    square.style.backgroundColor = 'white'
    square.style.width = square_width+'px';
    square.style.height = square_height+'px';
    
    canvas.appendChild(square)
};

