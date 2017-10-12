// 
var flag = 0;
flag = 0;


const body = document.getElementById('body'); // body
const firstSlide = document.getElementById('expand-this-first'); // First slide (menu)
const aboutMe = document.getElementById('about-me'); // About me page
const skills = document.getElementById('skills'); // Skills page
const myWork = document.getElementById('my-work'); // My work page 
const content = document.getElementById('content'); 


// Elements
const logoH = document.getElementById('logo-h'); // logo H
const menu = document.getElementById('menu'); // Menu div
const details = document.getElementById('details'); // details div

// Width Switches
const ham = document.getElementById('ham'); // hamburger
ham.addEventListener("click", maxWidth); // and his listener

const crossFirstSlide = document.getElementById('crossFirstSlide'); // Closing first slide cross
crossFirstSlide.addEventListener('click', minWidth);  // And his click listener

const cross = document.getElementById('cross'); 
cross.addEventListener('click', minWidth);


const green = document.getElementById('green');  // About me link
green.addEventListener('mouseover', changeColor);  // his listener mouse on
green.addEventListener('click', maxWidth);

const blue = document.getElementById('blue');  // Skills link
blue.addEventListener('mouseover', changeColor);  // his listener mouse on
blue.addEventListener('click', maxWidth);

const turk = document.getElementById('turk');  // My works link
turk.addEventListener('mouseover', changeColor);  // his listener mouse on
turk.addEventListener('click', maxWidth);




green.addEventListener('mouseout', backColor);
blue.addEventListener('mouseout', backColor);
turk.addEventListener('mouseout', backColor);



const bg = document.getElementById('body');

var color = 0;
var element = 0;

function zmiennik(value) {
	switch (value) {
		case "green":
			color = "#2ecc71";
			element = aboutMe;
			break;
		case "ham":
			color = "#f1c40f";
			element = firstSlide;
			break;
		case "blue":
			color = "#3498db";
			element = skills;
			break;
		case "turk":
			color = "#1abc9c";
			element = myWork;
			break;
	}
}

function changeColor() {
	zmiennik(this.id);

	firstSlide.style.background = color;
	bg.style.background = "linear-gradient(75deg, white 50%, " + color +" 0) no-repeat";
	bg.style.opacity = "1"
}

function backColor() {
	if(flag == 0){
		firstSlide.style.background = "#f1c40f";
		bg.style.opacity = "0";
	}
}


function maxWidth() {
	var id = this.id;
	zmiennik(this.id);
	element.style.width = "100%";

	if(id != 'ham'){
		flag = 1;
	}


	setTimeout(function(){
		if(id == "ham") {
			ham.style.display = "none";
			crossFirstSlide.style.display = "block";
			logoH.style.top = "45%";
			logoH.style.transform = "scale(1.2)";
			menu.style.display = "flex";
			details.style.display = "flex";
			} else {
				flag = 1;
				cross.style.display = "block";
				content.style.display = "block";
				console.log('cross on!');
			}
	}, 500);
	

}

function minWidth() {
	var id = this.id;
		zmiennik(this.id);
		element.style.width = "0px";

	flag = 0;
	backColor();

	if(id == "crossFirstSlide"){
		firstSlide.style.width = "30px";
		ham.style.display = "block";
		crossFirstSlide.style.display = "none";
		logoH.style.top = "50px";
		logoH.style.transform = "scale(1.0)";
		menu.style.display = "none";
		details.style.display = "none";
		} else {
				cross.style.display = "none";
				content.style.display = "none";
			}


}