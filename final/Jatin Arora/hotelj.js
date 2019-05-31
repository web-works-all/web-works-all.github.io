
$(document).ready(function(e) {
    
	$(window).scroll(function(){
	if($(this).scrollTop()>50)
	{
		
		$(".section1").css({"top":"0","z-index":"1000","position":"fixed","background-color":"#fff"},2000);
	}
	
	
	else
	{
		
		$(".section1").css({"top":"0px","position":"absolute"},2000);
	}
	

			})
			
			
});