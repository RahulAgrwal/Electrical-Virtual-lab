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




function solve(){
  var idlevr1 = 0, idlevr2 = 0, idlevr3 = 0, idlecr1 = 0, idlecr2 = 0, idlecr3 = 0, idlepr1 = 0, idlepr2 = 0, idlepr3 = 0;

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
   idlevr2 = (rs / (rs + r1)) * v;//r2
   idlevr3 = idlevr2;//r3
   idlevr1 = v - idlevr2;//r

  //cureent accross resistor
   idlecr1 = idlevr1 / r1;//cr1
   idlecr2 = idlevr2 / r2;//cr2
   idlecr3 = idlevr2 / r3;//cr3
  // //print in HTML page
   idlepr1 = idlecr1 * idlevr1;
   idlepr2 = idlecr2 * idlevr2;
   idlepr3 = idlecr3 * idlevr3;
   sessionStorage.setItem("nvr1",idlevr1);
   sessionStorage.setItem("nvr2",idlevr2);
   sessionStorage.setItem("nvr3",idlevr3);

   sessionStorage.setItem("nir1",idlecr1);
   sessionStorage.setItem("nir2",idlecr2);
   sessionStorage.setItem("nir3",idlecr3);

   sessionStorage.setItem("npr1",idlepr1);
   sessionStorage.setItem("npr2",idlepr2);
   sessionStorage.setItem("npr3",idlepr3);

}


function myFunctionAnswer() {
  const myWindow = window.open("./simulator_ans.html", "", "width=600,height=300");
  //myWindow.opener.document.getElementById("demo").innerHTML = "HELLO!";
}

function roundoff(a)
{
       let b=a.toFixed(5);
       return b;
}


//voltage Verify
function checkvolt() {
  let vr1 = parseFloat(document.getElementById("vr1").value);
  let vr2 = parseFloat(document.getElementById("vr2").value);
  let vr3 = parseFloat(document.getElementById("vr3").value);
  let count1=0,count2=0,count3=0;

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
  if(idlevr1<1)
{
 
  let a=roundoff(idlevr1);
  let b=roundoff(vr1);


  if(a==b)
  {
    count1=count1+1;
  }

}
else
{
  if (Math.round(vr1) == Math.round(idlevr1))
  {
    count1=count1+1;
  }
}
if(idlevr2<1)
{
 
  let c=roundoff(idlevr2);
  let d=roundoff(vr2);

  if(c==d)
  {
    count2=count2+1;
  }
}
else
{
    if(Math.round(vr2) == Math.round(idlevr2))
    {
      count2=count2+1;
    }

}
if(idlevr3<1)
{
 
  let e=roundoff(idlevr3);
  let f=roundoff(vr3);

  if(e==f)
  {
    count3=count3+1;
  }

}
else
{
  if(Math.round(vr3) == Math.round(idlevr3))
   {
    count3=count3+1;

   }
}

if(count2==0 && count3==0 && count1==0)
{
  document.getElementById("voltverify").innerHTML = "All voltages are wrong!!Try Again";
  document.getElementById("vr2").classList.add("incorrect");
  document.getElementById("vr3").classList.add("incorrect");
  document.getElementById("vr1").classList.add("incorrect");

}

if(count1==0 && count2==0 && count3==1)
{
  document.getElementById("voltverify").innerHTML = " Voltage across R1 and R2 are wrong!Try Again";
  document.getElementById("vr2").classList.add("incorrect");
  document.getElementById("vr3").classList.add("correct");
  document.getElementById("vr1").classList.add("incorrect");

}

if(count1==0 && count2==1 && count3==0)
{
  document.getElementById("voltverify").innerHTML = "Voltage across R1 and R3 are wrong!Try Again";
  document.getElementById("vr2").classList.add("correct");
  document.getElementById("vr3").classList.add("incorrect");
  document.getElementById("vr1").classList.add("incorrect");

}
if(count1==1 && count2==0 && count3==1)
{
  document.getElementById("voltverify").innerHTML = " Voltage across R2 is wrong!Try Again";
  document.getElementById("vr2").classList.add("incorrect");
  document.getElementById("vr3").classList.add("correct");
  document.getElementById("vr1").classList.add("correct");

}





if(count1==0 && count2==1 && count3==1)
{
  document.getElementById("voltverify").innerHTML = "Voltage across R1 is wrong!Try Again";
  document.getElementById("vr2").classList.add("correct");
  document.getElementById("vr3").classList.add("correct");
  document.getElementById("vr1").classList.add("incorrect");

}



if(count2==0 && count3==0 && count1==1)
{
  document.getElementById("voltverify").innerHTML = "Voltage across R2 and R3 are wrong.Try Again";
  document.getElementById("vr2").classList.add("incorrect");
  document.getElementById("vr3").classList.add("incorrect");
  document.getElementById("vr1").classList.add("correct");

}

if(count2==1 && count1==1 && count3==0)
{
  document.getElementById("voltverify").innerHTML = "Voltage across R3 is wrong.Try Again!";
  document.getElementById("vr3").classList.add("incorrect");
  document.getElementById("vr1").classList.add("correct");
  document.getElementById("vr2").classList.add("correct");

}
if(count1 ==1 && count2==1 && count3==1)
{
  document.getElementById("voltverify").innerHTML = "<b>Voltage Verified.</b>";
  document.getElementById("vr3").classList.add("correct");
  document.getElementById("vr1").classList.add("correct");
  document.getElementById("vr2").classList.add("correct");
}
  
  



}





