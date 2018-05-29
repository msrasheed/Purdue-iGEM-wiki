$(document).ready(() => {
	$('.basic-page-side-menu div').on('click', event => {
		let $divChilds = $(event.currentTarget).children();
		//console.log($divChilds[0].href.split('#'));
		let idToGo = $divChilds[0].href.split('#');
		$('html, body').animate({
			scrollTop: $('#'+idToGo[1]).offset().top-100
		}, 1000);
	});

	// console.log($('.menu').offset().top + $('.menu').outerHeight(true));

	// $('.nav-menu-side').css({
	// 	top: $('.menu').position().top + $('.menu').outerHeight(true)
	// });

	$('.menu-hamburger').on('click', () => {
		// console.log('hi');
		$('.nav-menu-side').toggleClass('nav-menu-side-slide-left');
		$('.basic-page').toggleClass('basic-page-slide-left');
	});

	$('.basic-page').on('click', () => {
		//console.log('hi');
		$('.nav-menu-side').removeClass('nav-menu-side-slide-left');
		$('.basic-page').removeClass('basic-page-slide-left');
	})

	let $prevSideMenuTarget;

	$('.dropdown-side').on('click', event => {
		if($prevSideMenuTarget !== event.currentTarget) {
			$(event.currentTarget).siblings('ul').slideUp('slow');
			//$(event.currentTarget).next().slideToggle('slow');
			$prevSideMenuTarget = event.currentTarget;
			//console.log($prevSideMenuTarget);
		}
		$(event.currentTarget).next().slideToggle('slow');
	});
});