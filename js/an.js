$(document).ready(function() {
    $('.click-menu-element').click(function(){
        $(this).addClass('active');
       $('html, body').animate({scrollTop:$('#works').position().top - 60}, 1000);
    });
});