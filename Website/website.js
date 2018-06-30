
// Get modal element
var modal = document.getElementById('simplemodal');
// Get open modal button
var modalbtn = document.getElementById('modalbtn');
// Get close Button
var closebtn = document.getElementsByClassName('closebtn')[0];

// Listen for Open Click
modalbtn.addEventListener('click', openModal);

//Listen for close click
closebtn.addEventListener('click', closeModal);

//Function to open modal
function openModal(){
  modal.style.display = 'block';
}
//Function to close modal
function closeModal(){
  modal.style.display = 'none';
}
$( document ).click(function() {
  $( ".cake" ).toggle( "explode" );
});
