/*Events for drag mode*/
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', draEnd);
});

/*Events for drop mode*/
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
})

/*Enable the drag effect*/
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}

function dragend(e) {
    e.currentTarget.classList.remove('dragging');
}

/* The following three functions enables the drop area*/
function dragOver(e) {
    e.preventDefalt();
    e.currentTarget.classList.add('hover');
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

function drop(e) {
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    if( e.currentTarget.querySelector('.item') == null) {
       e.currentTarget.appendChild(dragItem); 
    }
}