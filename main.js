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
	console.log("specs?", specs.char, specs.height);
}