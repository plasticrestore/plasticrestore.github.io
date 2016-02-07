// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function() {
  $("#demo-carousel").owlCarousel({
      navigation : true, // Show next and prev buttons
      navigationText : ["<",">"],
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true
  });
  
  initMandrillCallback();
});

function initMandrillCallback() {


  	$("#mandrill-callback").click(function() {
    var name = $("#callback-name").val();
    var tel = $("#callback-tel").val();

    $.ajax({
      type : "POST",
      url : "https://mandrillapp.com/api/1.0/messages/send.json",
      data : {
        "key" : "S1ZYU-q2dFyoD04-kXhucw",
        "message" : {
          "from_email" : "callback@plasticrestore.github.io",
          "from_name" : "обратный звонок",
          "to" : [ {
            "email" : "webcane@yandex.ru",
            "type" : "to"
          } ],
          "autotext" : "true",
          "subject" : "callback",
          "html" : "<h2>Перезвонить</h2>" +
          "<ul><li><b>Имя</b>: " + name + "</li>" +
          "<li><b>Телефон</b>: " + tel + "</li>"
        },
        "async" : false
      }
    })
    .done(function(response) {
      alert('Ваш запрос был успешно отправлен!');
      // reset field after successful submission
      name.val('');
      tel.val('');
    })
    .fail(function(response) {
      alert('Во время отправки запроса произошла ошибка.');
    });

    // чтоб не перебрасывало на /? страницу
    return false;
	});
}

// yandex.map
ymaps.ready(init);

function init() {

    // Создание экземпляра карты.
    var myMap = new ymaps.Map('map', {
            center: [51.566717, 39.238465],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([51.566717, 39.238465], {
            balloonContent: 'М1: ул. Приморская, д.140'
        }, {
            preset: 'islands#redIcon',
            iconColor: '#0095b6'
        }));

	// Отключаем зум от колёсика мышки
	myMap.behaviors.disable('scrollZoom');
};
