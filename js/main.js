/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
 
(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
        	// Save a reference to the element
        	var $this = $(this);
 
        	// Set up Scroll Handler
        	$(document).scroll(function(){
 
    		        var scrollTop = $(window).scrollTop();
            	        var offset = $this.offset().top;
            	        var height = $this.outerHeight();
 
    		// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}
 
			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
    			$this.css('background-position', 'center ' + yBgPosition + 'px');
                
        	});
        });
    }
}(jQuery));

/* my custom scripts */
jQuery(document).ready(function() {
	
	/** mandrill callback */
	
	$("#mandrill-callback").click(function() {
		var name = $("#modal-name").val();
		var tel = $("#modal-tel").val();
		var topic = $("#modal-topic").val();

		$.ajax({
			type : "POST",
			url : "https://mandrillapp.com/api/1.0/messages/send.json",
			data : {
				"key" : "8cH2MKN75DD6Vbc9L_GPhg",
				"message" : {
					"from_email" : "callback@plasticrestore.github.io",
					"from_name" : "callback",
					"to" : [ {
						"email" : "plasticrestore@ya.ru",
						"type" : "to"
					} ],
					"autotext" : "true",
					"subject" : "callback: " + topic,
					"html" : "<p><ul><li>" + name + "</li><li>" + tel + "</li>" + 
							 "<li>" + topic + "</li></ul></p>"
				},
				"async" : false
			}
		})
		.done(function(response) {
			alert('Ваш запрос был отправлен!');
			// reset field after successful submission
			$("#modal-name").val('');
			$("#modal-tel").val('');
			$("#modal-topic").val('');
		})
		.fail(function(response) {
			alert('Во время отправки запроса произошла ошибка.');
		});
		
		//return false; // prevent page refresh
	});
	
	
	/** mandrill question */
	
	$("#mandrill-question").click(function() {
		var name = $("#modal-name").val();
		var email = $("#modal-email").val();
		var topic = $("#modal-topic").val();

		$.ajax({
			type : "POST",
			url : "https://mandrillapp.com/api/1.0/messages/send.json",
			data : {
				"key" : "8cH2MKN75DD6Vbc9L_GPhg",
				"message" : {
					"from_email" : "question@plasticrestore.github.io",
					"from_name" : "question",
					"to" : [ {
						"email" : "plasticrestore@ya.ru",
						"type" : "to"
					} ],
					"autotext" : "true",
					"subject" : "callback: " + topic,
					"html" : "<p><ul><li>" + name + "</li><li>" + question + "</li>" + 
							 "<li>" + topic + "</li></ul></p>"
				},
				"async" : false
			}
		})
		.done(function(response) {
			alert('Ваш запрос был отправлен!');
			// reset field after successful submission
			$("#modal-name").val('');
			$("#modal-email").val('');
			$("#modal-topic").val('');
		})
		.fail(function(response) {
			alert('Во время отправки запроса произошла ошибка.');
		});
		
		//return false; // prevent page refresh
	});
	
	
	/** works gallery */
	
	/* activate the carousel */
	$("#work-carousel").carousel({interval:false});

	/* change modal title when slide changes */
	$("#work-carousel").on("slid.bs.carousel", function () {
	  $("#work-title").html($(this).find(".active img").attr("title"));
	})

	/* when clicking a thumbnail */
	$(".work-item a").click(function(){
	    var content = $("#work-inner");
	    var title = $("#work-title");
	  
	    content.empty();  
	    title.empty();
	  
	  	var id = this.id;  
	    var repo = $("#img-repo .item");
	    var repoCopy = repo.filter("#" + id).clone();
	    var active = repoCopy.first();
	  
	    active.addClass("active");
	    title.html(active.find("img").attr("title"));
	  	content.append(repoCopy);

	    // show the modal
	  	$("#work-gallery").modal("show");
	});
	
	

	/** rate carousel */
	
	$('#rate-carousel').carousel({ interval : 4000 });

	var clickEvent = false;
	$('#rate-carousel')
		.on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');
		})
		.on('slide.bs.carousel', function(e) {
			if (!clickEvent) {
			  var count = $('.nav').children().length - 1;
			  var current = $('.nav li.active');
			  current.removeClass('active')
			  	.next().addClass('active');
			  var id = parseInt(current.data('slide-to'));
			  
			  if (count == id) {
				$('.nav li').first().addClass('active');
			  }
			}
			clickEvent = false;
		});
	
	/** Parallax */
	
	$('#home').parallax({
		speed :	0.15
	});	
});