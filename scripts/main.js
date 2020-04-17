let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!"


function setUserName() {
	let myName = prompt("请输入你的名字:");
	if (!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = "酷毙了，" + myName;
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.textContent = "酷毙了，" + storedName;
}

let myButton = document.querySelector("button");
myButton.onclick = function () {
	setUserName();
}

let myImage = document.querySelector("img");
myImage.onclick = function () {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/images.jfif") {
		myImage.setAttribute("src", "images/cat.jfif");
	} else {
		myImage.setAttribute("src", "images/images.jfif");
	}
}