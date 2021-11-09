// F = (9*C)/5 + 32
let inputC = parseFloat(prompt('Nhập giá trị độ C'));
let result = function (input) {
    result = input*9 / 5 + 32;
    return result.toFixed(2);
}
result(inputC);
document.write(`Kết quả là : ${result} F`)