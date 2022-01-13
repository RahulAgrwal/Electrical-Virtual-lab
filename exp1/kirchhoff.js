function mf1(){
   
    var res1 = document.getElementById("R1");

    var output1 = document.getElementById("demo1");
  output1.innerHTML = res1.value;

  res1.oninput = function() {
    output1.innerHTML = this.value;
  }
   }

   function mf2(){
    var res2 = document.getElementById("R2");

    var output2 = document.getElementById("demo2");
  output2.innerHTML = res2.value;

  res2.oninput = function() {
    output2.innerHTML = this.value;
   }
}

   function mf3(){
    var res3 = document.getElementById("R3");

    var output3 = document.getElementById("demo3");
  output3.innerHTML = res3.value;

  res3.oninput = function() {
    output3.innerHTML = this.value;
  }
   }

   function mf4(){
    var v= document.getElementById("vin");

    var output4 = document.getElementById("demo4");
  output4.innerHTML = v.value;

  v.oninput = function() {
    output4.innerHTML = this.value;
  }
   }





   function myFunction() {
    const myWindow = window.open("Procedure.html", "", "width=600,height=300");
    myWindow.opener.document.getElementById("demo").innerHTML = "HELLO!";
  }



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
  



    let r1 = parseFloat( document.getElementById("R1").value);
    let r2 =parseFloat( document.getElementById("R2").value);
    let r3 = parseFloat(document.getElementById("R3").value);
    let v =  parseFloat(document.getElementById("vin").value);

   
    
    let rs=(r2*r3)/(r2+r3);
      
      
      //voltage
      let idlevr2=(rs/(rs+r1))*v;//r2
      let idlevr3=idlevr2;//r3
      let idlevr1=v-idlevr2;//r1
      //print in HTML page
      document.getElementById("nvr2").innerHTML = idlevr2.toFixed(2);
      document.getElementById("nvr3").innerHTML = idlevr3.toFixed(2);
      document.getElementById("nvr1").innerHTML = idlevr1.toFixed(2);

     //cureent accross resistor
     let idlecr1=idlevr1/r1;//cr1
      let idlecr2=idlevr2/r2;//cr2
      let idlecr3=idlevr2/r3;//cr3
     // //print in HTML page
     document.getElementById("nir1").innerHTML = idlecr1.toFixed(2);
      document.getElementById("nir2").innerHTML = idlecr2.toFixed(2);
     document.getElementById("nir3").innerHTML = idlecr3.toFixed(2);

     let idlepr1=idlecr1*idlevr1;
     let idlepr2=idlecr2*idlevr2;
      let idlepr3=idlecr3*idlevr3;
     // //print in HTML page
      document.getElementById("npr1").innerHTML = idlepr1.toFixed(2);
      document.getElementById("npr2").innerHTML = idlepr2.toFixed(2);
      document.getElementById("npr3").innerHTML = idlepr3.toFixed(2);

 }


 function checkvolt()
 {
  let vr1 = document.getElementById("vr1").value;
  let vr2 = document.getElementById("vr2").value;
  let vr3 = document.getElementById("vr3").value;




  let r1 = parseFloat( document.getElementById("R1").value);
  let r2 =parseFloat( document.getElementById("R2").value);
  let r3 = parseFloat(document.getElementById("R3").value);
  let v =  parseFloat(document.getElementById("vin").value);

  let rs=(r2*r3)/(r2+r3);

  let idlevr2=(rs/(rs+r1))*v;//r2
      let idlevr3=idlevr2;//r3
      let idlevr1=v-idlevr2;//r1

      if(Math.round(vr1)==Math.round(idlevr1) && Math.round(vr2)==Math.round(idlevr2) && Math.round(vr3)== Math.round(idlevr3))
      {
        document.getElementById("voltverify").innerHTML ="Voltage Verified.";
      }
      else
      {

        if(Math.round(vr1)!=Math.round(idlevr1) )
        document.getElementById("voltverify").innerHTML ="Voltage across R1 is wrong! Try again.";
        
        if(Math.round(vr2)!=Math.round(idlevr2) )
        document.getElementById("voltverify").innerHTML ="Voltage across R2 is wrong! Try again.";

        if(Math.round(vr3)!=Math.round(idlevr3) )
        document.getElementById("voltverify").innerHTML ="Voltage across R3 is wrong! Try again.";
      }
  
 }



 function checkcur()
 {
  let ir1 = document.getElementById("ir1").value;
  let ir2 = document.getElementById("ir2").value;
  let ir3 = document.getElementById("ir3").value;
  



  
  let r1 = parseFloat( document.getElementById("R1").value);
  let r2 =parseFloat( document.getElementById("R2").value);
  let r3 = parseFloat(document.getElementById("R3").value);
  let v =  parseFloat(document.getElementById("vin").value);

  let rs=(r2*r3)/(r2+r3);

  let idlevr2=(rs/(rs+r1))*v;//r2
      let idlevr3=idlevr2;//r3
      let idlevr1=v-idlevr2;//r1



      let idlecr1=idlevr1/r1;//cr1
      let idlecr2=idlevr2/r2;//cr2
      let idlecr3=idlevr2/r3;//cr3





      if(Math.round(ir1)==Math.round(idlecr1) && Math.round(ir2)==Math.round(idlecr2) && Math.round(ir3)== Math.round(idlecr3))
      {
        document.getElementById("curverify").innerHTML ="Current  Verified.";
      }
      else
      {

        if(Math.round(ir1)!=Math.round(idlecr1) )
        document.getElementById("curverify").innerHTML ="Current through R1 is wrong! Try again.";
        
        if(Math.round(ir2)!=Math.round(idlecr2) )
        document.getElementById("curverify").innerHTML ="Current through R2 is wrong! Try again.";

        if(Math.round(ir3)!=Math.round(idlecr3) )
        document.getElementById("curverify").innerHTML ="Current through R3 is wrong! Try again.";
      }
 }

 function checkpow()
 {
  let pr1 = document.getElementById("pr1").value;
  let pr2 = document.getElementById("pr2").value;
  let pr3 = document.getElementById("pr3").value;
  



  
  let r1 = parseFloat( document.getElementById("R1").value);
  let r2 =parseFloat( document.getElementById("R2").value);
  let r3 = parseFloat(document.getElementById("R3").value);
  let v =  parseFloat(document.getElementById("vin").value);

  let rs=(r2*r3)/(r2+r3);

  let idlevr2=(rs/(rs+r1))*v;//r2
      let idlevr3=idlevr2;//r3
      let idlevr1=v-idlevr2;//r1



      let idlecr1=idlevr1/r1;//cr1
      let idlecr2=idlevr2/r2;//cr2
      let idlecr3=idlevr2/r3;//cr3

      let idlepr1=idlecr1*idlevr1;
     let idlepr2=idlecr2*idlevr2;
      let idlepr3=idlecr3*idlevr3;


      if(Math.round(pr1)==Math.round(idlepr1) && Math.round(pr2)==Math.round(idlepr2) && Math.round(pr3)== Math.round(idlepr3))
      {
        document.getElementById("powverify").innerHTML ="Power Verified.";
      }
      else
      {

        if(Math.round(pr1)!=Math.round(idlepr1) )
        document.getElementById("powverify").innerHTML ="Power in R1 is wrong! Try again.";
        
        if(Math.round(pr2)!=Math.round(idlepr2) )
        document.getElementById("powverify").innerHTML ="Power in R2 is wrong! Try again.";

        if(Math.round(pr3)!=Math.round(idlepr3) )
        document.getElementById("powverify").innerHTML ="Power in R3 is wrong! Try again.";
      }



 }
