var socket = io();

socket.on('connect', function () {
	console.log('Connected to socket');
});

socket.on('message', function(message) {
	console.log('New message');
	console.log(message.text);
});

// Handles submitting new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text: $form.find('input[name=message]').val()
	});

	$message.val('');
});