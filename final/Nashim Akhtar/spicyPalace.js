$(document).ready(function(){
          
         
        // go top =================
        $(window).scroll(function(){
          if($(this).scrollTop()>300){
            $(".gt").fadeIn();
          }
          else{
           $(".gt").fadeOut(); 
          }
        });

        $(".gt").click(function(){
          $("html").animate({scrollTop:0},500)
          return false;
        });
      });