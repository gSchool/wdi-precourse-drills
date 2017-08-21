var dogs = [
  {
  photo: "images/dogfish.jpg",
  name: "P-Fish",
  species: "dogfish",
  temperment: "Friendly and playful when wet",
  care: "Must have round-the-clock acese to water; you will learn to share your shower when a pool is unavailable.",
  para: "things and stuff and more things.",
},
{
  photo: "images/honorary-goat.jpg",
  name: "Goat Dog",
  species: "billydog",
  temperment: "Will eat through your pocket for treats",
  care: "Invest a small fortune in tennis balls, and be prepared to replace the baseboards.",
  para: "othere stuff and such.",
},
{
  photo: "images/lab-pony.jpg",
  name: "Baby Pony",
  species: "lab-pony mix",
  temperment: "Gangle-baby is happy-go-lucky but will mow you down in his clumsiness",
  care: "Be sure to saddle up starting at a young age or this guy will buck you off in a heartbeat.",
  para: "lots of the things with some other things.",
},
{
  photo: "images/laughing-pup.jpg",
  name: "Laughing Pup",
  species: "Hyena-mix",
  temperment: "Perfect for aspiring stand-up stars; great for the ego.",
  care: "Prepare your best shitzu jokes.",
  para: "even more of the stuff and such.",
}

];

function changeInfo(caption){
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var img4 = document.getElementById('img4');
  var mainPhoto = document.getElementById('mainphoto');
  var name = document.getElementById('name');
  var species = document.getElementById('species');
  var temperment = document.getElementById('temperment');
  var care = document.getElementById('care');
  var classList = document.getElementsByClassName('img-responsive portfolio-item');
  if (caption === "swim"){
    mainPhoto.src = "images/dogfish.jpg"
    img1.src = "images/dogfish-grey.jpg"
    img2.src = "images/honorary-goat.jpg";
    img3.src = "images/lab-pony.jpg";
    img4.src = "images/laughing-pup.jpg";
    name.innerHTML = dogs[0].name;
    species.innerHTML = dogs[0].species;
    temperment.innerHTML = dogs[0].temperment;
    care.innerHTML = dogs[0].care;
    para.innerHTML = dogs[0].para;
  } else if (caption === "pony"){
    mainPhoto.src = "images/lab-pony.jpg"
    img3.src = "images/lab-pony-grey.jpg"
    img1.src = "images/dogfish.jpg"
    img2.src = "images/honorary-goat.jpg";
    img4.src = "images/laughing-pup.jpg";
    name.innerHTML = dogs[2].name;
    species.innerHTML = dogs[2].species;
    temperment.innerHTML = dogs[2].temperment;
    care.innerHTML = dogs[2].care;
    para.innerHTML = dogs[2].para;
  } else if (caption === "laugh"){
    mainPhoto.src = "images/laughing-pup.jpg"
    img4.src = "images/laughing-pup-grey.jpg"
    img1.src = "images/dogfish.jpg"
    img2.src = "images/honorary-goat.jpg";
    img3.src = "images/lab-pony.jpg";
    name.innerHTML = dogs[3].name;
    species.innerHTML = dogs[3].species;
    temperment.innerHTML = dogs[3].temperment;
    care.innerHTML = dogs[3].care;
    para.innerHTML = dogs[3].para;
  } else if (caption === "goat"){
    mainPhoto.src = "images/honorary-goat.jpg"
    img2.src = "images/honorary-goat-grey.jpg"
    img1.src = "images/dogfish.jpg"
    img3.src = "images/lab-pony.jpg";
    img4.src = "images/laughing-pup.jpg";
    name.innerHTML = dogs[1].name;
    species.innerHTML = dogs[1].species;
    temperment.innerHTML = dogs[1].temperment;
    care.innerHTML = dogs[1].care;
    para.innerHTML = dogs[1].para;
  }
}

/*
*/
