const gridContainer = document.getElementById("gridContainer");
const blackBtn = document.createElement("button");
const shadingBtn = document.createElement("button");
const rgbBtn = document.createElement("button");
const buttonsContainer = document.querySelector("buttonsContainer");


function createCells(size){
    gridContainer.style.setProperty("--grid-rows", size);
    gridContainer.style.setProperty("--grid-cols", size);

    //makes sure that grid size is always 700px
    gridContainer.style.setProperty("--grid-cell-size", getGridCellSize(size));

    for(let i = 0; i < (size * size); i++){
        let cell = document.createElement("div");
        cell.innerText = i + 1;
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
    };
};
createCells(16);

function getGridCellSize(size){
    return 700 / size + "px";
}