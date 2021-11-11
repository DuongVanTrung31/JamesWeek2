
function getDay() {
    let input1 = document.getElementById('inputmonth1').value;
    switch (parseInt(input1)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('output1').innerHTML = `Tháng ${input1} có 31 ngày `;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('output1').innerHTML = `Tháng ${input1} có 30 ngày `;
            break;
        case 2:
            document.getElementById('output1').innerHTML = `Tháng ${input1} có 28 hoặc 29 ngày`;
        }
}
