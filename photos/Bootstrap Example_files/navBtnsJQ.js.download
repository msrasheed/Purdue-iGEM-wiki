let url = 'http://2018.igem.org/Team:Purdue/'
let pagesOrder = ['History',
'Team',
'Description',
'Human_Practices',
'Genetic_Pathway',
'Design',
'Safety',
'Experiments',
'Collaborations',
'Public_Engagement',
'Applied_Model',
'Hardware',
'Results',
'Parts',
'Model',
'Acknowledgement'];

// let exampleUrl = 'http://2018.igem.org/Team:Purdue/History';
$(document).ready(() => {
	let exampleUrl = window.location.href;
	let bites = exampleUrl.split(':');
	bites = bites[bites.length-1];
	bites = bites.substring(7,bites.length);
	// console.log(bites);
	index = pagesOrder.indexOf(bites);
	if (index >= 0) {
		let navBtnsCont = document.createElement('div');
		navBtnsCont.classList.add('nav-story-Btns');
		if (index > 0) {
			let prevButt = document.createElement('div');
			prevButt.appendChild(document.createTextNode('Previous'));
			let anchor = document.createElement('a');
			anchor.href = url + pagesOrder[index - 1];
			anchor.appendChild(prevButt);
			navBtnsCont.appendChild(anchor);
		}
		if (index < pagesOrder.length - 1) {
			let nextButt = document.createElement('div');
			nextButt.appendChild(document.createTextNode('Next'));
			let anchor = document.createElement('a');
			anchor.href = url + pagesOrder[index + 1];
			anchor.appendChild(nextButt);
			navBtnsCont.appendChild(anchor);
		}
		let $basicPage = $('.basic-page')[0];
		let $footer = $('.footer')[0];
		$basicPage.insertBefore(navBtnsCont, $footer);
		let spacer = document.createElement('div');
		spacer.classList.add('spacer-small');
		$basicPage.insertBefore(spacer, $footer);
	}
});