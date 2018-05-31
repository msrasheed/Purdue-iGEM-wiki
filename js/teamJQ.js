$(document).ready(() => {	
	let hasKevinPassed = false;
	let countKevinPasses = 1;
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
			let $kevinImage = $($kevinDiv).find('img')[0];
			kevinTop -= 50;
			kevinLeft -= 50;
			kevinWidth += 191.25;
			countKevinPasses++;
			$($kevinImage).css({
				// width:kevinWidth+'px',
				// top:kevinTop+'px',
				// left:kevinLeft+'px'
				transform:'scale('+countKevinPasses+')'
			});
		} else if (scroll < kevinBenchmark && hasKevinPassed) {
			hasKevinPassed = false;
		}
	});
});