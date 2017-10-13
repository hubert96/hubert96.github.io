const inputs = document.querySelectorAll('.controls input');

var blur = "blur(0px)";
var grayscale = "grayscale(0%)";
var contrast = "contrast(100%)";
var sepia = "sepia(0%)";

function myFunction() {
	var unit = this.dataset.unit;

	if (this.name == "opacity") {
		document.querySelector(".imageColor").style.opacity = this.value/100;
	}

	if (this.name == "color") {
		document.querySelector("span").style.color = this.value;
		document.querySelector(".imageColor").style.background = this.value;
	}

	if(this.name == "blur") {
		blur = "blur(" + this.value + unit + ") ";
	}

	if(this.name == "grayscale") {
		grayscale = "grayscale(" + this.value + unit + ") ";
	}

	if(this.name == "contrast") {
		contrast = "contrast(" + this.value + unit + ") ";
	}

	if(this.name == "sepia") {
		sepia = "sepia(" + this.value + unit + ") ";
	}

	document.querySelector("img").style.filter = blur + grayscale + contrast + sepia;
}

function input(input) {
	return input.addEventListener('mousemove', myFunction) + input.addEventListener('change', myFunction);
}

inputs.forEach(input);