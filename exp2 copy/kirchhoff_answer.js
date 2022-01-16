function show(){
    document.getElementById("nvr2").innerHTML =parseFloat(sessionStorage.getItem("nvr2")).toFixed(6);
  document.getElementById("nvr3").innerHTML = parseFloat(sessionStorage.getItem("nvr3")).toFixed(6);
  document.getElementById("nvr1").innerHTML = parseFloat(sessionStorage.getItem("nvr1")).toFixed(6);

  // //print in HTML page
  document.getElementById("nir1").innerHTML = parseFloat(sessionStorage.getItem("nir1")).toFixed(6);
  document.getElementById("nir2").innerHTML = parseFloat(sessionStorage.getItem("nir2")).toFixed(6);
  document.getElementById("nir3").innerHTML = parseFloat(sessionStorage.getItem("nir3")).toFixed(6);

  // //print in HTML page
  document.getElementById("npr1").innerHTML = parseFloat(sessionStorage.getItem("npr1")).toFixed(6);
  document.getElementById("npr2").innerHTML = parseFloat(sessionStorage.getItem("npr2")).toFixed(6);
  document.getElementById("npr3").innerHTML = parseFloat(sessionStorage.getItem("npr3")).toFixed(6);
  sessionStorage.clear();
}