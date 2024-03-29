let size = 30

function createGrid(gridSize){

    for (let i = 0; i < gridSize; i++) {        //append boxes to first row
        const square = document.createElement("div"); 
        square.classList.add("box");
        document.getElementById("row").appendChild(square);
    }
    
    for(let i= 1; i < gridSize; i++){

        const row = document.createElement("div") //append empty rows to fill with boxes
        row.id = "row";
        document.getElementById("column").prepend(row)
    
    for (let i = 0; i < gridSize; i++) {        //append boxes to columns
        const square = document.createElement("div"); 
        square.classList.add("box");
        document.getElementById("row").appendChild(square);
    }


    }

    let isMouseDown = false;

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
    box.addEventListener("mousedown", function handleClick() { // add event listeners to change box color
        isMouseDown = true; 
        box.style.backgroundColor = "black";
    });

    box.addEventListener("mouseover", function mouseOver(){
        if(isMouseDown){
        box.style.backgroundColor = "black";
        }   
        });
    box.addEventListener("mouseup", function(){
        isMouseDown = false;
    });
    
    })
}

createGrid(size); //starting grid



function changeGrid(){  //function to create new grid when "change grid" button is clicked
    const gones = document.querySelectorAll("#row"); //remove all empty boxes
    gones.forEach(box => {
        box.remove();
    })

    const newRow = document.createElement("newRow"); //create new row to start attaching boxes
        newRow.id = "row"
        document.getElementById("column").appendChild(newRow);
 

    size = prompt("Enter Grid Size (Max. 100)")
    while (isNaN(size) || size < 0 || size > 100) {
        size = prompt("Invalid number! please enter a number between 0 and 100")
    }
    
    
    createGrid(size); 
}
