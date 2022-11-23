/*
$(document).ready(function(){
	// jQuery methods go here...
});
*/

// Short method
$(function(){
	// jQuery Accordion
	$('.js-accordion .js-accordion-item:nth-child(1) .js-accordion-trigger').addClass('active');
	$('.js-accordion .js-accordion-item:nth-child(1) .js-accordion-content').slideDown();
	$('.js-accordion-trigger').on('click', function() {
		if($(this).hasClass('active')) {
			$(this).siblings('.js-accordion-content').slideUp();
			$(this).removeClass('active');
		} else {
			$('.js-accordion-content').slideUp();
			$('.js-accordion-trigger').removeClass('active');
			$(this).siblings('.js-accordion-content').slideToggle();
			$(this).toggleClass('active');
		}
	});
});