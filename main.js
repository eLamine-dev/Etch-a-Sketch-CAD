
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
        button.classList.add('tooltip');
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
        button.classList.add('tooltip');
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
    this.style.backgroundColor = "red";
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
