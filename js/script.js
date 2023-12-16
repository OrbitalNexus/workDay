function addBlocks() {
    
    for (let i = "09" ; i < 19; i++) {
    let con = document.createElement("div");
    con.className = "container";

    let textBlock = document.createElement("div");
    textBlock.className = "text-block";

    let time = document.createElement("p");
    time.className = "time timeShort";
    time.innerText = i;
    document.body.appendChild(time);

    let box = document.createElement("input");
    box.setAttribute("type", "text");
    box.setAttribute('id', 'input-' + i);
    box.className = "inputBox";
    document.body.appendChild(box);

    let but = document.createElement("button");
    but.className = "btn btn-primary saveBtn";
    but.setAttribute("id", 'save-' + i)

    let save = document.createElement("img");
    save.src = "./img/diskette.png";
   
    but.appendChild(save);
    document.body.appendChild(but);
    textBlock.appendChild(time);
    textBlock.appendChild(box);
    textBlock.appendChild(but);
    document.body.appendChild(textBlock);
    con.appendChild(textBlock);
    document.body.appendChild(con);
    }
}

function saveState() {
    for (let i = "09"; i < 19; i++) {
        let saveButton = document.getElementById("save-" + i).addEventListener("click", (e) => {
            let input = document.getElementById("input-" + i).value;
            localStorage.setItem("box-" + i, input);
        });
    }
}

function loadState() {
    for (let i = "09"; i < 19; i++) {
        let inputValue = document.getElementById("input-" + i)
        inputValue.value = localStorage.getItem("box-" + i);
    }
        
}

addBlocks();
saveState();
loadState();











