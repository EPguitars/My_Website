$(document).ready(()=>{

	$(".tabs").mouseenter(function(){

		$(this).find('.text').css("opacity", 1)
		.addClass("animated flipInX");
	})
	.mouseleave(function(){

		$(".text").css("opacity", 0).removeClass("animated flipInX");
	})
})
