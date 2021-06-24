// Opdracht 5.2;

// Oefening A: 

// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]
// console.log(dutchSports[0])
// console.log(dutchSports[1])
// console.log(dutchSports[2])


// Oefening B:

// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]
// for (const item in dutchSports){
// 	console.log(item)
// }

// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]
// for (const item of dutchSports){
// 	console.log(item)
// }


// Oefening C:

// for (i = 1; i < 20; i++) {
// 	if (i % 1 === 0) {
// 	  console.log(i);  
// }
// }


// Oefening D E F: 

// for (i = 1; i< 10; i++) {
// 	if (i % 1 === 0) {
// 	  console.log(i);  
// }
// }	for (j = 1; j < 20; j++) {
// 		if (j % 2 === 1) {
// 		console.log(j);  
// }
// }	for (k = 0; k < 30; k++) {
// 		if (k % 3 === 0) {
// 		console.log(k);  
// }
// }	

// Oefening G: 

// let fib = [0, 1];
// for(let i=fib.length; i<20; i++) {
//     fib[i] = fib[i-2] + fib[i-1];
// }
// console.log(fib


// Oefening H:

// function bubbleSort(inputArray, reverse = false) {
// 	const len = inputArray.length;
// 	for (let i = 0; i < len; i++) {
// 	    for (let j = i + 1; j < len; j++) {
// 		let a = inputArray[i];
// 		let b = inputArray[j];
// 		if (reverse ? a < b : a > b) {
// 		    const tmp = inputArray[j];
// 		    inputArray[j] = inputArray[i];
// 		    inputArray[i] = tmp;
// 		}
// 	    }
// 	}
// 	return inputArr;
//     }
//     arr = [6, 5, 3, 1, 8, 7, 2, 4];
// console.log(bubbleSort(arr));