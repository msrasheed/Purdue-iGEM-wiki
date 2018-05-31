$(document).ready(() => {	
	let hasKevinPassed = false;
	let countKevinPasses = 0;
	let kevinTop = 0;
	let kevinLeft = 0;
	let kevinWidth = 235;
	$(window).scroll(event => {
		let scroll = $(window).scrollTop();
		let $kevinDiv = $('.alt-sections').children()[0];
		let kevinBenchmark = $($kevinDiv).offset().top + $($kevinDiv).outerHeight(true);
		if(scroll > kevinBenchmark && !(hasKevinPassed)) {
			hasKevinPassed = true;
			console.log(countKevinPasses);
			countKevinPasses++;
			let $kevinImage = $($kevinDiv).find('img')[0];
			kevinTop -= 50;
			kevinLeft -= 50;
			kevinWidth += 191.25;
			$($kevinImage).css({
				width:kevinWidth+'px',
				top:kevinTop+'px',
				left:kevinLeft+'px'
			});
		} else if (scroll < kevinBenchmark && hasKevinPassed) {
			hasKevinPassed = false;
		}
	});
});