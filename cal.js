var display = document.getElementById('display');
document.designMode="off";

// delete btn

function rm() {
      let currentletter = display.value;

      // removing last letter
      display.value = currentletter.substring(0, currentletter.length - 1);

}




function num9() {
      display.value += "9";
}
function num8() {
      display.value += "8";
}
function num7() {
      display.value += "7";      
}

function num6() {
      display.value += "6";      
}
function num5() {
      display.value += "5";      
}
function num4() {
      display.value += "4";      
}
function num3() {
      display.value += "3";      
}
function num2() {
      display.value += "2";      
}
function num1() {
      display.value += "1";      
}
function num0() {
      display.value += "0";      
}

function num00() {
      display.value += "00";  
}
function point() {
      display.value += ".";      
}


// adding operation signs

function divide() {
    display.value += "/";  
}
function product() {
      display.value += "*";
}

function plus() {
      display.value += "+";
}

function subt() {
      display.value += "-";
}

// making equal work

function equal() {
      try {
        var result = eval(display.value);
        display.value= result;
      } catch (error) {
            display.value = "Fuck You !!!!!";
      }
}

function clearr() {
      display.value = " "  
}

function plus_minus() {
      var plus_minus = eval(display.value);
      display.value = plus_minus * -1;  
}