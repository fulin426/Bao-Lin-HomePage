$('.profile-about').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 70 }, 600);
});

$('.experience').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 70 }, 600);
});

$('.education').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 70 }, 600);
});

$('.project').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 70 }, 600);
});

$('.contact').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 70 }, 700);
});

$('.corner-logo').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 70 }, 700);
});

