const imageArray = ['car0.jpeg','car1.jpeg','car2.jpeg','car3.jpeg','car4.jpeg'];
let index = 0;

function moveLeft(){
	var setImage = "url('" + "images/" + imageArray[Math.abs(--index)%5] + "')"; 
  	document.getElementsByTagName('div')[0].style.backgroundImage = setImage;
}

function moveRight(){
	var setImage = "url('" + "images/" + imageArray[Math.abs(++index)%5] + "')"; 
  	document.getElementsByTagName('div')[0].style.backgroundImage = setImage;
}