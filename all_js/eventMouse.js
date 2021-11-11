
let imgObj = null;
imgObj = document.getElementById('myImage');

// hàm init
function init() {
    let imgObj = document.getElementById('myImage')
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    }

// Hàm moveRight
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = init;
