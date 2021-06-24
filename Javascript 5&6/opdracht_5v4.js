// Opdracht 5.4


// Oefening A: 

// let arrayLike = document.querySelectorAll('div')
// console.log(arrayLike)

// console.log(Array.from(arrayLike))


// Oefening B:

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// console.log(words.filter(word => word.length > 5));


// Oefening C: 

// const array = [5, 12, 8, 130, 44];
// console.log(array.find(element => element > 15));

// const inventory = [
// 	{name: 'apples', quantity: 2},
// 	{name: 'bananas', quantity: 0},
// 	{name: 'cherries', quantity: 5}
//       ];
      
//       function isCherries(fruit) {
// 	return fruit.name === 'cherries';
//       }
      
//       console.log(inventory.find(isCherries));

// const inventory = [
// 	{name: 'apples', quantity: 2},
// 	{name: 'bananas', quantity: 0},
// 	{name: 'cherries', quantity: 5}
//       ];
      
//       const result = inventory.find( ({ name }) => name === 'cherries' );
      
//       console.log(result)


// Oefening D

// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 1;

// console.log(array.some(even));


// Oefening E

// const array1 = [1, 30, 39, 29, 10, 13, 120, 500];
// const isLower = (currentValue) => currentValue < 600;
// console.log(array1.every(isLower));

// Oefening F

// const array1 = [1, 2, 3];
// console.log(array1.includes(2));


const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));

console.log(pets.includes('at'));