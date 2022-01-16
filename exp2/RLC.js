function mf1() {

  var res1 = document.getElementById("R1");

  var output1 = document.getElementById("demo1");
  var output2 = document.getElementById("r");

  output1.innerHTML = res1.value;

  res1.oninput = function () {
    output1.innerHTML = this.value;
    output2.innerHTML = this.value;
  }
}

function mf2() {
  var res2 = document.getElementById("R2");

  var output2 = document.getElementById("demo2");
  output2.innerHTML = res2.value;

  res2.oninput = function () {
    output2.innerHTML = this.value;
  }
}

function mf4() {
  var v = document.getElementById("vin");

  var output4 = document.getElementById("demo4");
  var output5 = document.getElementById("demo5");
  var output6 = document.getElementById("demo6");
  var output7 = document.getElementById("demo7");
  output4.innerHTML = v.value;

  v.oninput = function () {
    output4.innerHTML = this.value;
    output5.innerHTML = this.value;
    output6.innerHTML = this.value;
    output7.innerHTML = this.value;
    
  }
}


//procedure link here
function myFunction() {
  const myWindow = window.open("", "", "width=600,height=300");

}

