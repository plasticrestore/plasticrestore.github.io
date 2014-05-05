/* my custom scripts */
jQuery(document).ready(function() {
	
	// callback
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
	
	
	
	// question
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
	
	

					$('#rate-carousel').carousel({
						interval : 4000
					});

					var clickEvent = false;
					$('#rate-carousel')
							.on('click', '.nav a', function() {
								clickEvent = true;
								$('.nav li').removeClass('active');
								$(this).parent().addClass('active');
							})
							.on('slide.bs.carousel',
									function(e) {
										if (!clickEvent) {
											var count = $('.nav').children().length - 1;
											var current = $('.nav li.active');
											current.removeClass('active').next().addClass('active');
											var id = parseInt(current.data('slide-to'));
											if (count == id) {
												$('.nav li').first().addClass('active');
											}
										}
										clickEvent = false;
									});
});