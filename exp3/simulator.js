var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");
var counter=1;

rangeSlider.addEventListener("input", showSliderValue, false);

var A1 = [3,3.6,5.4,6.8,8,10,11.5,13,14.2,15.2];
var V1 = [225,225,225,225,225,225,225,225,225,225];
var A2 = [1.2,2.8,3.2,3.6,5.5,7,8.1,10.2,11,12.7];
var V2 = [220,212,208,205,200,195,189,184,179,176];

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 350) + "px";
  var index=rangeSlider.value-1;
  document.getElementById("curshunt").innerHTML=A1[index];
  document.getElementById("volshunt").innerHTML=V1[index];
  document.getElementById("curarm").innerHTML=A2[index];
  document.getElementById("volarm").innerHTML=V2[index];
}

function addtable() {
  
  if(counter<=6){
  var index=rangeSlider.value-1;
  document.getElementById("b"+counter).innerHTML=rangeSlider.value;
  document.getElementById("i"+counter).innerHTML=A2[index];
  document.getElementById("v"+counter).innerHTML=V2[index];
  }
  else {
    alert("Only Six Readings are allowed.");
    return false;
  }
  counter++;

}
function reset() {
  counter=1;
  for(var i=1;i<=6;i++){
  document.getElementById("b"+i).innerHTML="";
  document.getElementById("i"+i).innerHTML="";
  document.getElementById("v"+i).innerHTML="";
  }

}
