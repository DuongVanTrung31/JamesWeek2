//bmi = weight / ( height^2 )
let weight = + prompt('Nhập cân nặng của bạn bằng kg');
let height = + prompt('Nhập chiều cao của bạn bằng m');
let bmi = weight / (height*height);
if (bmi < 18) {
    document.write('Underweight');
    } else if (bmi < 25.0) {
    document.write('Normal');
    } else if (bmi < 30.0) {
    document.write('Overweight');
    } else {
    }
    document.write('Obese');