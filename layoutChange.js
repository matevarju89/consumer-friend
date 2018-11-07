//Change the layout to 3 elements in a row in case of screen >768px

jQuery(document).ready(function ($) {

		$("ul.products").removeClass("columns-4");
		$("ul.products").addClass("columns-3");
		$("ul.products li").removeClass("first last");
		$("ul.products li:nth-child(3n)").addClass("last");
		$("ul.products li:nth-child(3n+1)").addClass("first");

})