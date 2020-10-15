var currentOperand;

init();

function appendNumber(number) {
  currentOperand = document.querySelector('.current-operand').innerText + number.toString();
}

function updateDisplay() {
  document.querySelector('.current-operand').innerText =currentOperand;
}


var numbers = document.getElementsByClassName("nbr");

var calculatorDisplay = function() {
  //alert("test");
  appendNumber(this.id);
  updateDisplay();
};

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', calculatorDisplay, false);
}

var operations = document.getElementsByClassName("nbr");

var calculatorOperation = function() {
  //alert("test");
  appendNumber(this.id);
  updateDisplay();
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', calculator, false);
}


function init() {
  this.currentOperand = '';
  this.previousOperand = '';
  this.operation = undefined;
  this.readyToReset = false;
}
