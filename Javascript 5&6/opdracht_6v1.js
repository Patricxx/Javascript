// Opdracht 6.1

// Object Constructor:
// let objectConstructed = new object();

// objectConstructed.name = "Patrick"
// objectConstructed.age = "41"
// objectConstructed.country = "The Netherlands"
// objectConstructed.city = "Amsterdam"
// console.log(objectConstructed)


// Literal Constructor:
// let literallyConstructend = {
// 	name : "Patrick",
// 	age : "41",
// 	country : "The Netherlands",
// 	city : "Amsterdam"
// };
// console.log(literallyConstructend);

// let person = {
// 	name : "Patrick" ,
// 	age : 41,
// 	Country : "The Netherlands",
// 	City : "Amsterdam",
// };
// console.log(person);


// Function Constructor:
// function Person(name, age, country, city) {
// 	this.name = name
// 	this.age = age
// 	this.country = country
// 	this.city = city
// }
// let functionConstructed = new Person("Patrick", "41", "The Netherlands", "Amsterdam")
// console.log(functionConstructed);


//Singleton Constructor:
// let singleConstructed = new function(){
// 	this.name = "Patrick",
// 	this.age = "41",
// 	this.country = "The Netherlands",
// 	this.city = "Amsterdam"	
// }
// console.log(singleConstructed);


//Class-based Constructor:
// class Person {
// 	constructor(name, age, country, city){
// 	this.name = "Patrick",
// 	this.age = "41",
// 	this.country = "The Netherlands",
// 	this.city = "Amsterdam"		
// 	}
// 	writeBadCode(){
// 		console.log("foutje kan iedereen maken")
// 	}
// }
// let classConstructed = new Person("Patrick", "41", "The Netherlands", "Amsterdam")

// console.log(classConstructed)



// // Oefening A: 

// // Object Constructor
// let pet1 = new object();
// 	pet1.type = "Dog"
// 	pet1.race = "Cross breed, German Shephard & Greyhound"
// 	pet1.name = "Linka"
// 	pet1.age = "18,5"
// console.log(pet1);


// // Literal Constructor:
// let pet2 = {
// 	type = "Dog",
// 	race = "Cross breed: German Shephard & Greyhound",
// 	name = "Linka",
// 	age = "18,5",
// };
// console.log(pet2);


// // Function Constructor:
// function Pet(type, race, name, age) {
// 	this.type = type
// 	this.race = race
// 	this.name = name
// 	this.age = age
// }
// let pet3 = new Pet("dog", "Cross breed: German Shephard & Greyhound", "Linka", "18,5")
// console.log(pet3);

// //Singleton Constructor:
// let pet4 = new function(){
// 	this.type = "Dog",
// 	this.race = "Crosse Breed: German Shephard & Greyhound",
// 	this.name = "Linka",
// 	this.age = "18,5"	
// }
// console.log(pet4);

// //Class-based Constructor:
// class Pet {
// 	constructor(type, race, name, age) {
// 	this.type = "Dog",
// 	this.race = "Crosse Breed: German Shephard & Greyhound",
// 	this.name = "Linka",
// 	this.age = "18,5"	
// 	}
// 	writeBadCode(){
// 		console.log("foutje kan iedereen maken")
// 	}
// }
// let pet5 = new Pet("dog", "Cross breed: German Shephard & Greyhound", "Linka", "18,5")
// console.log(pet5)


// // Oefening B:



// const person = {
// 	isHuman: false,
// 	printIntroduction: function() {
// 	  console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
// 	}
//       };
      
//       const me = Object.create(person);
//       me.name = 'Matthew';
//       me.isHuman = true;
      
//       me.printIntroduction();

// // Oefening C:


// // 