//Current Verify 
function checkcur() {
  let ir1 = parseFloat(document.getElementById("ir1").value);
  let ir2 = parseFloat(document.getElementById("ir2").value);
  let ir3 = parseFloat(document.getElementById("ir3").value);
  let count1=0,count2=0,count3=0;


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
  if(idlecr3<1)
  {
   
    let e=roundoff(idlecr3);
    let f=roundoff(ir3);
  
    if(e==f)
    {
      count3=count3+1;
    }
  
  }
  else
  {
    if(Math.round(ir3) == Math.round(idlecr3))
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
    document.getElementById("curverify").innerHTML = " Current through R1 and R2 are wrong!Try Again";
    document.getElementById("ir2").classList.add("incorrect");
    document.getElementById("ir3").classList.add("correct");
    document.getElementById("ir1").classList.add("incorrect");
  
  }
  
  if(count1==0 && count2==1 && count3==0)
  {
    document.getElementById("curverify").innerHTML = " Current through R1 and R3 are wrong!Try Again";
    document.getElementById("ir2").classList.add("correct");
    document.getElementById("ir3").classList.add("incorrect");
    document.getElementById("ir1").classList.add("incorrect");
  
  }
  if(count1==1 && count2==0 && count3==1)
  {
    document.getElementById("curverify").innerHTML = " Current through R2 is wrong!Try Again";
    document.getElementById("ir2").classList.add("incorrect");
    document.getElementById("ir3").classList.add("correct");
    document.getElementById("ir1").classList.add("correct");
  
  }
  
  
  
  
  
  if(count1==0 && count2==1 && count3==1)
  {
    document.getElementById("curverify").innerHTML = " Current through R1 is wrong!Try Again";
    document.getElementById("ir2").classList.add("correct");
    document.getElementById("ir3").classList.add("correct");
    document.getElementById("ir1").classList.add("incorrect");
  
  }
  
  
  
  if(count2==0 && count3==0 && count1==1)
  {
    document.getElementById("curverify").innerHTML = "Current through R2 and R3 are wrong.Try Again";
    document.getElementById("ir2").classList.add("incorrect");
    document.getElementById("ir3").classList.add("incorrect");
    document.getElementById("ir1").classList.add("correct");
  
  }
  
  if(count2==1 && count1==1 && count3==0)
  {
    document.getElementById("curverify").innerHTML = "Current through R3 is wrong.Try Again!";
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
  let pr1 = parseFloat(document.getElementById("pr1").value);
  let pr2 = parseFloat(document.getElementById("pr2").value);
  let pr3 = parseFloat(document.getElementById("pr3").value);
  let count1=0,count2=0,count3=0;


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
  document.getElementById("powverify").innerHTML = " Powers in R1 and R2 are wrong!Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("incorrect");

}

if(count1==0 && count2==1 && count3==0)
{
  document.getElementById("powverify").innerHTML = "Powers in R1 and R3 are wrong!Try Again";
  document.getElementById("pr2").classList.add("correct");
  document.getElementById("pr3").classList.add("incorrect");
  document.getElementById("pr1").classList.add("incorrect");

}
if(count1==1 && count2==0 && count3==1)
{
  document.getElementById("powverify").innerHTML = " Power in R2 is wrong!Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("correct");

}





if(count1==0 && count2==1 && count3==1)
{
  document.getElementById("powverify").innerHTML = "Power in R1 is wrong!Try Again";
  document.getElementById("pr2").classList.add("correct");
  document.getElementById("pr3").classList.add("correct");
  document.getElementById("pr1").classList.add("incorrect");

}



if(count2==0 && count3==0 && count1==1)
{
  document.getElementById("powverify").innerHTML = "Powers in R2 and R3 are wrong.Try Again";
  document.getElementById("pr2").classList.add("incorrect");
  document.getElementById("pr3").classList.add("incorrect");
  document.getElementById("pr1").classList.add("correct");

}

if(count2==1 && count1==1 && count3==0)
{
  document.getElementById("powverify").innerHTML = "Powers in R3 is wrong.Try Again!";
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
