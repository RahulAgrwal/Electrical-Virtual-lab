

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
  var f=document.getElementById("f");

  var output4 = document.getElementById("demo4");
  var output5 = document.getElementById("demo5");
  var output6 = document.getElementById("demo6");
  var output7 = document.getElementById("demo7");
  var output9 = document.getElementById("demo8");
  var output8=document.getElementById("d5");
  output4.innerHTML = v.value;

  v.oninput = function () {
    output4.innerHTML = this.value;
    output5.innerHTML = this.value;
    output6.innerHTML = this.value;
    output7.innerHTML = this.value;
    output9.innerHTML = this.value;
  }
  f.oninput=function ()
  {
    output8.innerHTML=this.value;
  }
}

function mf1() {
  var res3 = document.getElementById("R1");

  var output3 = document.getElementById("demo1");
  output3.innerHTML = res3.value;

  res3.oninput = function () {
    output3.innerHTML = this.value;
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
let f =  parseFloat(document.getElementById("f").value);


idlecr1=v/r2;
idlepr1=v*idlecr1;

let xl=2*3.14*f*L;
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


function myFunctionAnswer() {
  const myWindow = window.open("./simulator_ans.html", "", "width=600,height=300");
  myWindow.opener.document.getElementById("demo").innerHTML = "HELLO!";
}

//voltage Verify
function checkvolt() {
  
  let reactance = parseFloat(document.getElementById("reactance").value);
  let impedence = parseFloat(document.getElementById("impedence").value);
  let L = parseFloat(document.getElementById("R3").value);
  let r2 = parseFloat(document.getElementById("R2").value);
  let v =  parseFloat(document.getElementById("vin").value);
  let f =  parseFloat(document.getElementById("f").value);
  let count1=0,count2=0;



  let xl=2*3.14*f*L;
  let idlereact=xl;

   let idlecr1=v/r2;
  let idlecr2=v/xl;
  let idletot=Math.sqrt(Math.pow(idlecr1,2)+Math.pow(idlecr2,2));

  let idleimp=v/idletot;



  document.getElementById("reactance").classList.add("correct");
  document.getElementById("impedence").classList.add("correct");


  if(idlereact<1)
  {
   
    let a=roundoff(idlereact);
    let b=roundoff(reactance);
  
  
    if(a==b)
    {
      count1=count1+1;
    }
  
  }
  else
  {
    if (Math.round(reactance) == Math.round(idlereact))
    {
      count1=count1+1;
    }
  }
  if(idleimp<1)
  {
   
    let c=roundoff(idleimp);
    let d=roundoff(impedence);
  
    if(c==d)
    {
      count2=count2+1;
    }
  }
  else
  {
      if(Math.round(impedence) == Math.round(idleimp))
      {
        count2=count2+1;
      }
  
  }
  if(count1==0 && count2==0)
  {
    document.getElementById("voltverify").innerHTML=" Reactance and Impedance are wrong!!Try Again.";
    document.getElementById("reactance").classList.add("incorrect");
    document.getElementById("impedence").classList.add("incorrect");
  }
  
  if(count1==0 && count2==1)
  {
    document.getElementById("voltverify").innerHTML=" Reactance is wrong!!Try Again.";
    document.getElementById("reactance").classList.add("incorrect");
    document.getElementById("impedence").classList.add("correct");
  }
  
  if(count1==1 && count2==0)
  {
    document.getElementById("voltverify").innerHTML=" Impedance is wrong!!Try Again.";
    document.getElementById("reactance").classList.add("correct");
    document.getElementById("impedence").classList.add("incorrect");
  }
  
  if(count1==1 && count2==1)
  {
    document.getElementById("voltverify").innerHTML=" <b>Reactance and Impedance verified.</b>";
    document.getElementById("reactance").classList.add("correct");
    document.getElementById("impedence").classList.add("correct");
  }
  
  

}


//Current Verify 
function checkcur() {
  let ir1 = parseFloat(document.getElementById("ir1").value);
  let ir2 = parseFloat(document.getElementById("ir2").value);

  let ir3 = parseFloat(document.getElementById("ir3").value);
  let r2 = parseFloat(document.getElementById("R2").value);
  let L = parseFloat(document.getElementById("R3").value);
  let v =  parseFloat(document.getElementById("vin").value);
  let f =  parseFloat(document.getElementById("f").value);
  let count1=0,count2=0,count3=0;



  let idlecr1=v/r2;
  let xl=2*3.14*f*L;

 let idlecr2=v/xl;
 let idletot=Math.sqrt(Math.pow(idlecr1,2)+Math.pow(idlecr2,2));



  document.getElementById("ir1").classList.add("correct");
  document.getElementById("ir2").classList.add("correct");
  document.getElementById("ir3").classList.add("correct");

  if(idlecr1<1)
  {
   
    let a=roundoff(idlecr1);
    let b=roundoff(ir1);
  
  
    if(a==b)
    {
      count1=count1+1;
    }
  
  }
  else
  {
    if (Math.round(ir1) == Math.round(idlecr1))
    {
      count1=count1+1;
    }
  }
  if(idlecr2<1)
  {
   
    let c=roundoff(idlecr2);
    let d=roundoff(ir2);
  
    if(c==d)
    {
      count2=count2+1;
    }
  }
  else
  {
      if(Math.round(ir2) == Math.round(idlecr2))
      {
        count2=count2+1;
      }
  
  }
  if(idletot<1)
  {
   
    let e=roundoff(idletot);
    let f=roundoff(ir3);
  
    if(e==f)
    {
      count3=count3+1;
    }
  
  }
  else
  {
    if(Math.round(ir3) == Math.round(idletot))
     {
      count3=count3+1;
  
     }
  }
  
  if(count2==0 && count3==0 && count1==0)
  {
    document.getElementById("curverify").innerHTML = "All currents are wrong!!Try Again";
    document.getElementById("ir2").classList.add("incorrect");
    document.getElementById("ir3").classList.add("incorrect");
    document.getElementById("ir1").classList.add("incorrect");
  
  }
  
  if(count1==0 && count2==0 && count3==1)
  {
    document.getElementById("curverify").innerHTML = " Current through R and L are wrong!Try Again";
    document.getElementById("ir2").classList.add("incorrect");
    document.getElementById("ir3").classList.add("correct");
    document.getElementById("ir1").classList.add("incorrect");
  
  }
  
  if(count1==0 && count2==1 && count3==0)
  {
    document.getElementById("curverify").innerHTML = " Total Current and Current through resistor are wrong!Try Again";
    document.getElementById("ir2").classList.add("correct");
    document.getElementById("ir3").classList.add("incorrect");
    document.getElementById("ir1").classList.add("incorrect");
  
  }
  if(count1==1 && count2==0 && count3==1)
  {
    document.getElementById("curverify").innerHTML = " Current through L is wrong!Try Again";
    document.getElementById("ir2").classList.add("incorrect");
    document.getElementById("ir3").classList.add("correct");
    document.getElementById("ir1").classList.add("correct");
  
  }
  
  
  
  
  
  if(count1==0 && count2==1 && count3==1)
  {
    document.getElementById("curverify").innerHTML = " Current through R is wrong!Try Again";
    document.getElementById("ir2").classList.add("correct");
    document.getElementById("ir3").classList.add("correct");
    document.getElementById("ir1").classList.add("incorrect");
  
  }
  
  
  
  if(count2==0 && count3==0 && count1==1)
  {
    document.getElementById("curverify").innerHTML = "Current through L and Total current are wrong.Try Again";
    document.getElementById("ir2").classList.add("incorrect");
    document.getElementById("ir3").classList.add("incorrect");
    document.getElementById("ir1").classList.add("correct");
  
  }
  
  if(count2==1 && count1==1 && count3==0)
  {
    document.getElementById("curverify").innerHTML = "Total current is wrong.Try Again!";
    document.getElementById("ir3").classList.add("incorrect");
    document.getElementById("ir1").classList.add("correct");
    document.getElementById("ir2").classList.add("correct");
  
  }
  if(count1 ==1 && count2==1 && count3==1)
  {
    document.getElementById("curverify").innerHTML = "<b>Current  Verified.</b>";
    document.getElementById("ir3").classList.add("correct");
    document.getElementById("ir1").classList.add("correct");
    document.getElementById("ir2").classList.add("correct");
  }
  


 
}

//Power Verify
function checkpow() {
  var idletot=0,dlevr1 = 0, idlevr2 = 0, idlevr3 = 0, idlecr1 = 0, idlecr2 = 0, idlecr3 = 0, idlepr1 = 0, idlepr2 = 0, idlepr3 = 0, idleimp=0,idlereact=0;



  let pr1 = parseFloat(document.getElementById("pr1").value);
  let pr2 = parseFloat(document.getElementById("pr2").value);
  let pr3 = parseFloat(document.getElementById("pr3").value);
  
  
  let r2 = parseFloat(document.getElementById("R2").value);
  let L = parseFloat(document.getElementById("R3").value);
  let idlevr1 = parseFloat(document.getElementById("vin").value);
  let v =  parseFloat(document.getElementById("vin").value);
  let f =  parseFloat(document.getElementById("f").value);
  let count1=0,count2=0,count3=0;


  idlecr1=v/r2;
  idlepr1=v*idlecr1;
  
  let xl=2*3.14*f*L;
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

  document.getElementById("pr1").classList.add("correct");
  document.getElementById("pr2").classList.add("correct");
  document.getElementById("pr3").classList.add("correct");
 

  if(idlepr1<1)
{
 
  let a=roundoff(idlepr1);
  let b=roundoff(pr1);


  if(a==b)
  {
    count1=count1+1;
  }

}
else
{
  if (Math.round(pr1) == Math.round(idlepr1))
  {
    count1=count1+1;
  }
}
if(idlepr2<1)
{
 
  let c=roundoff(idlepr2);
  let d=roundoff(pr2);

  if(c==d)
  {
    count2=count2+1;
  }
}
else
{
    if(Math.round(pr2) == Math.round(idlepr2))
    {
      count2=count2+1;
    }

}
if(idlepr3<1)
{
 
  let e=roundoff(idlepr3);
  let f=roundoff(pr3);

  if(e==f)
  {
    count3=count3+1;
  }

}
else
{
  if(Math.round(pr3) == Math.round(idlepr3))
   {
    count3=count3+1;

   }
}

if(count2==0 && count3==0 && count1==0)
{
  document.getElementById("powverify").innerHTML = "All powers are wrong!!Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("incorrect");
  document.getElementById("pr1").classList.add("incorrect");

}

if(count1==0 && count2==0 && count3==1)
{
  document.getElementById("powverify").innerHTML = " Powers in R and L are wrong!Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("incorrect");

}

if(count1==0 && count2==1 && count3==0)
{
  document.getElementById("powverify").innerHTML = " Total Power and Power in resistor are wrong!Try Again";
  document.getElementById("pr2").classList.add("correct");
  document.getElementById("pr3").classList.add("incorrect");
  document.getElementById("pr1").classList.add("incorrect");

}
if(count1==1 && count2==0 && count3==1)
{
  document.getElementById("powverify").innerHTML = " Power in L is wrong!Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("correct");

}





if(count1==0 && count2==1 && count3==1)
{
  document.getElementById("powverify").innerHTML = "Power in R is wrong!Try Again";
  document.getElementById("pr2").classList.add("correct");
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("incorrect");

}



if(count2==0 && count3==0 && count1==1)
{
  document.getElementById("powverify").innerHTML = "Power in L and Total Power are wrong.Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("incorrect");
  document.getElementById("pr1").classList.add("correct");

}

if(count2==1 && count1==1 && count3==0)
{
  document.getElementById("powverify").innerHTML = "Total power is wrong.Try Again!";
  document.getElementById("pr3").classList.add("incorrect");
  document.getElementById("pr1").classList.add("correct");
  document.getElementById("pr2").classList.add("correct");

}
if(count1 ==1 && count2==1 && count3==1)
{
  document.getElementById("powverify").innerHTML = "<b>Power  Verified.</b>";
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("correct");
  document.getElementById("pr2").classList.add("correct");
}
  
  



}

//rc circuit
function solve2() {
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
  
  let reactance =parseFloat(document.getElementById("reactance").value);
  let impedence = parseFloat(document.getElementById("impedence").value);
  let C = parseFloat(document.getElementById("R3").value);
  let r2 = parseFloat(document.getElementById("R2").value);
  let f =  parseFloat(document.getElementById("f").value);
  let count1=0,count2=0;



  let v =  parseFloat(document.getElementById("vin").value);
  let idlecr1=v/r2;
  let xl=1/(2*3.14*f*C);
let idlecr2=v/xl;
let idletot=Math.sqrt(Math.pow(idlecr1,2)+Math.pow(idlecr2,2));



  let xc=1/(2*3.14*f*C);
  let idlereact=xc;
  let idleimp=v/idletot;


  document.getElementById("reactance").classList.add("correct");
  document.getElementById("impedence").classList.add("correct");
  
  if(idlereact<1)
{
 
  let a=roundoff(idlereact);
  let b=roundoff(reactance);


  if(a==b)
  {
    count1=count1+1;
  }

}
else
{
  if (Math.round(reactance) == Math.round(idlereact))
  {
    count1=count1+1;
  }
}
if(idleimp<1)
{
 
  let c=roundoff(idleimp);
  let d=roundoff(impedence);

  if(c==d)
  {
    count2=count2+1;
  }
}
else
{
    if(Math.round(impedence) == Math.round(idleimp))
    {
      count2=count2+1;
    }

}
if(count1==0 && count2==0)
{
  document.getElementById("voltverify").innerHTML=" Reactance and Impedance are wrong!!Try Again.";
  document.getElementById("reactance").classList.add("incorrect");
  document.getElementById("impedence").classList.add("incorrect");
}

if(count1==0 && count2==1)
{
  document.getElementById("voltverify").innerHTML=" Reactance is wrong!!Try Again.";
  document.getElementById("reactance").classList.add("incorrect");
  document.getElementById("impedence").classList.add("correct");
}

if(count1==1 && count2==0)
{
  document.getElementById("voltverify").innerHTML=" Impedance is wrong!!Try Again.";
  document.getElementById("reactance").classList.add("correct");
  document.getElementById("impedence").classList.add("incorrect");
}

if(count1==1 && count2==1)
{
  document.getElementById("voltverify").innerHTML=" <b>Reactance and Impedance verified.</b>";
  document.getElementById("reactance").classList.add("correct");
  document.getElementById("impedence").classList.add("correct");
}

}

//current in RC

function checkcur2() {
  let ir1 = parseFloat(document.getElementById("ir1").value);
  let ir2 = parseFloat(document.getElementById("ir2").value);

  let ir3 = parseFloat(document.getElementById("ir3").value);

  let f =  parseFloat(document.getElementById("f").value);


  let r2 = parseFloat(document.getElementById("R2").value);
  let C = parseFloat(document.getElementById("R3").value);
  let v =  parseFloat(document.getElementById("vin").value);
  let idlecr1=v/r2;
  let xc=1/(2*3.14*f*C);

 let idlecr2=v/xc;
 let idletot=Math.sqrt(Math.pow(idlecr1,2)+Math.pow(idlecr2,2));
let count1=0,count2=0,count3=0;


document.getElementById("ir1").classList.add("correct");
  document.getElementById("ir2").classList.add("correct");
  document.getElementById("ir3").classList.add("correct");


if(idlecr1<1)
{
 
  let a=roundoff(idlecr1);
  let b=roundoff(ir1);


  if(a==b)
  {
    count1=count1+1;
  }

}
else
{
  if (Math.round(ir1) == Math.round(idlecr1))
  {
    count1=count1+1;
  }
}
if(idlecr2<1)
{
 
  let c=roundoff(idlecr2);
  let d=roundoff(ir2);

  if(c==d)
  {
    count2=count2+1;
  }
}
else
{
    if(Math.round(ir2) == Math.round(idlecr2))
    {
      count2=count2+1;
    }

}
if(idletot<1)
{
 
  let e=roundoff(idletot);
  let f=roundoff(ir3);

  if(e==f)
  {
    count3=count3+1;
  }

}
else
{
  if(Math.round(ir3) == Math.round(idletot))
   {
    count3=count3+1;

   }
}

if(count2==0 && count3==0 && count1==0)
{
  document.getElementById("curverify").innerHTML = "All currents are wrong!!Try Again";
  document.getElementById("ir2").classList.add("incorrect");
  document.getElementById("ir3").classList.add("incorrect");
  document.getElementById("ir1").classList.add("incorrect");

}

if(count1==0 && count2==0 && count3==1)
{
  document.getElementById("curverify").innerHTML = " Current through R and C are wrong!Try Again";
  document.getElementById("ir2").classList.add("incorrect");
  document.getElementById("ir3").classList.add("correct");
  document.getElementById("ir1").classList.add("incorrect");

}

if(count1==0 && count2==1 && count3==0)
{
  document.getElementById("curverify").innerHTML = " Total Current and Current through resistor are wrong!Try Again";
  document.getElementById("ir2").classList.add("correct");
  document.getElementById("ir3").classList.add("incorrect");
  document.getElementById("ir1").classList.add("incorrect");

}
if(count1==1 && count2==0 && count3==1)
{
  document.getElementById("curverify").innerHTML = " Current through C is wrong!Try Again";
  document.getElementById("ir2").classList.add("incorrect");
  document.getElementById("ir3").classList.add("correct");
  document.getElementById("ir1").classList.add("correct");

}





if(count1==0 && count2==1 && count3==1)
{
  document.getElementById("curverify").innerHTML = " Current through R is wrong!Try Again";
  document.getElementById("ir2").classList.add("correct");
  document.getElementById("ir3").classList.add("correct");
  document.getElementById("ir1").classList.add("incorrect");

}



if(count2==0 && count3==0 && count1==1)
{
  document.getElementById("curverify").innerHTML = "Current through C and Total current are wrong.Try Again";
  document.getElementById("ir2").classList.add("incorrect");
  document.getElementById("ir3").classList.add("incorrect");
  document.getElementById("ir1").classList.add("correct");

}

if(count2==1 && count1==1 && count3==0)
{
  document.getElementById("curverify").innerHTML = "Total current is wrong.Try Again!";
  document.getElementById("ir3").classList.add("incorrect");
  document.getElementById("ir1").classList.add("correct");
  document.getElementById("ir2").classList.add("correct");

}
if(count1 ==1 && count2==1 && count3==1)
{
  document.getElementById("curverify").innerHTML = "<b>Current  Verified.</b>";
  document.getElementById("ir3").classList.add("correct");
  document.getElementById("ir1").classList.add("correct");
  document.getElementById("ir2").classList.add("correct");
}

}

function roundoff(a)
{
       let b=a.toFixed(5);
       return b;
}




function checkpow2()
{
  var idletot=0,dlevr1 = 0, idlevr2 = 0, idlevr3 = 0, idlecr1 = 0, idlecr2 = 0, idlecr3 = 0, idlepr1 = 0, idlepr2 = 0, idlepr3 = 0, idleimp=0,idlereact=0;

  let pr1 = parseFloat(document.getElementById("pr1").value);
  let pr2 = parseFloat(document.getElementById("pr2").value);
  let pr3 = parseFloat(document.getElementById("pr3").value);

let r2 = parseFloat(document.getElementById("R2").value);
let C = parseFloat(document.getElementById("R3").value);
let idlevr1 = parseFloat(document.getElementById("vin").value);
let v =  parseFloat(document.getElementById("vin").value);
let f =  parseFloat(document.getElementById("f").value);
let count1=0,count2=0,count3=0;

idlecr1=v/r2;
idlepr1=v*idlecr1;

let xl=1/(2*3.14*f*C);
idlereact=xl;



idlecr2=v/xl;
idlepr2=v*idlecr2;
idletot=Math.sqrt(Math.pow(idlecr1,2)+Math.pow(idlecr2,2));
idleimp=v/idletot;



idlepr3=v*idletot;


document.getElementById("pr1").classList.add("correct");
document.getElementById("pr2").classList.add("correct");
document.getElementById("pr3").classList.add("correct");



if(idlepr1<1)
{
 
  let a=roundoff(idlepr1);
  let b=roundoff(pr1);


  if(a==b)
  {
    count1=count1+1;
  }

}
else
{
  if (Math.round(pr1) == Math.round(idlepr1))
  {
    count1=count1+1;
  }
}
if(idlepr2<1)
{
 
  let c=roundoff(idlepr2);
  let d=roundoff(pr2);

  if(c==d)
  {
    count2=count2+1;
  }
}
else
{
    if(Math.round(pr2) == Math.round(idlepr2))
    {
      count2=count2+1;
    }

}
if(idlepr3<1)
{
 
  let e=roundoff(idlepr3);
  let f=roundoff(pr3);

  if(e==f)
  {
    count3=count3+1;
  }

}
else
{
  if(Math.round(pr3) == Math.round(idlepr3))
   {
    count3=count3+1;

   }
}

if(count2==0 && count3==0 && count1==0)
{
  document.getElementById("powverify").innerHTML = "All powers are wrong!!Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("incorrect");
  document.getElementById("pr1").classList.add("incorrect");

}

if(count1==0 && count2==0 && count3==1)
{
  document.getElementById("powverify").innerHTML = " Powers in R and C are wrong!Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("incorrect");

}

if(count1==0 && count2==1 && count3==0)
{
  document.getElementById("powverify").innerHTML = " Total Power and Power in resistor are wrong!Try Again";
  document.getElementById("pr2").classList.add("correct");
  document.getElementById("pr3").classList.add("incorrect");
  document.getElementById("pr1").classList.add("incorrect");

}
if(count1==1 && count2==0 && count3==1)
{
  document.getElementById("powverify").innerHTML = " Power in C is wrong!Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("correct");

}





if(count1==0 && count2==1 && count3==1)
{
  document.getElementById("powverify").innerHTML = "Power in R is wrong!Try Again";
  document.getElementById("pr2").classList.add("correct");
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("incorrect");

}



if(count2==0 && count3==0 && count1==1)
{
  document.getElementById("powverify").innerHTML = "Power in C and Total Power are wrong.Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("incorrect");
  document.getElementById("pr1").classList.add("correct");

}

if(count2==1 && count1==1 && count3==0)
{
  document.getElementById("powverify").innerHTML = "Total power is wrong.Try Again!";
  document.getElementById("pr3").classList.add("incorrect");
  document.getElementById("pr1").classList.add("correct");
  document.getElementById("pr2").classList.add("correct");

}
if(count1 ==1 && count2==1 && count3==1)
{
  document.getElementById("powverify").innerHTML = "<b>Power  Verified.</b>";
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("correct");
  document.getElementById("pr2").classList.add("correct");
}



}

//rlc ckt

function solve3() {
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
let L=parseFloat(document.getElementById("R1").value);
let C = parseFloat(document.getElementById("R3").value);
let idlevr1 = parseFloat(document.getElementById("vin").value);
let v =  parseFloat(document.getElementById("vin").value);
let f =  parseFloat(document.getElementById("f").value);
idlecr1=v/r2;
idlepr1=v*idlecr1;

let xl=2*3.14*f*L;
let xlc=1/(2*3.14*f*C);
let idlereactl=xl;
let idlereactc=xlc;

let idleres=r2;

idlecr2=v/xl;
idlepr2=v*idlecr2;

idlecr3=v/xlc;

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
   sessionStorage.setItem("res2",idlereactl);
   sessionStorage.setItem("res3",idleimp);


  

   sessionStorage.setItem("npr1",idlepr1);
  sessionStorage.setItem("npr2",idlepr2);
   sessionStorage.setItem("npr3",idlepr3);

}


