function chiahet(a, b) {
    let a = document.getElementById('soA').value;
    let b = document.getElementById('soB').value;
    let result = a % b === 0 ? 'Có chia hết' : 'Ko chia hết';
}
document.getElementById('result').innerHTML = result;