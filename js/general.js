$(document).ready(() => {
	console.log($('div.myButton'));
	$("div.myButton").on("click", event => {
		window.location.href = $(event.currentTarget)[0].getAttribute("href");
	});
});