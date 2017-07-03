$(document).ready(function(){
  $(".scroll").on("click", function (event) {
      event.preventDefault();
      $("html,body").animate({
          scrollTop: $(this.hash).offset().top
      }, 3000);
  });
  var sections = $('section#SERVICES,section#TEAM,section#ABOUT, section#TEAM, section#CONTACT, header, footer')
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
  $('.company-images, .company-text, .image-wrapper, .technologies-inner > div, .based-area h2, .based-area h3, .based-area-link, #TEAM ul, #TEAM > div.animated').css('opacity',0);
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
      $("#TEAM ul.photo01").addClass('fadeInUp');
  }, { offset: '60%'});
  $("#TEAM").waypoint(function() {
      $("#TEAM ul.photo02").addClass('fadeInUp');
      $("#TEAM ul.theSuits").addClass('fadeInUp');
  }, { offset: '30%'});
});
function initMap() {
  var salween = {lat: 13.8122707, lng: 100.5645161};
  var map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 15,
    center: salween,
    scrollwheel: false,
  });
  var contentString = '<div class="content-map">'+
      '<h1 class="company-name">Salween Solutions Co., Ltd.</h1>'+
      '<div class="address">'+
      '<p>1 Promphan 3 Building, 13th Floor,<br/>' +
      'Unit 1308 - 1312 Lat Phrao Soi 3, Chompol <br /> '+
      'Bangkok Chatuchak 10900 <br /> '+
      'Thailand </p>' +
      '<p>Feel free to chat to us via email at inquiries@salweensolutions.com</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: {lat: 13.8122707, lng: 100.5645161},
    map: map,
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  infowindow.open(map,marker);
}
