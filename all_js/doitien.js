function convert() {
    let input = parseFloat(document.getElementById("amount").value);
    let formCur = parseFloat(document.getElementById("formCurrent").value);
    let toCurr = parseFloat(document.getElementById("toCurrent").value);
    
    document.getElementById("output").innerHTML = (input * formCur / toCurr).toFixed(2);
}