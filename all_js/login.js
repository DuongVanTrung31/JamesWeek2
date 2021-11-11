let userName = prompt("Who's there?", '');
if(userName == 'Admin') {
    let password = prompt(`Enter password`,'');
    password == 'TheMaster' ? alert(`Wellcome!`): password == null ? alert(`Canceled`) : alert(`Wrong password`);
} else if (userName == null) {
    alert(`canceled`);
} else {
    alert(`I don't know you?`)
}