$(window).scroll(function(){
    let scrollDist=$(document).scrollTop();
    if(scrollDist <10){
        $(".discover-img,.discover-text").hide()&&
        $(".phone,.design,.updates,.compare-accessories-content").hide();
    }
    
    else if
    (scrollDist >300 ){
        $(".discover-text,.discover-img").delay().fadeIn();
       
    }
    if
        (scrollDist >1400){
            $(".phone").slideDown();
    }
     if
    (scrollDist >2000){
        $(".design,.updates").slideDown();
    }
     if (scrollDist >2800){
        $(".compare-accessories-content").fadeIn();
    }

});