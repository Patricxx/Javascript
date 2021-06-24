// Opdracht 3.2

// Oefening A & B: 
// I

// let x = 4;
// if (x == 3) {
//     console.log('x gelijk aan 3');
// } else if (x > 4){
//     console.log('x groter dan 4');
// } else if (x > 11){
//     console.log('x groter dan 11');
// } else if (x < 3){
//     console.log('x kleiner dan 3');
// } else {
//     console.log(' ');
// }

// Oefening C:

// let maand = 4;
// if (maand == 0) {
//     console.log('Januari');
// } else if (maand == 1){
//     console.log('Februari');
// } else if (maand == 2){
//     console.log('Maart');
// } else if (maand == 3){
//     console.log('April');
// } else if (maand == 4){
//     console.log('Mei');
// } else if (maand == 5){
//     console.log('Juni');
// } else if (maand == 6){
//     console.log('Juli');
// } else if (maand == 7){
//     console.log('Augustus');
// } else if (maand == 8){
//     console.log('September');
// } else if (maand == 9){
//     console.log('Oktober');
// } else if (maand == 10){
//     console.log('November');
// } else if (maand == 11){
//     console.log('December');
// } else {
//     console.log('Geen geldige maand!');
// }


// Oefening D:
let month = 11;

switch (month) {
case 0 :
    month = 'Januari';
    break;
case 1 :
    month = 'Febuari';
    break;
case 2 :
    month = 'Maart';
    break;
case 3 :
    month = 'April';
    break;
case 4 :
    month = 'Mei';
    break;
case 5 :
    month = 'Juni';
    break;
case 6 :
    month = 'Juli';
    break;
case 7 :
    month = 'Augustus';   
    break;
case 8 :
    month = 'September';
    break;
case 9 :
    month = 'Oktober';
    break;
case 10 :
    month = 'November';
    break;
case 11 :
    month = 'December';
    break;
default :
    month = "Geen geldige maand!";
}
    console.log(month); ('Het ia de maand' + month)
