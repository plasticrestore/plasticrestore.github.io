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
  
  
  $("#mandrill-callback").click(initMandrillCallback());
  $("#mandrill-callback-2").click(initMandrillCallback());
  $("#mandrill-callback-3").click(initMandrillCallback());

});

function initMandrillCallback() {
    var name = $("#callback-name").val();
    var tel = $("#callback-tel").val();

    $.ajax({
      type : "POST",
      url : "https://mandrillapp.com/api/1.0/messages/send.json",
      data : {
        "key" : "8cH2MKN75DD6Vbc9L_GPhg",
        "message" : {
          "from_email" : "callback@plasticrestore.github.io",
          "from_name" : "обратный звонок",
          "to" : [ {
		"email" : "plasticrestore@ya.ru",
		"type" : "to"
		} , {
	        "email" : "plastikVRN@gmail.com",
		"type" : "to"
		}, {
            	"email" : "webcane@yandex.ru",
            	"type" : "to"
          }],
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
	$("#callback-name").val('');
	$("#callback-tel").val('');

    })
    .fail(function(response) {
      	alert('Во время отправки запроса произошла ошибка.');
    });

    // чтоб не перебрасывало на /? страницу
    return false;
 }
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
