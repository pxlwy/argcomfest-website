var dice = {
  sides: 3,
  roll: function () {
	var randomNumber = Math.floor(Math.random() * this.sides) + 1;
	return randomNumber;
  }
}



//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  if (result == 1) {
  printNumber("A");
} else if (result == 2) {
  printNumber("R");
} else if (result == 3) {
  printNumber("G");
} 
  else {
  printNumber("ERROR")
}
};
