const drawingArea = document.querySelector('.drawingArea');


makeGrid(16, 16);
draw();

document.querySelector(".clearAll").addEventListener("click", () => {
    clearSketch();
    changeBrush(1);
  });

document.querySelector(".newSketch").addEventListener("click", () => {
    const sketchPad = document.querySelector(".drawingArea");
    sketchPad.removeChild(document.querySelector(".drawingGrid"));
    makeGrid(prompt("How many pixels would you like on each side?"));
    clearSketch();
    changeBrush(1);
});

document.querySelector(".blackBtn").addEventListener("click", () => {
    changeBrush(1);
  });

document.querySelector(".colorBtn").addEventListener("click", () => {
    changeBrush(2);
  });

document.querySelector(".shaderBtn").addEventListener("click", () => {
    changeBrush(3);
  });


function makeGrid(boxes){
    document.documentElement.style.setProperty("--grid-rows", boxes);
    document.documentElement.style.setProperty("--grid-columns", boxes);
    for (let i = 0; i < boxes * boxes; i++){
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

function clearSketch() {
    const pixels = document.querySelectorAll(".drawingGrid");
    pixels.forEach(pixel => {
      pixel.style.background = "rgb(222, 222, 224)";
      pixel.style.opacity = 1;
    });
  }

function newSketch() {}

function drawColor() {
    this.style.backgroundColor = randomColor();
  }

function drawBlack() {
    this.style.backgroundColor = "black";
    this.style.opacity = 1;
  }

function drawShader() {
    let opacity = Number(this.style.opacity);
    if (this.style.backgroundColor !== "black") {
      this.style.opacity = 0.2;
      this.style.backgroundColor = "black";
    }
    if (opacity < 1) {
      this.style.opacity = opacity + 0.2;
    }
  }

  function randomNumber() {
    return Math.round(Math.random() * 255);
  }
  
  function randomColor() {
    return (
      "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")"
    );
  }
  
  function changeBrush(brushType) {
    const pixels = document.querySelectorAll(".drawingGrid");
    pixels.forEach(pixel => {
      pixel.removeEventListener("mouseover", drawBlack);
      pixel.removeEventListener("mouseover", drawColor);
      pixel.removeEventListener("mouseover", drawShader);
      switch (brushType) {
        case 1:
          pixel.addEventListener("mouseover", drawBlack);
          break;
        case 2:
          pixel.addEventListener("mouseover", drawColor);
          break;
        case 3:
          pixel.addEventListener("mouseover", drawShader);
          break;
        default:
          pixel.addEventListener("mouseover", drawBlack);
          return;
          break;
      }
    });
  }