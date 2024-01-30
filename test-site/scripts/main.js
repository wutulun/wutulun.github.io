// 1. Change Image
const myImage = document.querySelector("img");
myImage.onclick = () => {
	if (myImage.getAttribute("src") === "images/firefox_PNG1.png") {
		myImage.setAttribute("src", "images/69.jpg");
	} else {
		myImage.setAttribute("src", "images/firefox_PNG1.png");
	}
};

// 2. Personalized Greeting
let myHeading = document.querySelector("h1");
const storedName = localStorage.getItem("name");
function setUserName() {
	let myName = prompt("Please Enter Your Name:");
	while (!myName) {
		myName = prompt("Please Enter Your Name:");
	}
	myHeading.textContent = `MDN Web Docs is cool, ${myName}!`;
	localStorage.setItem("name", myName);
}
if (!storedName) {
	setUserName();
} else {
	myHeading.textContent = `MDN Web Docs is cool, ${storedName}!`;
}
document.querySelector("button").onclick = () => {
	setUserName();
};