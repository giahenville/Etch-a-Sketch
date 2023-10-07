const gridContainer = document.getElementById("gridContainer");
const penBtn = document.getElementById("penBtn"); //works but set default color to black
const shadingBtn = document.getElementById("shadingBtn"); 
const colorfulBtn = document.getElementById("colorfulBtn"); 
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn =  document.getElementById("clearBtn");
const gridSizeBtn = document.getElementById("gridSizeBtn");
const buttonsContainer = document.getElementById("buttonsContainer");


function calcGridCellSize(size){
    return 700 / size + "px";
}

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
//default 16*16 grid size
createCells(16);


penBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            //attaches color picker
            const colorPicker = document.getElementById("colorPicker");
            const selectedColor = colorPicker.value;
            cell.style.backgroundColor = selectedColor;
        });
    });
});


shadingBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
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


function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

colorfulBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            let R = getRandomNum(0, 255);
            let G = getRandomNum(0, 255);
            let B = getRandomNum(0, 255);
            cell.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        });
    });
});


eraserBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = null;
        });
    });
});


clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = null;
        }); 
});



