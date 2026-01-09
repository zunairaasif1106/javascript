
function getValue(buttonValue) {
    var input = document.getElementById("inputfield");

    input.value += buttonValue;
}

function clearAll() {
    var input = document.getElementById("inputfield");
  
    input.value = "";
  }

  function delChar() {
    var input = document.getElementById("inputfield");
  
    input.value = input.value.slice(0, -1);
  }

  
  function equal() {
    var input = document.getElementById("inputfield");
  
    if (!input.value) {
      input.value = "error";
    } else {
      input.value = eval(input.value);
    }
  }

  function sin() {
  var input = document.getElementById("inputfield");

  input.value = Math.sin(input.value * Math.PI / 180);
}

function cos() {
  var input = document.getElementById("inputfield");

  input.value = Math.cos(input.value * Math.PI / 180);
}

function tan() {
  var input = document.getElementById("inputfield");
  
  input.value = Math.tan(input.value * Math.PI / 180);
}

    function log() {
    var input = document.getElementById("inputfield");

    input.value = Math.log10(input.value);
  }

    function exp() {
    var input = document.getElementById("inputfield");

    input.value = Math.exp(input.value);
  }

   function pi() {
  var input = document.getElementById("inputfield");

  input.value += Math.PI;
}

    function sqrt() {
    var input = document.getElementById("inputfield");

    input.value = Math.sqrt(input.value);
  }