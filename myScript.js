const containerDiv = document.querySelector(".container");

const CONTAINER_AREA = 16 * 16 ;

function createDivs(){
    for(let i = 0 ; i < CONTAINER_AREA ; i++){
        const div = document.createElement("div");
        div.classList.add("containerDivs");
        containerDiv.appendChild(div);
    }
}

createDivs();