$(document).ready(() => {
	console.log($('div.button'));
	$("div.button").on("click", event => {
		window.location.href = $(event.currentTarget)[0].getAttribute("href");
	});
});