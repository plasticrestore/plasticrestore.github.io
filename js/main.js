// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  }
  else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop : $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

$(document).ready(
    function() {
      var workOwl = $("#work-carousel");

      workOwl.owlCarousel({
        autoPlay : 5000, // Set AutoPlay to 3 seconds
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true
      });

      // Custom Navigation Events
      $(".work-next").click(function() {
        workOwl.trigger('owl.next');
      })
      $(".work-prev").click(function() {
        workOwl.trigger('owl.prev');
      })

      $("#demo-carousel").owlCarousel({
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true
      });

      $("#mandrill-callback-first").click(
          function() {
            var name = $("#callback-name-first");
            var tel = $("#callback-tel-first");

            $.ajax({
                  method: 'POST',
                  url: '//formspree.io/webcane@ya.ru',
                  data: $('#callback-form-first').serialize(),
                  datatype: 'json',
                  error: function(xhr, textStatus, errorThrown) {
                    console.log(xhr, textStatus, errorThrown);
                  }
              })
              .done(function(response) {
                 $("#mandrill-modal").modal();
                 $('.submit-success').fadeToggle(400);
                 // alert('Ваш запрос был успешно отправлен!');

              // reset field after successful submission
//              $("#callback-name-first").val('');
//              $("#callback-tel-first").val('');
            })
//            .fail(function(response) {
//              alert('Во время отправки запроса произошла ошибка.');
//            });

            e.preventDefault();
            $(this).get(0).reset();
            // prevent page refresh
            // чтоб не перебрасывало на /? страницу
            //return false;
          });

      // $("#mandrill-callback").click(initMandrillCallback);
      $("#mandrill-callback").click(
          function() {
            var name = $("#callback-name").val();
            var tel = $("#callback-tel").val();

            $.ajax(
                {
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
                      }, {
                        "email" : "plastikVRN@gmail.com",
                        "type" : "to"
                      }
                      ],
                      "autotext" : "true",
                      "subject" : "callback",
                      "html" : "<h2>Перезвонить</h2>" + "<ul><li><b>Имя</b>: " + name + "</li>"
                          + "<li><b>Телефон</b>: " + tel + "</li>"
                    },
                    "async" : false
                  }
                }).done(function(response) {
              $("#mandrill-modal").modal();
              // alert('Ваш запрос был успешно отправлен!');

              // reset field after successful submission
              $("#callback-name").val('');
              $("#callback-tel").val('');
            }).fail(function(response) {
              alert('Во время отправки запроса произошла ошибка.');
            });

            // prevent page refresh
            // чтоб не перебрасывало на /? страницу
            return false;
          });

      // $("#mandrill-callback-2").click(initMandrillCallback);
      // $("#mandrill-callback-3").click(initMandrillCallback);
      $("#mandrill-callback-3").click(
          function() {
            var name = $("#callback-name-3").val();
            var tel = $("#callback-tel-3").val();

            $.ajax(
                {
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
                      }, {
                        "email" : "plastikVRN@gmail.com",
                        "type" : "to"
                      }, {
                        "email" : "webcane@yandex.ru",
                        "type" : "to"
                      }
                      ],
                      "autotext" : "true",
                      "subject" : "callback",
                      "html" : "<h2>Перезвонить</h2>" + "<ul><li><b>Имя</b>: " + name + "</li>"
                          + "<li><b>Телефон</b>: " + tel + "</li>"
                    },
                    "async" : false
                  }
                }).done(function(response) {
              $("#mandrill-modal").modal();
              // alert('Ваш запрос был успешно отправлен!');

              // reset field after successful submission
              $("#callback-name-3").val('');
              $("#callback-tel-3").val('');
            }).fail(function(response) {
              alert('Во время отправки запроса произошла ошибка.');
            });

            // prevent page refresh
            // чтоб не перебрасывало на /? страницу
            return false;
          });

    });

// yandex.map
ymaps.ready(init);

function init() {

  // Создание экземпляра карты.
  var myMap = new ymaps.Map('map', {
    center : [ 51.655698, 39.350162
    ],
    zoom : 11
  }, {
    searchControlProvider : 'yandex#search'
  });

  myMap.geoObjects
  // точка: Мастерская 1
  .add(new ymaps.GeoObject({
    geometry : {
      type : "Point",
      coordinates : [ 51.566717, 39.238465
      ]
    },
    properties : {
      iconContent : 'Мастерская №1',
      balloonContentHeader : "Левый берег",
      balloonContentBody : "Воронеж, ул. Приморская, 140",
    }
  }, {
    preset : 'islands#redStretchyIcon'
  }))

  // точка: Мастерская 2
  .add(new ymaps.GeoObject({
    geometry : {
      type : "Point",
      coordinates : [ 51.73024355, 39.19185564
      ]
    },
    properties : {
      iconContent : 'Мастерская №2',
      balloonContentHeader : "Правый берег",
      balloonContentBody : "Воронеж, ул. Ломоносова, 116-16",
    }
  }, {
    preset : 'islands#blueStretchyIcon'
  }));

  // Отключаем зум от колёсика мышки
  myMap.behaviors.disable('scrollZoom');
};
