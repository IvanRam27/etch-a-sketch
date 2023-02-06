let columns = 16  //height
let rows = 16     //width

function createGrid(height,width){
    for (let i = 0; i < width; i++) {        
        const square = document.createElement("square");
        square.classList.add("box");
        document.getElementById("row").appendChild(square);
    }

    for(let i = 0; i < height; i++){
    const p = document.getElementById("row")
    const clone = p.cloneNode(true);
    document.getElementById("column").appendChild(clone);
    }
}

createGrid(columns,rows);


