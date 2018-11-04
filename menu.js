$(function(){
	$('.mobile-nav').click(function() {
		$(this).toggleClass('visible');
		$('header nav ul').toggleClass('open');
	})
})