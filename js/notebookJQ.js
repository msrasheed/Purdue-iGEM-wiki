$(document).ready(() => {
	//for in page links to scroll page to it
	$('a.link-in-page').on('click', event => {
		//let $divChilds = $(event.currentTarget).children();
		//console.log($(event.currentTarget)[0]);
		let idToGo = $(event.currentTarget)[0].href.split('#');
		$('html, body').animate({
			scrollTop: $('#'+idToGo[1]).offset().top-100
		}, 1000);
	});

	// console.log($('.menu').offset().top + $('.menu').outerHeight(true));

	// $('.nav-menu-side').css({
	// 	top: $('.menu').position().top + $('.menu').outerHeight(true)
	// });

	////////////////////////////////////////////////////
	//For pop out navigation menu
	////////////////////////////////////////////////////
	$('.menu-hamburger').on('click', () => {
		// console.log('hi');
		$('.nav-menu-side').toggleClass('slide-left-into-page');
		$('.basic-page').toggleClass('basic-page-slide-left');
	});

	$('.basic-page').on('click', () => {
		//console.log('hi');
		$('.nav-menu-side').removeClass('slide-left-into-page');
		$('.basic-page').removeClass('basic-page-slide-left');
	})

	//for menu items in side menu
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

	////////////////////////////////////////////////////
	//For side menu
	////////////////////////////////////////////////////
	// $('.basic-page-side-menu').on('click', () => {
	// 	$('.basic-page-side-menu').addClass('slide-left-into-page');
	// });
	// $('.basic-page-side-menu').on('mouseleave', () => {
	// 	$('.basic-page-side-menu').removeClass('slide-left-into-page');
	// })

	////////////////////////////////////////////////////
	//For team page
	////////////////////////////////////////////////////
	let hasKevinPassed = false;
	let countKevinPasses = 0;
	let kevinTop = 0;
	let kevinLeft = 0;
	let kevinWidth = 235;
	$(window).scroll(event => {
		let scroll = $(window).scrollTop();
		let $kevinDiv = $('.alt-sections').children()[1];
		let kevinBenchmark = $($kevinDiv).offset().top + $($kevinDiv).outerHeight(true);
		if(scroll > kevinBenchmark && !(hasKevinPassed)) {
			hasKevinPassed = true;
			console.log(countKevinPasses);
			countKevinPasses++;
			let $kevinImage = $($kevinDiv).find('img')[0];
			kevinTop -= 50;
			kevinLeft -= 50;
			kevinWidth += 191.25;
			if(countKevinPasses) {
				$($kevinImage).css({
					width:kevinWidth+'px',
					top:kevinTop+'px',
					left:kevinLeft+'px'
				});
			}
		} else if (scroll < kevinBenchmark && hasKevinPassed) {
			hasKevinPassed = false;
		}
	});
});