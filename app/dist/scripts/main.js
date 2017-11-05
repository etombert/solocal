$(document).ready(function(){
	// alert('hello');
});


$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		autoplay: {
			delay: 5000,
		},
	});
	
});


$(document).ready(function(){
	$('.search').click(function(e){
		e.preventDefault();
		$('.search').toggleClass('active');
		$('.search-bar input').slideToggle('down');
	});
});


$(document).ready(function(){
	$(".burger-menu").click(function () {
		$(this).toggleClass("menu-on");
		$('.nav-items').animate({width:'toggle'},350);
	});
});


$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top -500 + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                // $(this).animate({'opacity':'1'},500);
                $(this).addClass('showme');
                    
            }
            
        }); 
    
    });
    
});