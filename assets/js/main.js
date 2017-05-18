$(document).ready(function(){
  $(".scroll").on("click", function (event) {
      event.preventDefault();
      $("html,body").animate({
          scrollTop: $(this.hash).offset().top
      }, 3000);
  });
  var sections = $('section')
    , nav = $('nav.navbar-default ul li')
    , nav_height = nav.outerHeight();
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });
  $('.company-images, .company-text, .image-wrapper, .technologies-inner > div, .based-area h2, .based-area h3, .based-area-link, #TEAM img').css('opacity',0);
  $(".company-text").waypoint(function() {
      $('.company-text').addClass('fadeInRight');
  }, { offset: '40%'});
  $(".company-images").waypoint(function() {
      $('.company-images').addClass('fadeInLeft');
  }, { offset: '80%'});
  $(".title-software-inner").waypoint(function() {
      $('.title-software-inner h2').addClass('fadeInDown');
  }, { offset: '100%'});
  $(".technologies-wrapper").waypoint(function() {
      $('.technologies-wrapper h2').addClass('fadeInDown');
  }, { offset: '100%'});
  $(".technologies-inner").waypoint(function() {
      $('.technologies-inner > div').addClass('fadeInUp');
  }, { offset: '50%'});
  $(".based-area").waypoint(function() {
      $('.based-area h2').addClass('fadeInLeft');
      $('.based-area h3 ').addClass('fadeInRight');
      $('.based-area-link').addClass('fadeInUp');
  }, { offset: '50%'});
  $(".image-wrapper").waypoint(function() {
      $('.image-wrapper.img01').addClass('fadeInLeft');
      $('.image-wrapper.img02').addClass('fadeInDown');
      $('.image-wrapper.img03').addClass('fadeInRight');
  }, { offset: '50%'});
  $("#TEAM").waypoint(function() {
      $('#TEAM > div.animated').addClass('fadeInDown');
      $('#TEAM  ul li:odd img').addClass('rotateInDownLeft');
      $('#TEAM > ul li:even img').addClass('rotateInDownRight');
  }, { offset: '60%'});

});
