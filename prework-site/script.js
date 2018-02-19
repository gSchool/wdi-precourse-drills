$(document).ready(function() {
  $('.sect-4').on('click', 'button', myGoalsBtn);
  function myGoalsBtn (e) {
    e.preventDefault();
    $('.my-goals__article').append('<iframe src="https://giphy.com/embed/udsCBnNpNWprO">').fadeIn();
  }
});
