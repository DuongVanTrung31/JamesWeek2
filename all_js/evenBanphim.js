// Hàm move
function upArPress() {
    let element = document.getElementById('duck');
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}

function downArPress() {
    let element = document.getElementById('duck');
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}

function leftArPress() {
    let element = document.getElementById('duck');
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}

function rightArPress() {
    let element = document.getElementById('duck');
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}

// Nhấn phím di chuyển
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArPress();
            break;
        case 39:
            rightArPress();
            break;
        case 38:
            upArPress();
            break;
        case 40:
            downArPress();
            break
    }
}

// Sự kiện nhận phím
function doReady() {
    window.addEventListener('keydown', moveSelection);
}