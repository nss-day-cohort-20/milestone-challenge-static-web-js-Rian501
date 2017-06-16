let activateBtn = document.getElementById('growBtn');
let numberField = document.getElementById('getNumber');
let charField = document.getElementById('getChar');

//start with 
let specs = {
	height: 0,
	char: " "
};

//listen for user input three ways
activateBtn.addEventListener("click", getInfo);
numberField.addEventListener("keyup", function (event) {
	if (event.key==="Enter") {
		getInfo(specs);
	}
})
charField.addEventListener("keyup", function (event) {
	if (event.key==="Enter") {
		getInfo(specs);
	}
})


//get the input from the user and throw an alert if not right type of input
function getInfo (specs) {
	 specs.height = parseInt(document.getElementById('getNumber').value);
	 specs.char = document.getElementById('getChar').value;
	if (document.getElementById('getNumber').value === '') {	
		window.alert("Both fields require an appropriate value.");
	} else if (specs.char === "") {
		window.alert("Both fields require an appropriate value.");
	}
console.log("Your tree is this tall:", specs.height);
console.log("Your tree is made of:", specs.char);
	growTree(specs);
}

//user input implemented to grow the tree
function growTree(specs) {
	let growingTree = specs.char;
	let spaces = '';
	let doubleChar = specs.char + specs.char;
	for (i=0; i<specs.height; i++) {
		spaces = ' '.repeat(specs.height-1-i);
		console.log(spaces + growingTree);
		growingTree += doubleChar;
	}
}