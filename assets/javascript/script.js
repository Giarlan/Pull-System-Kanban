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

/* This function updates recipient-area status*/ 
function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');
        if(area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }       
    });

    if(areas.a === '<img src="/assets/images/Imagem1.png" alt="">' && areas.b === '<img src="/assets/images/Imagem2.png" alt="">' && areas.c === '<img src="/assets/images/Imagem3.png" alt="">'
         && areas.d === '<img src="/assets/images/Imagem4.png" alt="">' && areas.e === '<img src="/assets/images/Imagem5.png" alt="">' &&  areas.f === '<img src="/assets/images/Imagem6.png" alt="">' 
         && areas.g ==='<img src="/assets/images/Imagem7.png" alt="">' && areas.h === '<img src="/assets/images/Imagem8.png" alt="">'  && areas.i === '<img src="/assets/images/Imagem9.png" alt="">' 
         && areas.j ==='<img src="/assets/images/Imagem10.png" alt="">') {
            document.querySelector('.recipient-area').classList.add('correct');
        } else {
            document.querySelector('.recipient-area').classList.remove('correct');
        }

}
