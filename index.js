// calculator 

const display = document.getElementById('display');

function appendToDisplay(input){
 display.value+= input;
}

function clearDisplay(){
  display.value="";
}

function calculate(){
  try{
 
    display.value= eval(display.value);
  }
  catch(error){
    display.value="Error";
  }
}
function calculateSquareRoot(){
  try{
    display.value=Math.sqrt(parseFloat(display.value))
  }
  catch(error){
    display.value="Error"
  }
}

function calculatePower(exponent){
  display.value= Math.pow(parseFloat(display.value),exponent);
}


