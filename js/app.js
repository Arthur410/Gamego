$(document).ready(function () {

	$('.arrow-up').mPageScroll2id();
	$('.main-slider').slick({
		fade:true,
		dots:true,
		nextArrow: $('.next-arrow'), 
		prevArrow: $('.prev-arrow'),
		autoplay: true,
 		autoplaySpeed: 3000,
 		pauseOnFocus:false,
		pauseOnHover:false
	});
	$('.main-content').slick({
		nextArrow: $('.prev1'), 
		prevArrow: $('.next1')
	});
	$('.slide').slick({
		slidesToShow: 3,
		infinite:true,
		centerMode: true,
		nextArrow: $('.prev'), 
		prevArrow: $('.next'),
		waitForAnimate:false,
		autoplay: true,
 		autoplaySpeed: 3000,
 		pauseOnFocus:false,
		pauseOnHover:false
	});

	$('.category-slider').slick({
		prevArrow: $('.category-next'), 
		nextArrow: $('.category-prev'),
		waitForAnimate:false
	});
})
