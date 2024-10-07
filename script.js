for(let i =0;i<16;i++){
const grid = document.querySelector("#grid");

const contentGrid = document.createElement("div");
contentGrid.id = "div"+i
contentGrid.classList.add("base");
grid.appendChild(contentGrid);
for(let j =0;j<16;j++){
    const grid = document.querySelector("#div"+i);
    
    const contentGrid = document.createElement("div");
    
    contentGrid.classList.add("content");
    contentGrid.textContent = "grid";
    grid.appendChild(contentGrid);
    
    }
}
