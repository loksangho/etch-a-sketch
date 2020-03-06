const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {

    for (let j = 0; j < 16; j++) {
        let grid_cell = document.createElement('div');
        grid_cell.classList.add("grid_cell")
        container.appendChild(grid_cell);
    }

}

window.addEventListener("mouseover", e => {
    if (e.target.classList.contains("grid_cell")) {
        if (e.target.classList.contains("hover0")) {
            e.target.classList.add("hover1");
            e.target.classList.remove("hover0");
        } else if (e.target.classList.contains("hover1")) {
            e.target.classList.add("hover2");
            e.target.classList.remove("hover1");
        } else if (e.target.classList.contains("hover2")) {
            e.target.classList.add("hover3");
            e.target.classList.remove("hover2");
        } else if (e.target.classList.contains("hover3")) {
            e.target.classList.add("hover4");
            e.target.classList.remove("hover3");
        } else if (e.target.classList.contains("hover4")) {
            e.target.classList.add("hover5");
            e.target.classList.remove("hover4");
        } else if (e.target.classList.contains("hover5")) {
            e.target.classList.add("hover6");
            e.target.classList.remove("hover5");
        } else if (e.target.classList.contains("hover6")) {
            e.target.classList.add("hover7");
            e.target.classList.remove("hover6");
        } else if (e.target.classList.contains("hover7")) {
            e.target.classList.add("hover8");
            e.target.classList.remove("hover7");
        } else if (e.target.classList.contains("hover8")) {
            e.target.classList.add("hover9");
            e.target.classList.remove("hover8");
        } else if (e.target.classList.contains("hover9")) {

        } else {
            e.target.classList.add("hover0");
        }
    }

    return;
});

window.addEventListener("click", function (e) {

    if (e.target.tagName == "BUTTON") {
        let divs = document.querySelectorAll(".grid_cell");
        divs.forEach(div => div.classList.remove("hover0"));
        divs.forEach(div => div.classList.remove("hover1"));
        divs.forEach(div => div.classList.remove("hover2"));
        divs.forEach(div => div.classList.remove("hover3"));
        divs.forEach(div => div.classList.remove("hover4"));
        divs.forEach(div => div.classList.remove("hover5"));
        divs.forEach(div => div.classList.remove("hover6"));
        divs.forEach(div => div.classList.remove("hover7"));
        divs.forEach(div => div.classList.remove("hover8"));
        divs.forEach(div => div.classList.remove("hover9"));
        let length = prompt("How many squares per side do you want to make the new grid?");


        let child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
        for (let i = 0; i < length; i++) {

            for (let j = 0; j < length; j++) {
                let grid_cell = document.createElement('div');
                grid_cell.classList.add("grid_cell")
                container.appendChild(grid_cell);
            }

        }

        document.getElementById("container").style.gridTemplateColumns = "repeat(" + length + ", " + (100 / length - 0.1) + "vmin)";
        document.getElementById("container").style.gridTemplateRows = "repeat(" + length + ", " + (100 / length - 0.1) + "vmin)";

    }

})
