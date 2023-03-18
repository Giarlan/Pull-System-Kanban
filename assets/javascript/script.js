/*Events for drag mode*/
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

/*Events for drop mode*/
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
})

document.querySelector('.sender-area').addEventListener('dragover', dragOverSender);
document.querySelector('.sender-area').addEventListener('dragleave', dragLeaveSender);
document.querySelector('.sender-area').addEventListener('drop', dropSender);

let areas = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    i: null,
    j: null,
}

/*Enable the drag effect*/
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

/* The following three functions enables drop action at recipient-area*/
function dragOver(e) {
    if( e.currentTarget.querySelector('.item') === null) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
    }
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

function drop(e) {
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    if( e.currentTarget.querySelector('.item') === null) {
       e.currentTarget.appendChild(dragItem);
       updateAreas(); 
    }
}

/* The following three functions enables drop action at sender-area*/
function dragOverSender(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeaveSender(e) {
    e.currentTarget.classList.remove('hover');
}


function dropSender(e) {
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();

}

function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');
        if(area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }       
    });

    if(areas.a === '1' && areas.b === '2' && areas.c === '3' && areas.d === '4' && areas.e === '5' &&
        areas.f === '6' && area.g ==='7' && areas.h === '8' && areas.i === '9' && areas.j ==='10') {
            document.querySelector('.areas').classList.add('correct');
        } else {
            document.querySelector('.areas').classList.remove('correct');
        }

}
