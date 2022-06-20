const elarr = [ ];

for (let i = 1; i < 15; i++) {
    let el = document.getElementById(`plant${i}`);
    elarr.push(el);
    dragElement(el);
}

const elarrCoord = elarr.map((el) => {
    // console.log(el);
    return {x: el.offsetTop, y: el.offsetLeft};
})



let button = document.getElementById('addButton');
let buttonFenShui = document.getElementById('addButtonFenShui');
let elarrCoordFenShui = [];
let elarrCoordFenShuiSave = [];


function onButtonClick() {
    // console.log(elarr[1])
    for(let i = 0; i < elarr.length; i++) {
        elarr[i].style.top = elarrCoord[i].y + 'px';
        elarr[i].style.left = elarrCoord[i].x + 'px';
    }
}

function SaveFenShui() {
    elarrCoordFenShui = elarr.map(el=>({x: el.style.top, y: el.style.left}))
}

function BackFenShui() {
    // console.log(elarr[1])
    for(let i = 0; i < elarr.length; i++) {
        elarr[i].style.top = elarrCoordFenShui[i].x;
        elarr[i].style.left = elarrCoordFenShui[i].y;
    }
}


function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        // console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }        
}



