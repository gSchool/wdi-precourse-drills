//runs all functions
$(document).ready(function(){
  console.log('Your jQuery is working!');

  //Button for home
  $('#home-button').click(function(){
    document.location = "MP-website.html"
   console.log("home button is working");
   });

  //Button for Life
  $('#life-button').click(function(){
  document.location = "MP-website-page-lifegoals.html";
   console.log("Life button is working");
   });

  //Button for Jacques
  $('#jacques-button').click(function(){
  console.log("Jacques button is working!!!");
  });

  //Button for Story time
  $('#story-button').click(function(){
   console.log("Story time button is working");
  });

   // Automatic Slideshow - change image every 3 seconds
    var myIndex = 0;
    carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "block";
      setTimeout(carousel, 3000);
  }


  });
