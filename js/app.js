$(function(){
//For changing items in caruosel in aside
  var clickEvent = false;
  $("#m-carousel-st").carousel({
    interval: 4000
  }).on('click', '.list-group li', function(){
    clickEvent = true;
    $('.list-group li').removeClass('active');
    $(this).addClass('active');
  }).on('slide.bs.carousel', function(e){
    if(!clickEvent){
      var count = $('.list-group').children().length - 1;
      var current = $('.list-group li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id){
        $('.list-group li').first().addClass('active');
      }
    }
    clickEvent = false;
  });
});

//Set the righ height for items in aside of carousel
// need refresh if you will resizing browser from medium to small
$(window).on('load', function() {
// When screan is 768 and below, something goeng wron
  if ($(window).width() < 768) {
   return;
}
  var boxheight = $('#m-carousel-st .carousel-inner').innerHeight();
  var itemlength = $('#m-carousel-st .item').length;
  var triggerheight = Math.round(boxheight/itemlength+1);
  $('.list-group-item').outerHeight(triggerheight);
});
