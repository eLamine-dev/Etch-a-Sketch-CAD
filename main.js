
let container = document.getElementById('container');

let canvas = document.getElementById('canvas');
// canvas.style.pointerEvents = 'none';

for (let i = 0; i < 2304; i++) {

    let square = document.createElement('div');
    square.classList.add('square');

    let box = document.createElement('div');
    box.classList.add('box');
    square.appendChild(box);

    
    let gridLineV = document.createElement('div');
    gridLineV.classList.add('gridLineV');
    square.appendChild(gridLineV);
    gridLineV.addEventListener('click', ()=>{ square.style.gridTemplateColumns = 'auto 20%'; 
                                              gridLineV.style.backgroundColor = 'red'})

    let gridLineH = document.createElement('div');
    gridLineH.classList.add('gridLineH');
    square.appendChild(gridLineH);
    

    let point = document.createElement('div');
    point.classList.add('point');
    square.appendChild(point);

    container.appendChild(square);


    }


    // square.addEventListener('click', ()=>{

    //     square.style.gridTemplateColumns = 'auto 20%';


    // }) 

    




    









