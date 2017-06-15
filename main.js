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
	let spaces = '';
	let doubleChar = specs.char + specs.char;
	for (i=0; i<1; i++) {
		console.log(emptyTree += specs.char);
	};
	for (i=0; i<specs.height; i++) {
		console.log(emptyTree+= doubleChar);
	}
}