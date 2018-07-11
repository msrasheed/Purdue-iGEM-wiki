let numSlides;
let currentSlide = 0;
let $slideArray;
let $bubbleArray;
let inMotion = false;

$(document).ready(() => {
	$slideArray = $('.slideshow .content .slide');
	numSlides = $slideArray.length;
	let $bubbleContainer = $('.slideshow .bubbles')[0];
	for (i = 0; i < numSlides; i++) {
		$bubbleContainer.appendChild(document.createElement('div'));
	}
	$bubbleArray = $('.slideshow .bubbles div');
	$bubbleArray[0].classList.add('active');

	$bubbleArray.on('click', event => {
		jumpTo($(event.currentTarget).index());
	});

	$('.slideshow .right-arrow-pane').on('click', () => {
		nextSlide();
	});
	// console.log($('.slideshow .left-arrow-pane'));
	$('.slideshow .left-arrow-pane').on('click', () => {
		prevSlide();
	});
});


function nextSlide() {
	jumpTo(currentSlide+1);
}

function prevSlide() {
	jumpTo(currentSlide-1);
}

function jumpTo(num) {
	if (!inMotion) {
		inMotion = true;
		jumpToHelper(num);
		setTimeout(() => {inMotion = false;}, 1000);
	}
}

function jumpToHelper(num) {
	for (i = 0; i < numSlides; i++) {
		if (i != currentSlide) {
			$slideArray[i].style.visibility = 'hidden';
			$slideArray[i].style.zIndex = '-1';
			$slideArray[i].classList.remove('left')
			$slideArray[i].classList.remove('right');
		}
	}
	if (num - currentSlide > 0) {
		num = fixNumIndex(num);
		$slideArray[num].classList.add('notransition');
		$slideArray[num].classList.add('right');
		$slideArray[num].offsetHeight;
		$slideArray[num].classList.remove('notransition');
		$slideArray[num].style.visibility = 'visible';
		$slideArray[num].style.zIndex = '1';

		$slideArray[num].classList.remove('left');
		$slideArray[num].classList.remove('right');
		$slideArray[num].classList.add('active');
		$slideArray[currentSlide].classList.remove('active');
		$slideArray[currentSlide].classList.add('left');
	}else {
		num = fixNumIndex(num);
		$slideArray[num].classList.add('notransition');
		$slideArray[num].classList.add('left');
		$slideArray[num].offsetHeight;
		$slideArray[num].classList.remove('notransition');
		$slideArray[num].style.visibility = 'visible';
		$slideArray[num].style.zIndex = '1';

		$slideArray[num].classList.remove('left');
		$slideArray[num].classList.remove('right');
		$slideArray[num].classList.add('active');
		$slideArray[currentSlide].classList.remove('active');
		$slideArray[currentSlide].classList.add('right');
	}
	$bubbleArray[num].classList.add('active');
	$bubbleArray[currentSlide].classList.remove('active');
	currentSlide = num;
}

function fixNumIndex(num) {
	if(num > numSlides - 1) {
		num = 0;
	}
	else if(num < 0) {
		num = numSlides - 1;
	}
	return num
}