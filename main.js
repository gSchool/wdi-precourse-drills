var snd = new Audio("file.wav");
$(document).ready(function() {
  console.log("doc is ready");
  $(".myButt").click(function(){
    console.log(Math.floor(Math.random()*100))

    })
  })
  function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }
