const drawingArea = document.querySelector('.drawingArea');


makeGrid(16, 16);
draw();

function makeGrid(rows, columns){
    document.documentElement.style.setProperty("--grid-rows", rows);
    document.documentElement.style.setProperty("--grid-columns", columns);
    for (let i = 0; i < rows * columns; i++){
        const gridCreator = document.createElement("div");
        drawingArea.appendChild(gridCreator);
        gridCreator.classList.add("drawingGrid");
    }
}


function draw(){
    const dot = document.querySelectorAll(".drawingGrid");
    dot.forEach(pixel => {
        pixel.addEventListener("mouseover", function(){
            pixel.classList.add("draw");
        })
    })
}