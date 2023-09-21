

if (document.getElementsByClassName("auto")) {
    let autos = document.getElementsByClassName("auto");
    for (let i=0; i<autos.length; i++) {
      autos[i].addEventListener("mouseover", autoOver);
      autos[i].addEventListener("mouseout", autoOut);
    }
  }
  
  function autoOver() {
    this.style.height = this.scrollHeight + "px";
  }
  
  function autoOut() {
    this.style.height = "20px";
  }