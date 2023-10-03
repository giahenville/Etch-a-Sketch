const gridContainer = document.getElementById("gridContainer");
const penBtn = document.createElement("button");
const shadingBtn = document.createElement("button");
const rgbBtn = document.createElement("button");
const buttonsContainer = document.getElementById("buttonsContainer");


function createCells(size){
    gridContainer.style.setProperty("--grid-rows", size);
    gridContainer.style.setProperty("--grid-cols", size);

    //makes sure that grid size is always 700px
    gridContainer.style.setProperty("--grid-cell-size", calcGridCellSize(size));

    for(let i = 0; i < (size * size); i++){
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).classList.add("cell");
    };
};
createCells(16);

function calcGridCellSize(size){
    return 700 / size + "px";
}

function createShadingColor(){
    const cells = document.querySelectorAll(".cell");
    shadingBtn.textContent = "Gray";
    shadingBtn.addEventListener("click", () => {
        cells.forEach(cell => {
            // Initialize lightness to 100 (full brightness)
            let lightness = 100;

            cell.addEventListener("mouseover", () => {
                // Decrease lightness with each mouseover
                lightness -= 10;
                // Limit the lightness to a minimum value to prevent going completely black
                lightness = Math.max(lightness, 15);
                // Apply the new background color with updated lightness
                cell.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
            });
        });
    });
    buttonsContainer.appendChild(shadingBtn).classList.add('btn');
}
createShadingColor();