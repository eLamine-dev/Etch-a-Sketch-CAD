
let container = document.getElementById('container');

let canvas = document.getElementById('canvas');
// canvas.style.pointerEvents = 'none';

for (let i = 0; i < 2304; i++) {

    let gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');

    let box = document.createElement('div');
    box.classList.add('box');
    gridItem.appendChild(box);

    
    let gridLineV = document.createElement('div');
    gridLineV.classList.add('gridLineV');
    gridItem.appendChild(gridLineV);
   

    let gridLineH = document.createElement('div');
    gridLineH.classList.add('gridLineH');
    gridItem.appendChild(gridLineH);
    

    let point = document.createElement('div');
    point.classList.add('point');
    gridItem.appendChild(point);

    container.appendChild(gridItem);


    }

    let leftTools = document.getElementById('leftTools');
    let rightTools = document.getElementById('rightTools');



for (let i = 1; i <= 15; i++) {
 
        let button = document.createElement('button');
        button.id = `leftBtn${i}` ;
        button.classList.add('leftTooltip');
        let buttonImg = document.createElement('img')
        buttonImg.classList.add('buttonImg');
        button.appendChild(buttonImg);
        let buttonTip = document.createElement('span');
        buttonTip.classList.add('tooltiptext');
        button.appendChild(buttonTip);

        leftTools.appendChild(button);   
    }

for (let i = 1; i <= 15; i++) {   
        let button = document.createElement('button');
        button.id = `rightBtn${i}` ;
        button.classList.add('rightTooltip');
        let buttonImg = document.createElement('img')
        buttonImg.classList.add('buttonImg');
        button.appendChild(buttonImg);
        let buttonTip = document.createElement('span');
        buttonTip.classList.add('tooltiptext');
        button.appendChild(buttonTip);

        rightTools.appendChild(button); 
    }



function changeBoxColor(e) {
    e.preventDefault();
    let pickedColor = document.getElementById("baseColor").value;
    this.style.backgroundColor = pickedColor;
}

function startPainting(e){
    e.preventDefault();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mousedown', changeBoxColor)); // to paint the first box pressed
    boxes.forEach(box => box.addEventListener('mouseenter', changeBoxColor));
}

function stopPainting(e){
    e.preventDefault();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.removeEventListener('mouseenter', changeBoxColor));
}



document.getElementById('leftBtn1').addEventListener('click', ()=> {
    container.addEventListener('mousedown', startPainting);
    container.addEventListener('mouseup', stopPainting);
})


document.querySelector('#leftBtn1 .buttonImg').src = "./images/brush.png";
document.querySelector('#leftBtn1 .tooltiptext').textContent = "Brush";
document.querySelector('#leftBtn2 .buttonImg').src = "./images/line.png";
document.querySelector('#leftBtn2 .tooltiptext').textContent = "Line";
document.querySelector('#leftBtn3 .buttonImg').src = "./images/rectangle.png";
document.querySelector('#leftBtn3 .tooltiptext').textContent = "Rectangle";
document.querySelector('#leftBtn4 .buttonImg').src = "./images/circle.png";
document.querySelector('#leftBtn4 .tooltiptext').textContent = "Circle";
document.querySelector('#leftBtn5 .buttonImg').src = "./images/ngon.png";
document.querySelector('#leftBtn5 .tooltiptext').textContent = "Ngon";
document.querySelector('#leftBtn6 .buttonImg').src = "./images/arc.png";
document.querySelector('#leftBtn6 .tooltiptext').textContent = "Arc";

document.querySelector('#rightBtn1 .buttonImg').src = "./images/wall.png";
document.querySelector('#rightBtn1 .tooltiptext').textContent = "Wall";


document.querySelector('#rightBtn2 .buttonImg').src = "./images/door.png";
document.querySelector('#rightBtn2 .tooltiptext').textContent = "Door";


























    //     let squares = document.querySelectorAll('.gridItem');

    //     function changeColor(target)  { target.firstChild.style.backgroundColor = "red"; };

    //     squares.forEach(gridItem => { 
            
    //     gridItem.addEventListener('mousedown', (evt)=> {
    //             evt.preventDefault();
    //             squares.forEach(gridItem => {
    //                 gridItem.addEventListener('mouseover',(evt) => {
                       
    //                     changeColor(gridItem)

    //                 })
                   
    //             })
       
    //         })
    //     });
    // })
    

    // container.addEventListener('mouseup', (evt)=> {
    //     evt.preventDefault();
    //     squares.forEach(gridItem => {
    //         gridItem.removeEventListener('mouseover', () => changeColor(gridItem))
    // });
  
    // }) 
