// bài 1 khai báo biến
let i = 10;
let f = 20.5;
let b = true;
let s = 'Hà Nội';

document.write('i = ' + i);
document.write('<br>');
document.write('f = ' + f);
document.write('<br>');
document.write('b = ' + b);
document.write('<br>');
document.write('s = ' + s);

// bài 2 tính diện tích hình chữ nhật
let width = 20;
let height = 10;
let area = width * height;

document.write('Area = ' + area);

// bài 3 dùng prompt() để check a % b === 0
let a = prompt('Nhập số a');
let b = prompt('Nhập số b');
let result = parseInt(a) % parseInt(b) === 0?a là bội của b: a ko là bội của b;
alert(result);
