let size = 30

function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++) {        
        const square = document.createElement("square"); 
        square.classList.add("box");
        document.getElementById("row").appendChild(square);
    }

    for(let i = 0; i < gridSize; i++){
    const p = document.getElementById("row")
    const clone = p.cloneNode(true);
    document.getElementById("column").appendChild(clone);
    }

    const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseover", function handleClick(event) {
        box.style.backgroundColor = "black";
    })
})
}

createGrid(size); //starting grid



function changeGrid(){  //function to create new grid when "change grid" button is clicked
    const gones = document.querySelectorAll(".box"); //remove all empty boxes
    gones.forEach(box => {
        box.remove();
    })
    const goned = document.querySelectorAll(".hover"); //remove all hovered boxes
    goned.forEach(hover => {
        hover.remove();
    })

    size = prompt("Enter Grid Size (Max. 100)")
    while (isNaN(size) || size < 0 || size > 100) {
        size = prompt("Invalid number! please enter a number between 0 and 100")
    }
    
    
    createGrid(size); 
}
