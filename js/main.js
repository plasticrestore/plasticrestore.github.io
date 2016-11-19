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

$(document).ready(
  function() {
    var workOwl = $("#work-carousel");

    workOwl.owlCarousel({
      autoPlay: 5000, // Set AutoPlay to 3 seconds
      navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true
    });

    // Custom Navigation Events
    $(".work-next").click(function() {
      workOwl.trigger('owl.next');
    })
    $(".work-prev").click(function() {
      workOwl.trigger('owl.prev');
    })

    $("#demo-carousel").owlCarousel({
      navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true
    });


    $('#callback-form-first').submit(function(e) {
        var name = $('#callback-name-first');
        var tel = $('#callback-tel-first');
        var form = $(this);

        if(name.val() == "" || tel.val() == "") {
          $('.submit-fail').fadeToggle(400);
        }
        else {
          $.ajax({
            method: 'POST',
            url: '//formspree.io/plasticrestore@ya.ru',
            data: form.serialize(),
            datatype: 'json'
          })
          .done(function(response) {
            alert('Ваш запрос был успешно отправлен!');
          })
          .fail(function(textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            //alert('Во время отправки запроса произошла ошибка.');
          });

          e.preventDefault();
          form.trigger("reset");
        }
        return false;
      });

      $('#callback-form').submit(function(e) {
          var name = $('#callback-name');
          var tel = $('#callback-tel');
          var form = $(this);

          if(name.val() == "" || tel.val() == "") {
            $('.submit-fail').fadeToggle(400);
          }
          else {
            $.ajax({
              method: 'POST',
              url: '//formspree.io/plasticrestore@ya.ru',
              data: form.serialize(),
              datatype: 'json'
            })
            .done(function(response) {
              alert('Ваш запрос был успешно отправлен!');
            })
            .fail(function(textStatus, errorThrown) {
              console.log(textStatus, errorThrown);
              //alert('Во время отправки запроса произошла ошибка.');
            });

            e.preventDefault();
            form.trigger("reset");
          }
          return false;
        });

        $('#callback-form-3').submit(function(e) {
            var name = $('#callback-name-3');
            var tel = $('#callback-tel-3');
            var form = $(this);

            if(name.val() == "" || tel.val() == "") {
              $('.submit-fail').fadeToggle(400);
            }
            else {
              $.ajax({
                method: 'POST',
                url: '//formspree.io/plasticrestore@ya.ru',
                data: form.serialize(),
                datatype: 'json'
              })
              .done(function(response) {
                alert('Ваш запрос был успешно отправлен!');
              })
              .fail(function(textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                //alert('Во время отправки запроса произошла ошибка.');
              });

              e.preventDefault();
              form.trigger("reset");
            }
            return false;
          });

    $('.submit-fail, .submit-success').click(function() {
      $(this).hide();
    });

});

// yandex.map
ymaps.ready(init);

function init() {

  // Создание экземпляра карты.
  var myMap = new ymaps.Map('map', {
    center: [51.655698, 39.350162],
    zoom: 11
  }, {
    searchControlProvider: 'yandex#search'
  });

  myMap.geoObjects
    // точка: Мастерская 1
    .add(new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [51.614345, 39.239082]
      },
      properties: {
        iconContent: 'Мастерская №1',
        balloonContentHeader: "Левый берег",
        balloonContentBody: "Воронеж, ул. Новосибирская, 13А к2",
      }
    }, {
      preset: 'islands#redStretchyIcon'
    }))

  // точка: Мастерская 2
  .add(new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [51.73024355, 39.19185564]
    },
    properties: {
      iconContent: 'Мастерская №2',
      balloonContentHeader: "Правый берег",
      balloonContentBody: "Воронеж, ул. Ломоносова, 116-16",
    }
  }, {
    preset: 'islands#blueStretchyIcon'
  }));

  // Отключаем зум от колёсика мышки
  myMap.behaviors.disable('scrollZoom');
};
