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




   function checkFun() {

    //row1
    let vr1 = document.getElementById("vr1").value;
    document.getElementById("temp").innerHTML = vr1;

    let ir1 = document.getElementById("ir1").value;
    document.getElementById("temp2").innerHTML = ir1;

    let pr1 = document.getElementById("pr1").value;
    document.getElementById("temp3").innerHTML = pr1;

    //row2
    let vr2 = document.getElementById("vr2").value;
    document.getElementById("temp4").innerHTML = vr2;

    let ir2 = document.getElementById("ir2").value;
    document.getElementById("temp5").innerHTML = ir2;

    let pr2 = document.getElementById("pr2").value;
    document.getElementById("temp6").innerHTML = pr2;

    //row3
    let vr3 = document.getElementById("vr3").value;
    document.getElementById("temp7").innerHTML = vr3;

    let ir3 = document.getElementById("ir3").value;
    document.getElementById("temp8").innerHTML = ir3;

    let pr3 = document.getElementById("pr3").value;
    document.getElementById("temp9").innerHTML = pr3;


 }