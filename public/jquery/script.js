// init Isotope
var $grid = $('.portfolio-wrapper').isotope({
	// options
	itemSelector: '.portfolio-grid',
	percentPosition: true,
	masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.portfolio-grid',
	},
});
// filter items on button click
$('.portfolio-filter').on('click', 'button', function () {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
});
//active button selection
$('.portfolio-filter button').click(function () {
	$(this).siblings('button').removeClass('active');
	$(this).addClass('active');
});

/**
 * 5. Magnific-popup JS
 */
$('.expand-img').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true,
	},
});
