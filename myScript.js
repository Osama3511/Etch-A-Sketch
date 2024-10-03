

const containerDiv = document.querySelector(".container");

function createDivs(squareSize = 16){

    
    let flexBasis = (1 / squareSize) * 100;
    
    const CONTAINER_AREA = squareSize * squareSize;

    containerDiv.textContent = '';

    for(let i = 0 ; i < CONTAINER_AREA; i++){
        const div = document.createElement("div");
        div.classList.add("containerDivs");

        div.style.flex = `1 0 ${flexBasis}%`;
        div.style.height = `${flexBasis}%`;

        
        div.addEventListener("mouseover",() => {
            div.style.backgroundColor = getRandomColor();
        });

        containerDiv.appendChild(div);

    }
    
}

createDivs();


const changeSizeBtn = document.querySelector(".btn");

changeSizeBtn.addEventListener("click", () => {
    let sizeInput = parseInt(prompt("Enter the desired sqaure size (Max 100): "));
    if (sizeInput > 100){
        alert("Input is too large (Max 100)");
    }
    else if (sizeInput < 0){
        alert("Sqaures can't be negative!");
    }
    else{
        createDivs(sizeInput);
    }

})


function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0 ; i < 6 ; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color
}

