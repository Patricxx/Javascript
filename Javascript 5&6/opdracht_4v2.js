// Opdracht 4.2

// Oefening A
// document.getElementsByClassName 

// function myFunction() {
//     let x = document.getElementsByClassName("test");
//     x[0].innerHTML = "Changed!";
//   }


// document.getElementsByTagName

// function myFunction() {
// 	let x = document.getElementsByTagName("LI");
// 	document.getElementById("test").innerHTML = x[0].innerHTML;
//       }


// document.querySelector

// function myFunction() {
// 	document.querySelector(".test").style.backgroundColor = "red";
// 	}


// document.querySelectorAll

// function myFunction() {
// 	var x, i;
// 	x = document.querySelectorAll(".test");
// 	for (i = 0; i < x.length; i++) {
// 	  x[i].style.backgroundColor = "red";
// 	}
//       }


// element.innerHTML

// function myFunction() {
// 	document.getElementById("test").innerHTML = "Paragraph changed!";
//       }


// element.innerText

function myFunction() {
	let x = document.getElementById("button").innerText;
	document.getElementById("test").innerHTML = x;  
      }