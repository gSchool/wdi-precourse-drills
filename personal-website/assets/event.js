$(document).ready(function() {
	$('#book').click(function() {
		$('#blank').attr({
			"src": "assets/images/iliad.jpg", 
			"alt": "The Iliad"
		});
	});
	$('#movie').on('click', function() {
		$('#blank').attr({
			"src": "assets/images/fightclub.jpg", 
			"alt": "Fight Club"
		});
	});
	$('#tv').on('click', function() {
		$('#blank').attr({
			"src": "assets/images/GoT.jpg", 
			"alt": "Game of Thrones"
		});
	});
	$('#game').on('click', function() {
		$('#blank').attr({
			"src": "assets/images/skyrim.jpg", 
			"alt": "Skyrim"
		});
	});
});