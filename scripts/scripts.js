function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

    
  }
  function menuBar(x) {
    x.classList.toggle("change");
  }