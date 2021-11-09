let inputPhisical = parseFloat(prompt('Nhập điểm Lý'));
let inputChemistry = parseFloat(prompt('Nhập điểm Hóa'));
let inputBiology = parseFloat(prompt('Nhập điểm Lý'));

let sum = inputChemistry + inputBiology + inputPhisical;
let diemTB = sum / 3 ;
document.write(`Tổng điểm 3 môn là: ${sum} và Điểm trung bình 3 môn là: ${diemTB}`);
