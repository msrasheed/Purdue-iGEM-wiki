$(document).ready(() => {
	//for in page links to scroll page to it
	$('a.link-in-page').on('click', event => {
		let idToGo = $(event.currentTarget)[0].href.split('#');
		$('html, body').animate({
			scrollTop: $('#'+idToGo[1]).offset().top-100
		}, 1000);
	});

	////////////////////////////////////////////////////
	//For pop out navigation menu
	////////////////////////////////////////////////////
	$('.menu-hamburger').on('click', () => {
		$('.nav-menu-side').toggleClass('slide-left-into-page');
		$('.basic-page').toggleClass('basic-page-slide-left');
	});

	$('.basic-page').on('click', () => {
		$('.nav-menu-side').removeClass('slide-left-into-page');
		$('.basic-page').removeClass('basic-page-slide-left');
	})

	//for menu items in side menu
	let $prevSideMenuTarget;

	$('.dropdown-side').on('click', event => {
		if($prevSideMenuTarget !== event.currentTarget) {
			$(event.currentTarget).siblings('ul').slideUp('slow');
			$prevSideMenuTarget = event.currentTarget;
		}
		$(event.currentTarget).next().slideToggle('slow');
	});
});