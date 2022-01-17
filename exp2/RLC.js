

function mf2() {
  var res2 = document.getElementById("R2");


  var output2 = document.getElementById("demo2");
  var output3 = document.getElementById("r");
  
  output2.innerHTML = res2.value;

  res2.oninput = function () {
    output2.innerHTML = this.value;
    output3.innerHTML = this.value;
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




// procedure link here
function myFunction() {
  const myWindow = window.open("./theoryimage/procedure.pdf", "", "width=600,height=300");

}




function solve(){
  var idletot=0,dlevr1 = 0, idlevr2 = 0, idlevr3 = 0, idlecr1 = 0, idlecr2 = 0, idlecr3 = 0, idlepr1 = 0, idlepr2 = 0, idlepr3 = 0, idleimp=0,idlereact=0;


let ir1 = document.getElementById("ir1").value;
let pr1 = document.getElementById("pr1").value;

//row2

let ir2 = document.getElementById("ir2").value;
let reactance = document.getElementById("reactance").value;
let pr2 = document.getElementById("pr2").value;

//row3

let ir3 = document.getElementById("ir3").value;
let impedence = document.getElementById("impedence").value;
let pr3 = document.getElementById("pr3").value;


let r2 = parseFloat(document.getElementById("R2").value);
let L = parseFloat(document.getElementById("R3").value);
let idlevr1 = parseFloat(document.getElementById("vin").value);
let v =  parseFloat(document.getElementById("vin").value);
idlecr1=v/r2;
idlepr1=v*idlecr1;

let xl=2*3.14*50*L;
idlereact=xl;
idleimp=Math.sqrt(Math.pow(r2,2)+Math.pow(xl,2));
let idleres=r2;

idlecr2=v/xl;
idlepr2=v*idlecr2;
idletot=Math.sqrt(Math.pow(idlecr1,2)+Math.pow(idlecr2,2));


idlevr1=v;
idlevr2=v;
idlevr3=v;

idlepr3=v*idletot;

// document.getElementById("d1").innerHTML = idlecr1;
// document.getElementById("d2").innerHTML = idlecr2;
// document.getElementById("d3").innerHTML = idletot;

// document.getElementById("d4").innerHTML = idlevr1;
// document.getElementById("d5").innerHTML = idlevr2;
// document.getElementById("d6").innerHTML = idlevr3;

// document.getElementById("d7").innerHTML = r2;
// document.getElementById("d8").innerHTML = reactance;
// document.getElementById("d9").innerHTML = impedence;

// document.getElementById("d10").innerHTML = idlepr1;
// document.getElementById("d11").innerHTML = idlepr2;
// document.getElementById("d12").innerHTML = idlepr3;









    sessionStorage.setItem("nvr1",idlevr1);
   sessionStorage.setItem("nvr2",idlevr2);
   sessionStorage.setItem("nvr3",idlevr3);

   sessionStorage.setItem("nir1",idlecr1);
   sessionStorage.setItem("nir2",idlecr2);
  sessionStorage.setItem("nir3",idletot);



  sessionStorage.setItem("res1",r2);
   sessionStorage.setItem("res2",idlereact);
   sessionStorage.setItem("res3",idleimp);


  

   sessionStorage.setItem("npr1",idlepr1);
  sessionStorage.setItem("npr2",idlepr2);
   sessionStorage.setItem("npr3",idlepr3);

}


function myFunctionAnswer() {
  const myWindow = window.open("./simulator_ans.html", "", "width=600,height=300");
  myWindow.opener.document.getElementById("demo").innerHTML = "HELLO!";
}

//voltage Verify
function checkvolt() {
  
  let reactance = document.getElementById("reactance").value;
  let impedence = document.getElementById("impedence").value;
  let L = parseFloat(document.getElementById("R3").value);
  let r2 = parseFloat(document.getElementById("R2").value);


  let xl=2*3.14*50*L;
  let idlereact=xl;
  let idleimp=Math.sqrt(Math.pow(r2,2)+Math.pow(xl,2));


  document.getElementById("reactance").classList.add("correct");
  document.getElementById("impedence").classList.add("correct");
  
  if (Math.round(reactance) == Math.round(idlereact) && Math.round(impedence) == Math.round(idleimp) ) {
    document.getElementById("voltverify").innerHTML = "<b>Reactance and Impedance Verified.</b>";
    document.getElementById("reactance").classList.add("correct");
    document.getElementById("impedence").classList.add("correct");

  }
  else {

    if (Math.round(reactance) != Math.round(idlereact)) {
      document.getElementById("voltverify").innerHTML = "Inductor Reactance is wrong! Try again.";
      document.getElementById("reactance").classList.add("incorrect");
    }

    if (Math.round(impedence) != Math.round(idleimp)) {
      document.getElementById("voltverify").innerHTML = "Impedance is wrong! Try again.";
      document.getElementById("impedence").classList.add("incorrect");
    }

   
  }


}


//Current Verify 
function checkcur() {
  let ir1 = document.getElementById("ir1").value;
  let ir2 = document.getElementById("ir2").value;
  let ir3 = document.getElementById("ir3").value;

  let r2 = parseFloat(document.getElementById("R2").value);
  let L = parseFloat(document.getElementById("R3").value);
  let v =  parseFloat(document.getElementById("vin").value);
  let idlecr1=v/r2;
  let xl=2*3.14*50*L;

 let idlecr2=v/xl;
 let idletot=Math.sqrt(Math.pow(idlecr1,2)+Math.pow(idlecr2,2));



  document.getElementById("ir1").classList.add("correct");
  document.getElementById("ir2").classList.add("correct");
  document.getElementById("ir3").classList.add("correct");

  if (Math.round(ir1) == Math.round(idlecr1) && Math.round(ir2) == Math.round(idlecr2) && Math.round(ir3) == Math.round(idletot)) {
    document.getElementById("curverify").innerHTML = "<b>Current  Verified.</b>";
    document.getElementById("ir1").classList.add("correct");
    document.getElementById("ir2").classList.add("correct");
    document.getElementById("ir3").classList.add("correct");
  }
  else {

    if (Math.round(ir1) != Math.round(idlecr1)) {
      document.getElementById("curverify").innerHTML = "Current through resistor R is wrong! Try again.";
      document.getElementById("ir1").classList.add("incorrect");
    }

    if (Math.round(ir2) != Math.round(idlecr2)) {
      document.getElementById("curverify").innerHTML = "Current through inductor L is wrong! Try again.";
      document.getElementById("ir2").classList.add("incorrect");
    }

    if (Math.round(ir3) != Math.round(idletot)) {
      document.getElementById("curverify").innerHTML = " Total Current is wrong! Try again.";
      document.getElementById("ir3").classList.add("incorrect");
    }
  }
}

//Power Verify
function checkpow() {
  var idletot=0,dlevr1 = 0, idlevr2 = 0, idlevr3 = 0, idlecr1 = 0, idlecr2 = 0, idlecr3 = 0, idlepr1 = 0, idlepr2 = 0, idlepr3 = 0, idleimp=0,idlereact=0;


  let ir1 = document.getElementById("ir1").value;
  let pr1 = document.getElementById("pr1").value;
  
  //row2
  
  let ir2 = document.getElementById("ir2").value;
  let reactance = document.getElementById("reactance").value;
  let pr2 = document.getElementById("pr2").value;
  
  //row3
  
  let ir3 = document.getElementById("ir3").value;
  let impedence = document.getElementById("impedence").value;
  let pr3 = document.getElementById("pr3").value;
  
  
  let r2 = parseFloat(document.getElementById("R2").value);
  let L = parseFloat(document.getElementById("R3").value);
  let idlevr1 = parseFloat(document.getElementById("vin").value);
  let v =  parseFloat(document.getElementById("vin").value);
  idlecr1=v/r2;
  idlepr1=v*idlecr1;
  
  let xl=2*3.14*50*L;
  idlereact=xl;
  idleimp=Math.sqrt(Math.pow(r2,2)+Math.pow(xl,2));
  let idleres=r2;
  
  idlecr2=v/xl;
  idlepr2=v*idlecr2;
  idletot=Math.sqrt(Math.pow(idlecr1,2)+Math.pow(idlecr2,2));
  
  
  idlevr1=v;
  idlevr2=v;
  idlevr3=v;
  
  idlepr3=v*idletot;

  document.getElementById("pr1").classList.add("correct");
  document.getElementById("pr2").classList.add("correct");
  document.getElementById("pr3").classList.add("correct");

  if (Math.round(pr1) == Math.round(idlepr1) && Math.round(pr2) == Math.round(idlepr2) && Math.round(pr3) == Math.round(idlepr3)) {
    document.getElementById("powverify").innerHTML = "<b>Power Verified.</b>";
    document.getElementById("pr1").classList.add("correct");
  document.getElementById("pr2").classList.add("correct");
  document.getElementById("pr3").classList.add("correct");

  }
  else {

    if (Math.round(pr1) != Math.round(idlepr1)) {
      document.getElementById("powverify").innerHTML = "Power in R is wrong! Try again.";
      document.getElementById("pr1").classList.add("incorrect");

    }

    if (Math.round(pr2) != Math.round(idlepr2)) {
      document.getElementById("powverify").innerHTML = "Power in L is wrong! Try again.";
      document.getElementById("pr2").classList.add("incorrect");
    }

    if (Math.round(pr3) != Math.round(idlepr3)) {
      document.getElementById("powverify").innerHTML = " Total Power is wrong! Try again.";
      document.getElementById("pr3").classList.add("incorrect");
    }
  }



}

//rc circuit
function solve2(){
  var idletot=0,dlevr1 = 0, idlevr2 = 0, idlevr3 = 0, idlecr1 = 0, idlecr2 = 0, idlecr3 = 0, idlepr1 = 0, idlepr2 = 0, idlepr3 = 0, idleimp=0,idlereact=0;


let ir1 = document.getElementById("ir1").value;
let pr1 = document.getElementById("pr1").value;

//row2

let ir2 = document.getElementById("ir2").value;
let reactance = document.getElementById("reactance").value;
let pr2 = document.getElementById("pr2").value;

//row3

let ir3 = document.getElementById("ir3").value;
let impedence = document.getElementById("impedence").value;
let pr3 = document.getElementById("pr3").value;


let r2 = parseFloat(document.getElementById("R2").value);
let C = parseFloat(document.getElementById("R3").value);
let idlevr1 = parseFloat(document.getElementById("vin").value);
let v =  parseFloat(document.getElementById("vin").value);
let f =  parseFloat(document.getElementById("f").value);
idlecr1=v/r2;
idlepr1=v*idlecr1;

let xl=1/(2*3.14*f*C);
idlereact=xl;

let idleres=r2;

idlecr2=v/xl;
idlepr2=v*idlecr2;
idletot=Math.sqrt(Math.pow(idlecr1,2)+Math.pow(idlecr2,2));
idleimp=v/idletot;

idlevr1=v;
idlevr2=v;
idlevr3=v;

idlepr3=v*idletot;

// document.getElementById("d1").innerHTML = idlecr1;
// document.getElementById("d2").innerHTML = idlecr2;
// document.getElementById("d3").innerHTML = idletot;

// document.getElementById("d4").innerHTML = idlevr1;
// document.getElementById("d5").innerHTML = idlevr2;
// document.getElementById("d6").innerHTML = idlevr3;

// document.getElementById("d7").innerHTML = r2;
// document.getElementById("d8").innerHTML = reactance;
// document.getElementById("d9").innerHTML = impedence;

// document.getElementById("d10").innerHTML = idlepr1;
// document.getElementById("d11").innerHTML = idlepr2;
// document.getElementById("d12").innerHTML = idlepr3;









    sessionStorage.setItem("nvr1",idlevr1);
   sessionStorage.setItem("nvr2",idlevr2);
   sessionStorage.setItem("nvr3",idlevr3);

   sessionStorage.setItem("nir1",idlecr1);
   sessionStorage.setItem("nir2",idlecr2);
  sessionStorage.setItem("nir3",idletot);



  sessionStorage.setItem("res1",r2);
   sessionStorage.setItem("res2",idlereact);
   sessionStorage.setItem("res3",idleimp);


  

   sessionStorage.setItem("npr1",idlepr1);
  sessionStorage.setItem("npr2",idlepr2);
   sessionStorage.setItem("npr3",idlepr3);

}








function checkvolt2() {
  
  let reactance = document.getElementById("reactance").value;
  let impedence = document.getElementById("impedence").value;
  let L = parseFloat(document.getElementById("R3").value);
  let r2 = parseFloat(document.getElementById("R2").value);


  let xc=1/(2*3.14*reactance);
  let idlereact=xc;
  let idleimp=xc/(Math.sqrt(Math.pow(r2,2)+Math.pow(xc,2)));


  document.getElementById("reactance").classList.add("correct");
  document.getElementById("impedence").classList.add("correct");
  
  if (Math.round(reactance) == Math.round(idlereact) && Math.round(impedence) == Math.round(idleimp) ) {
    document.getElementById("voltverify").innerHTML = "<b>Reactance and Impedance Verified.</b>";
    document.getElementById("reactance").classList.add("correct");
    document.getElementById("impedence").classList.add("correct");

  }
  else {

    if (Math.round(reactance) != Math.round(idlereact)) {
      document.getElementById("voltverify").innerHTML = "Inductor Reactance is wrong! Try again.";
      document.getElementById("reactance").classList.add("incorrect");
    }

    if (Math.round(impedence) != Math.round(idleimp)) {
      document.getElementById("voltverify").innerHTML = "Impedance is wrong! Try again.";
      document.getElementById("impedence").classList.add("incorrect");
    }

   
  }


}

