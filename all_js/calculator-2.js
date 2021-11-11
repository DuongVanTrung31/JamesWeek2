function showValue(value) {
    document.getElementById("display").value += value;
}

function calculator() {
    result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}


