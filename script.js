let columns = 16 //height
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

    const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseover", function handleClick(event) {
        box.setAttribute ("class", "hover")
    })
})
}

createGrid(columns,rows); //starting grid



function changeGrid(){  //function to create new grid when "change grid" button is clicked
    const gones = document.querySelectorAll(".box"); //remove all empty boxes
    gones.forEach(box => {
        box.remove();
    })
    const goned = document.querySelectorAll(".hover"); //remove all hovered boxes
    goned.forEach(hover => {
        hover.remove();
    })

    columns = prompt("Height (Max. 100)")
    rows = prompt("Width (Max. 100)")
    createGrid(columns,rows); 
}
