//Change the cart's appearance in case it's not empty and add pay button


jQuery(document).ready(function ($) {

		if ($(".count").text()!="0"){
			$(".fa-shopping-cart").css("color", "rgb(0,255,0)");
			$("body").append('<a href="http://consumer-friend.com/checkout" class="btn btn-success pay-button" role="button">Pay now!</a>');

		}

});		