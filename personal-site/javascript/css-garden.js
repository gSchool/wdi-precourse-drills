



const cssGardenButtons = document.querySelectorAll(".css-garden-button");


for (let i = 0; i < cssGardenButtons.length; i++) {
  cssGardenButtons[i].addEventListener("click", function(e){
  const file = e.target.dataset.file;
  changeCSS(file, 2);
  e.preventDefault();
  });
}

function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
