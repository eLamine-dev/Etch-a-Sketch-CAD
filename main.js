// setting-up the grid
let container = document.getElementById('container');
window.addEventListener('load', ()=> {
    updateGridSizes();
    setGrid();
    setupGridLines()
})

function setGrid() {

    container.textContent = '';  
    container.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridRows}, 1fr)` ;
    
    for (let i = 0; i < gridItemsCount; i++) {

        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
    
        let box = document.createElement('div');
        box.classList.add('box');
        gridItem.appendChild(box);
    
        container.appendChild(gridItem);   
    }
}

// Grid size slider 
let gridSizeInput = document.getElementById('gridSizeSlider') ;

gridSizeInput.addEventListener('input', ()=> {
    updateGridSizes();
    setGrid();
    setupGridLines()
})

function updateGridSizes(){

    if (gridSizeInput.value === "1") {
        gridColumns = 128;
        gridRows = 64;
        
    } else if (gridSizeInput.value === "2") {
        gridColumns = 64;
        gridRows = 32;
        
    } else if (gridSizeInput.value === "3") {
        gridColumns = 32;
        gridRows = 16;
    }
    gridItemsCount = gridColumns*gridRows;
}

// Grid lines switch
let gridLineOption = document.getElementById('gridLines');
gridLineOption.oninput = setupGridLines ;

function setupGridLines() {
    if (gridLineOption.checked === false){
        container.style.gap = '0px';  
    } else if (gridLineOption.checked === true) {
        container.style.gap = '1px';  
    }
}
// Clear Grid
let gridRefresh = document.getElementById('refreshGrid');
gridRefresh.addEventListener('click', setGrid );

// Left and right tools buttons
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

// Grid items coloring functions
let currentTool = '';

function changeBoxColor(e) {
    e.preventDefault();
    let pickedColor = document.getElementById("baseColor").value;
    let randomColorOption = document.getElementById("randomColor");
    let randomShadesOption = document.getElementById("randomShades");

    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    let randomOpacity = Math.round(Math.random() * 100) / 100;
    
    if (currentTool === 'colorBrush') {
        if (randomColorOption.checked === true && randomShadesOption.checked === true ) {
            this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})` ;
            this.style.opacity = `${randomOpacity}`
            
        } else if (randomColorOption.checked === true && randomShadesOption.checked === false ) { 
            this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            this.style.opacity = `1` ;
    
        } else if (randomColorOption.checked === false && randomShadesOption.checked === true )  {
            this.style.backgroundColor = pickedColor;
            this.style.opacity = `${randomOpacity}` ;
    
        } else {
            this.style.backgroundColor = pickedColor;
        }
    } else if (currentTool === 'colorEraser') {
        this.style.backgroundColor = "#ffffff";
    }
}

function startPainting(e){
    e.preventDefault();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mousedown', changeBoxColor)); // to paint the first box pressed
    boxes.forEach(box => box.addEventListener('mouseenter', changeBoxColor));
}

function stopPainting(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.removeEventListener('mouseenter', changeBoxColor));
}

function paint() {
    container.addEventListener('mousedown', startPainting);
    window.addEventListener('mouseup', stopPainting);
}

// coloring brush tool
document.getElementById('leftBtn1').addEventListener('click', ()=> {
    currentTool = 'colorBrush';
    paint();  
})

// Eraser tool
document.getElementById('rightBtn1').addEventListener('click', ()=> {
    currentTool = 'colorEraser';
    paint();   
})



//tools images
document.querySelector('#leftBtn1').style.backgroundImage = "url(./images/brush.png)";
document.querySelector('#leftBtn1 .tooltiptext').textContent = "Brush";
document.querySelector('#leftBtn2').style.backgroundImage = "url(./images/line.png)";
document.querySelector('#leftBtn2 .tooltiptext').textContent = "Line";
document.querySelector('#leftBtn3').style.backgroundImage = "url(./images/rectangle.png)";
document.querySelector('#leftBtn3 .tooltiptext').textContent = "Rectangle";
document.querySelector('#leftBtn4').style.backgroundImage = "url(./images/circle.png)";
document.querySelector('#leftBtn4 .tooltiptext').textContent = "Circle";
document.querySelector('#leftBtn5').style.backgroundImage = "url(./images/ngon.png)";
document.querySelector('#leftBtn5 .tooltiptext').textContent = "Ngon";
document.querySelector('#leftBtn6').style.backgroundImage = "url(./images/arc.png)";
document.querySelector('#leftBtn6 .tooltiptext').textContent = "Arc";

document.querySelector('#rightBtn1').style.backgroundImage = "url(./images/erase.png)";
document.querySelector('#rightBtn1 .tooltiptext').textContent = "Erase";


document.querySelector('#leftBtn1').style.backgroundImage = "url(./images/brush.png)";
document.querySelector('#leftBtn1 .tooltiptext').textContent = "Brush";



























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
