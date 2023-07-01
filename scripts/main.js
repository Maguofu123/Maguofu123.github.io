let myImage = document.querySelectorAll('img')[0];
let myImage1 = document.querySelectorAll('img')[1];

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}


function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}



if (!localStorage.getItem('name')){
	 setUserName()
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了' + storedName;
}

myButton.onclick = function() {
    setUserName()
}
