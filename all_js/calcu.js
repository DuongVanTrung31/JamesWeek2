function add() {
    let input1 = parseFloat(document.querySelector('#input1').value);
    let input2 = parseFloat(document.querySelector('#input2').value);
    document.querySelector('#result').innerHTML = input1 + input2;
}

function sub() {
    let input1 = parseFloat(document.querySelector('#input1').value);
    let input2 = parseFloat(document.querySelector('#input2').value);
    document.querySelector('#result').innerHTML = input1 - input2;
}

function multi() {
    let input1 = parseFloat(document.querySelector('#input1').value);
    let input2 = parseFloat(document.querySelector('#input2').value);
    document.querySelector('#result').innerHTML = input1 * input2;
}

function division() {
    let input1 = parseFloat(document.querySelector('#input1').value);
    let input2 = parseFloat(document.querySelector('#input2').value);
    document.querySelector('#result').innerHTML = input1 / input2;
}