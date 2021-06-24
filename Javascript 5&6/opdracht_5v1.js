// Opdracht 5.1

// Arrays

// let emptyArray = []
// let filledArray = [1, 2, 3, 4, 5]

// console.log(filledArray)
// console.log(filledArray[0])

// let theMatrix = ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"]
// let johnWick = ["John Wick", "John Wick 2", "John Wick 3"]
// let favorite = "A Scanner Darkly"
// let age = 56

// let keanuMovies = [theMatrix, JohnWick, favorite, keanuRating, age]

// console.log(keanuMovies)
// console.log(keanuMovies[0][2])


// Loops

// for (let i=0; i < 5; i++){
// 	console.log("i is hier " + i)
// }

// let array = ["Blink", 182]
// for (const index in array){
// 	console.log(index)
// }

// let array = ["Blink", 182]
// for (const item in array){
// 	console.log(item)
// }

// let bugsInCode = true;
// while (bugsInCode){
// 	fixBugs()
// 	if(needSleep) break;
// }

// let bugsInCode = 1;
// while (bugsInCode > 0){
// 	console.log(bugsInCode)
// 	bugsInCode += 2
// 	if(bugsInCode == 3) continue;
// 	bugsInCode -= 1
// 	if(needSleep) break;
// }

// let pets = ["Bird", "Dog", "Cat"]
// console.log(pets.shift() + " escaped!")
// console.log(pets.pop() + " escaped!")
// console.log(pets)
// console.log(pets.unshift("Bird"))
// console.log(pets.push("Cat"))
// console.log(pets)


// let pets = ["Bird", "Dog", "Cat"]
// let outdoorPets = pets.slice(1)
// pets.splice(1, 2, "Cat", "Dog")
// outdoorPets.sort()
// pets.forEach(pet => "My Favorite " + pet)
// outdoorPets = outdoorPets.map(pet => pet = "My Favorite " + pet)

// console.log(outdoorPets)


// Oefening A: 

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (const item in array){
// 	console.log(item)
// }


// Oefening B:

// let fruit = ["Appel", "Aardbei", "Banaan", "Sinaasappel", "Kiwi"]
// for (const item of fruit){
// 	console.log(item)
// }


// Oefening C:

// let fruit = ["Appel", "Aardbei", "Banaan", "Sinaasappel", "Kiwi"]
// 	console.log(fruit[0])
// 	console.log(fruit[1])

// Oefening D: 

// function randomFruit(fruit)
// {
// return fruit[Math.floor(Math.random()*fruit.length)];   
// }
// let fruit = ["Appel", "Aardbei", "Banaan", "Sinasappel", "Kiwi"];
// console.log(randomFruit(fruit));

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let random [Math.floor(Math.random()*array.length)]; 
// 	if (random == [0] || random == [1] || random == [2] || random == [3] || random == [4] || random == [5] || random == [6] || random == [7] || random == [8] || random == [9] || random == [10])
// 	if ([0] == "Apple" || [1] == "Aardbei" || [3] == "Banaan" || [4] == "Sinasappel" || [5] == "Kiwi" || [6] == "Peer" || [7] == "Ananas" || [8] == "Mango" || [9] == "Druif" || [10] == "Kers")

// for (const index in array){
// console.log(index)


// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let random = array[Math.floor(Math.random()*array.length)];
// 	if (random == 0){
//     	console.log ("Appel");
// }   	else if (random == 1){
//      console.log("Aardbei")
// }   	else if (random == 2){
//     	console.log("Banaan")
// }   	else if (random == 3){
//     	console.log("Sinasappel")
// }   	else if (random == 4){
//     	console.log("Kiwi" )
// }   	else if (random == 5){
//      console.log("Peer")
// }   	else if (random == 6){
//     	console.log("Ananas")
// }   	else if (random == 7){
//     	console.log("Mango")
// }   	else if (random == 8){
//     	console.log("Druif")
// }   	else if (random == 9){
// 	console.log("Kers")
// }   	else if (random == 9){
// 	console.log("Pruim")
// }   	else if (random == 10){
// }   	else {
//         console.log(random)
// }
// document.body.innerHTML = random;


// Oefening E: 

// let fruit = ["Apple", "Aardbei", "Banaan", "Sinasappel", "Kiwi", "Peer", "Ananas", "Mango", "Druif", "Kers", "Pruim"];
// console.log(fruit.length);


// Oefening G: 

// let fruit = ["Apple", "Aardbei", "Banaan", "Sinasappel", "Kiwi", "Peer", "Ananas", "Mango", "Druif", "Kers", "Pruim"];
// fruit.splice(0, 1, "Aardbei", "Appel", "Pruim", "peer", "Mango" )
// console.log(fruit)

// Oefening H: 

// let fruit = ["Apple", "Aardbei", "Banaan", "Sinasappel", "Kiwi", "Peer", "Ananas", "Mango", "Druif", "Kers", "Pruim"];
// let myFruit = fruit.slice(1)
// fruit.splice(0, 1, "Aardbei", "Appel", "Pruim", "peer", "Mango" )
// console.log(myFruit)

// let fruit = ["Apple", "Aardbei", "Banaan", "Sinasappel", "Kiwi", "Peer", "Ananas", "Mango", "Druif", "Kers", "Pruim"];
// fruit[1] = [fruit[2],fruit[1]=fruit[5]][1]    
// console.log(fruit)