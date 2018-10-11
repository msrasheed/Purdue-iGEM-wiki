$(document).ready(() => {
	$(".trigger").on("click", (event) => {
		let id = $(event.currentTarget)[0].id;
		let $targetDrop = $("#"+id+".dropdown");
		if ($targetDrop[0].parentElement.classList[0] == "dropdownOptions") {
			$targetDrop.siblings('div').slideUp("slow");
		} 	
		$targetDrop.slideToggle("slow");
	});
});