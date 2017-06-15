let activateBtn = document.getElementById('growBtn');
let numberField = document.getElementById('getNumber');
let charField = document.getElementById('getChar');


let specs = {
	height: 0,
	char: " "
};

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

console.log("specs first", specs);


function getInfo (specs) {
	 specs.height = parseInt(document.getElementById('getNumber').value);
	 specs.char = document.getElementById('getChar').value;
	if (document.getElementById('getNumber').value === '') {	window.alert("Both fields require an appropriate value.");
	} else if (specs.char === "") {
		window.alert("Both fields require an appropriate value.");
	}
	console.log("specs?", specs.char, specs.height);
	growTree(specs);
}

function growTree(specs) {
	let emptyTree = '';
	let spaces = 'm';
	for (i=2; i<specs.height; i++) {
		spaces += 'm';
	}
//I need the number of spaces to start out at specs.height-1, then to decrease by one each time through the loop until they are at 0 and the tree is full.
	let doubleChar = specs.char + specs.char;
	for (i=0; i<1; i++) {
		console.log(emptyTree += spaces + specs.char);
	};
	for (i=0; i<specs.height; i++) {
		spaces -= spaces;
		console.log(emptyTree+= spaces + doubleChar);
	}
}