$(document).ready(() => {
  // textFit(document.getElementClassName('contentDrawer') , {maxFontSize: 25});
  $("h2").click(function(){
          $(this).next(".contentDrawer").slideToggle();
      });
  $("h4").click(function(){
          $(this).next("img").slideToggle();
      });
});
