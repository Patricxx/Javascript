// Opdracht 5.3

// let pets = ["Bird", "Dog", "Cat"]
// let outdoorPets = pets.slice(1)
// pets.splice(1, 2, "Cat", "Dog")
// outdoorPets.sort()
// pets.forEach(pet => "My Favorite " + pet)
// outdoorPets = outdoorPets.map(pet => pet = "My Favorite " + pet)
// console.log(outdoorPets)


// Oefening A/B: 

// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]
// dutchSports[3] = "Zeilen";
// console.log(dutchSports);
// dutchSports[4] = "Zwemmen";
// console.log(dutchSports);


// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]
// dutchSports[3] = "Zeilen";
// console.log(dutchSports);
// dutchSports[4] = "Zwemmen";
// console.log(dutchSports);
// dutchSports[0] = "Volleybal";
// console.log(dutchSports);


// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]
// dutchSports.push("zeilen", "Zwemmen")
// console.log(dutchSports)
// dutchSports.unshift("Volleybal")
// console.log(dutchSports)


// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]
// dutchSports.splice(3, 0, "zeilen", "Zwemmen")
// console.log(dutchSports)
// dutchSports.unshift("Volleybal")
// console.log(dutchSports)


// Oefening C/D/E/F/G:

let dutchSports = ["Volleybal", "Voetbal", "Hockey", "Schaatsen", "zeilen", "Zwemmen"]
let balSports = dutchSports.slice(1)
balSports.splice(0, 5, "Voetbal", "volleybal",)
dutchSports.sort()
console.log(balSports)

dutchSports.forEach(element => console.log(element));

let sportsLength = dutchSports.map(element => element.length)
console.log(sportsLength)

// dutchSports.forEach(dutchSports => "My Favorite Sport " + dutchSports)
// balSports = balSports.map(dutchSports => dutchSports = "My Favorite Sport " + dutchSports)
// console.log.(balSports);
// console.log.(dutchSports);
// dutchSport.sort()
// balSports.splice(2)
// console.log.(balSports);
// balSports.sort()




