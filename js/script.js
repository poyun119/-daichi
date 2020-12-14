$(document).on('click','a',function(event){
  var target = $(this).attr("href") ;
  $('html,body').animate({
   scrollTop:  $(target).offset().top
  },500);
});