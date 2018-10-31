$(function (){

	$('.cards').on("click", function() {
		$(this).toggleClass('card card--open');
	})

	$('.cards').on('click', '.card__like', function() {
		event.stopPropagation();
		event.preventDefault();

		$(this).toggleClass('card__like--red');
	})

	$('.card__follow-btn').on('click', function() {
		$(this).toggleClass('card__follow-btn--following');
	})
});