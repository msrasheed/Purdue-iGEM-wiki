$(document).ready(() => {
	$(".trigger").on("click", (event) => {
		if($(event.currentTarget).children().length > 0) {
			let $plus = $(event.currentTarget).children()[0];
			if($plus.classList[0] == "plus") {
				let $select = $($plus).children()[1];
				if($select.classList[0] == "active"){
					$select.classList.remove("active");
				}else {
					$select.classList.add("active");
				}
			}
		}
		let id = $(event.currentTarget)[0].id;
		let $targetDrop = $("#"+id+".dropdown");
		if ($targetDrop[0].parentElement.classList[0] == "dropdownOptions") {
			$targetDrop.siblings('div').slideUp("slow");
		} 	
		$targetDrop.slideToggle("slow");
	});
});