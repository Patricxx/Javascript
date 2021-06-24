// Opdracht 4.4

// Room 4
// Adrienn
// Elly
// Carmen
// Maher
// Patrick


// Oefening A: 
// function nameFunction(team){
//     console.log("This function has the parameter:" + parameter)
// } 
// myFunction("All sorts of parameters are allowed")



function names(team){
 if (team == "Adrienn"){
        return "Adrienn is in this team.";
}   else if(team == "Carmen"){
        return "Carmen is in this team.";
}   else if ( team == "Elly"){
        return "Elly is in this team.";
}   else if(team == "Maher"){
        return "Maher is in this team to.";
}   else if (team =="Patrick"){
        return "Patrick is in team aswel.";
}   else {
        return "Your NOT in this team!";              
}   
}
names();
console.log(names("Patrick"));


function namesTeam(team) {
	document.getElementById("test").innerHTML = names(team);
      }
namesTeam("Patrick");


// function nameTeam = (team) {
// 	if (team == 'Adrienn', 'Elly', 'Carmen', 'Maher', 'Patrick'){
//     return "Your in this team!"; 
// }   else {
//     return "Your NOT in this team!";    
//     }
// }
// // let nameTeam = document.getElementById("test").value = name(team);
// console.log(team)


// function name() {
// 	let name = document.getElementById("test").value = "Hello World!";
// }

// name()


//================== Met Arrow Functions

// names = team => {
//     if (team == "Adrienn"){
//            return "Adrienn is in this team.";
// }   else if(team == "Carmen"){
//            return "Carmen is in this team.";
// }   else if ( team == "Elly"){
//            return "Elly is in this team.";
// }   else if(team == "Maher"){
//            return "Maher is in this team to.";
// }   else if (team =="Patrick"){
//            return "Patrick is in team aswel.";
// }   else {
//            return "Your NOT in this team!";              
// }   
// }
// names = team => {
//     document.getElementById("test").innerHTML = names(team);
// }
// names("Carmen");

