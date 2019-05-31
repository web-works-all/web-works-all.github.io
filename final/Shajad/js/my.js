$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>300){
			$('#top').fadeIn();
			$('.position-top').addClass('position-sticky bg-black');
		}
		else{
			$('#top').fadeOut();
			$('.position-top').removeClass('position-sticky bg-black');
		}
	})

	$('#top').click(function(){
		$('html').animate({scrollTop:0},800)
	});
});