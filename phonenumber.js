var userInput = prompt("What is your phonenumber?")

if (userInput[3] === "-" && userInput[7] === "-") {
	alert(true);
} else {
	alert(false);
}

var userInput2 = prompt("What is your birth data?")

if (userInput2[2] === "/" && userInput2[5] === "/") {
	alert(true);
} else {
	alert(false);
}

var userInput3 = prompt("What is your zip code?")

if (userInput3.length === 5) {
	alert(true);
} else if (userInput3.length === 10 && userInput3[5]=== "-") {
	alert(true);
} else {
	alert(false);
}

var userInput4 = prompt("What is your state abbreviation?")

if (userInput4.length === 2) {
	alert(true);
} else {
	alert(false);
}

var userInput5 = prompt("Are you married?")

if (userInput5 == "yes" || "no" ) {
	|| "YES" || "NO" || "Yes" || "No")) {
	alert(true);
} else {
	alert(false);
}


// function test()
// {
//   var userInput - document.getElementById("userInput").value;
//   document.write(userInput);
// }
