// S = rong^2 * PI; P = rong*2 *PI
let width = parseFloat(prompt('Nhập giá trị chiều rộng'));
let dientich = function (r) {
    dientich = Math.pow(r, 2) * Math.PI;
    return dientich;
}
let chuvi = function (r) {
    chuvi = r*2 * Math.PI;
    return chuvi;
}
dientich(width);
chuvi(width);
document.write(`Diện tích hình tròn bằng: ${dientich} và Chu vi hình tròn bằng: ${chuvi}`);