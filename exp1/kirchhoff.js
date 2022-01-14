function mf1() {

  var res1 = document.getElementById("R1");

  var output1 = document.getElementById("demo1");
  output1.innerHTML = res1.value;

  res1.oninput = function () {
    output1.innerHTML = this.value;
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

function mf3() {
  var res3 = document.getElementById("R3");

  var output3 = document.getElementById("demo3");
  output3.innerHTML = res3.value;

  res3.oninput = function () {
    output3.innerHTML = this.value;
  }
}

function mf4() {
  var v = document.getElementById("vin");

  var output4 = document.getElementById("demo4");
  output4.innerHTML = v.value;

  v.oninput = function () {
    output4.innerHTML = this.value;
  }
}





function myFunction() {
  const myWindow = window.open("./theoryimage/procedure.pdf", "", "width=600,height=300");

}



var r0c0 = 0, r0c1 = 0, r0c2 = 0, r1c0 = 0, r1c1 = 0, r1c2 = 0, r2c0 = 0, r2c1 = 0, r2c2 = 0;

function checkFun() {


  //row1
  let vr1 = document.getElementById("vr1").value;
  let ir1 = document.getElementById("ir1").value;
  let pr1 = document.getElementById("pr1").value;

  //row2
  let vr2 = document.getElementById("vr2").value;
  let ir2 = document.getElementById("ir2").value;
  let pr2 = document.getElementById("pr2").value;

  //row3
  let vr3 = document.getElementById("vr3").value;
  let ir3 = document.getElementById("ir3").value;
  let pr3 = document.getElementById("pr3").value;

  let r1 = parseFloat(document.getElementById("R1").value);
  let r2 = parseFloat(document.getElementById("R2").value);
  let r3 = parseFloat(document.getElementById("R3").value);
  let v = parseFloat(document.getElementById("vin").value);

  let rs = (r2 * r3) / (r2 + r3);


  //voltage
  let idlevr2 = (rs / (rs + r1)) * v;//r2
  let idlevr3 = idlevr2;//r3
  let idlevr1 = v - idlevr2;//r1

  r0c0 = v - idlevr2;
  r1c0 = (rs / (rs + r1)) * v;
  r2c0 = idlevr2;


  //print in HTML page
  document.getElementById("nvr2").innerHTML = idlevr2.toFixed(6);
  document.getElementById("nvr3").innerHTML = idlevr3.toFixed(6);
  document.getElementById("nvr1").innerHTML = idlevr1.toFixed(6);

  //cureent accross resistor
  let idlecr1 = idlevr1 / r1;//cr1
  let idlecr2 = idlevr2 / r2;//cr2
  let idlecr3 = idlevr2 / r3;//cr3
  r0c1 = idlecr1;
  r1c1 = idlecr2;
  r2c1 = idlecr3;
  // //print in HTML page
  document.getElementById("nir1").innerHTML = idlecr1.toFixed(6);
  document.getElementById("nir2").innerHTML = idlecr2.toFixed(6);
  document.getElementById("nir3").innerHTML = idlecr3.toFixed(6);

  let idlepr1 = idlecr1 * idlevr1;
  let idlepr2 = idlecr2 * idlevr2;
  let idlepr3 = idlecr3 * idlevr3;

  // //print in HTML page
  document.getElementById("npr1").innerHTML = idlepr1.toFixed(6);
  document.getElementById("npr2").innerHTML = idlepr2.toFixed(6);
  document.getElementById("npr3").innerHTML = idlepr3.toFixed(6);


  r0c2 = idlepr1;
  r1c2 = idlepr2;
  r2c2 = idlepr3;

}

function editsimulatorans() {
  document.getElementById("r0c0").innerHTML = r0c0.toFixed(6);
  document.getElementById("r1c0").innerHTML = r1c0.toFixed(6);
  document.getElementById("r2c0").innerHTML = r2c0.toFixed(6);

  document.getElementById("r0c1").innerHTML = r0c1.toFixed(6);
  document.getElementById("r1c1").innerHTML = r1c1.toFixed(6);
  document.getElementById("r2c1").innerHTML = r2c1.toFixed(6);

  document.getElementById("r0c2").innerHTML = r0c2.toFixed(6);
  document.getElementById("r1c2").innerHTML = r1c2.toFixed(6);
  document.getElementById("r2c2").innerHTML = r2c2.toFixed(6);
}


function myFunctionAnswer() {
  const myWindow = window.open("./simulator_ans.html", "", "width=600,height=300");
  myWindow.opener.document.getElementById("demo").innerHTML = "HELLO!";
}

//voltage Verify
function checkvolt() {
  let vr1 = document.getElementById("vr1").value;
  let vr2 = document.getElementById("vr2").value;
  let vr3 = document.getElementById("vr3").value;

  let r1 = parseFloat(document.getElementById("R1").value);
  let r2 = parseFloat(document.getElementById("R2").value);
  let r3 = parseFloat(document.getElementById("R3").value);
  let v = parseFloat(document.getElementById("vin").value);

  let rs = (r2 * r3) / (r2 + r3);

  let idlevr2 = (rs / (rs + r1)) * v;//r2
  let idlevr3 = idlevr2;//r3
  let idlevr1 = v - idlevr2;//r1
  document.getElementById("vr1").classList.add("correct");
  document.getElementById("vr2").classList.add("correct");
  document.getElementById("vr3").classList.add("correct");
  if (Math.round(vr1) == Math.round(idlevr1) && Math.round(vr2) == Math.round(idlevr2) && Math.round(vr3) == Math.round(idlevr3)) {
    document.getElementById("voltverify").innerHTML = "Voltage Verified.";

  }
  else {

    if (Math.round(vr1) != Math.round(idlevr1)) {
      document.getElementById("voltverify").innerHTML = "Voltage across R1 is wrong! Try again.";
      document.getElementById("vr1").classList.add("incorrect");
    }

    if (Math.round(vr2) != Math.round(idlevr2)) {
      document.getElementById("voltverify").innerHTML = "Voltage across R2 is wrong! Try again.";
      document.getElementById("vr2").classList.add("incorrect");
    }

    if (Math.round(vr3) != Math.round(idlevr3)) {
      document.getElementById("voltverify").innerHTML = "Voltage across R3 is wrong! Try again.";
      document.getElementById("vr3").classList.add("incorrect");
    }
  }


}


//Current Verify 
function checkcur() {
  let ir1 = document.getElementById("ir1").value;
  let ir2 = document.getElementById("ir2").value;
  let ir3 = document.getElementById("ir3").value;

  let r1 = parseFloat(document.getElementById("R1").value);
  let r2 = parseFloat(document.getElementById("R2").value);
  let r3 = parseFloat(document.getElementById("R3").value);
  let v = parseFloat(document.getElementById("vin").value);

  let rs = (r2 * r3) / (r2 + r3);

  let idlevr2 = (rs / (rs + r1)) * v;//r2
  let idlevr3 = idlevr2;//r3
  let idlevr1 = v - idlevr2;//r1

  let idlecr1 = idlevr1 / r1;//cr1
  let idlecr2 = idlevr2 / r2;//cr2
  let idlecr3 = idlevr2 / r3;//cr3

  document.getElementById("ir1").classList.add("correct");
  document.getElementById("ir2").classList.add("correct");
  document.getElementById("ir3").classList.add("correct");

  if (Math.round(ir1) == Math.round(idlecr1) && Math.round(ir2) == Math.round(idlecr2) && Math.round(ir3) == Math.round(idlecr3)) {
    document.getElementById("curverify").innerHTML = "Current  Verified.";
  }
  else {

    if (Math.round(ir1) != Math.round(idlecr1)) {
      document.getElementById("curverify").innerHTML = "Current through R1 is wrong! Try again.";
      document.getElementById("ir1").classList.add("incorrect");
    }

    if (Math.round(ir2) != Math.round(idlecr2)) {
      document.getElementById("curverify").innerHTML = "Current through R2 is wrong! Try again.";
      document.getElementById("ir2").classList.add("incorrect");
    }

    if (Math.round(ir3) != Math.round(idlecr3)) {
      document.getElementById("curverify").innerHTML = "Current through R3 is wrong! Try again.";
      document.getElementById("ir3").classList.add("incorrect");
    }
  }
}

//Power Verify
function checkpow() {
  let pr1 = document.getElementById("pr1").value;
  let pr2 = document.getElementById("pr2").value;
  let pr3 = document.getElementById("pr3").value;

  let r1 = parseFloat(document.getElementById("R1").value);
  let r2 = parseFloat(document.getElementById("R2").value);
  let r3 = parseFloat(document.getElementById("R3").value);
  let v = parseFloat(document.getElementById("vin").value);

  let rs = (r2 * r3) / (r2 + r3);

  let idlevr2 = (rs / (rs + r1)) * v;//r2
  let idlevr3 = idlevr2;//r3
  let idlevr1 = v - idlevr2;//r1

  let idlecr1 = idlevr1 / r1;//cr1
  let idlecr2 = idlevr2 / r2;//cr2
  let idlecr3 = idlevr2 / r3;//cr3

  let idlepr1 = idlecr1 * idlevr1;
  let idlepr2 = idlecr2 * idlevr2;
  let idlepr3 = idlecr3 * idlevr3;

  document.getElementById("pr1").classList.add("correct");
  document.getElementById("pr2").classList.add("correct");
  document.getElementById("pr3").classList.add("correct");

  if (Math.round(pr1) == Math.round(idlepr1) && Math.round(pr2) == Math.round(idlepr2) && Math.round(pr3) == Math.round(idlepr3)) {
    document.getElementById("powverify").innerHTML = "Power Verified.";
  }
  else {

    if (Math.round(pr1) != Math.round(idlepr1)) {
      document.getElementById("powverify").innerHTML = "Power in R1 is wrong! Try again.";
      document.getElementById("pr1").classList.add("incorrect");

    }

    if (Math.round(pr2) != Math.round(idlepr2)) {
      document.getElementById("powverify").innerHTML = "Power in R2 is wrong! Try again.";
      document.getElementById("pr2").classList.add("incorrect");
    }

    if (Math.round(pr3) != Math.round(idlepr3)) {
      document.getElementById("powverify").innerHTML = "Power in R3 is wrong! Try again.";
      document.getElementById("pr3").classList.add("incorrect");
    }
  }



}
