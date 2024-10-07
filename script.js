

function generateGrid() {
    
    const grid = document.querySelector("#grid");
    grid.innerHTML = ''; 

    let size = prompt("Insert the size of the grid", 16);
    size = Math.max(1, Math.min(size, 100));
    
    for (let i = 0; i < size; i++) {
        const contentGrid = document.createElement("div");
        contentGrid.id = "div" + i;
        contentGrid.classList.add("base");
        grid.appendChild(contentGrid);

        for (let j = 0; j < size; j++) {
            const innerGrid = document.querySelector("#div" + i);

            const contentGridCell = document.createElement("div");
            contentGridCell.classList.add("content");
            let padding = 640/size; 
            contentGridCell.style.width = `${padding}px`; 
            contentGridCell.style.height = `${padding}px`; 
            innerGrid.appendChild(contentGridCell);
        }
    }

    const mouseGrid = document.querySelectorAll(".content");
    mouseGrid.forEach((gridElement) => {
        gridElement.addEventListener("mouseover", () => {
            changeColor(gridElement);
        });
    });
}
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        generateGrid(); 
    });

    const mouseGrid = document.querySelectorAll(".content");

    mouseGrid.forEach((gridElement) => {
        gridElement.addEventListener("mouseover", () => {
            changeColor(gridElement);
        });
    });

function changeColor(element) {
    let color = "#" + ((1 << 24) * Math.random() | 0).toString(16); 
    element.style.backgroundColor = color; 
}