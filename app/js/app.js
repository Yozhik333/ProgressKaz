$(document).ready(function () {

	//$(".under-slide__item-img a").fancybox();


	const mainSlider = $('.main-slider');
	$(mainSlider).slick({
		arrows: true,
		dots: true,
		loop: true,
		slidesToShow: 1,
		speed: 1000,
		easing: 'ease',
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					variableWidth: false,
					slidesToShow: 1,
					centerMode: false
				}
			}
		]
	});

	var cnt = 1;
	var cntGallery = 1;
	$(".main-slider .main-slider__item .main-slider__item-wrap .under-slide-wrap .under-slide").each(function () {
		$(this).attr('class', function (index) {
			$(this).addClass(`slide-cnt${cnt}`);
			$(`.slide-cnt${cnt}`).slick({
				slidesToShow: 3,
				arrows: true,
				centerMode: true,
				variableWidth: true,
				infinite: true,
				loop: true,
				prevArrow: '<button type="button" class="under-slick-prev"></button>',
				nextArrow: '<button type="button" class="under-slick-next"></button>',
				responsive: [
					{
						breakpoint: 1025,
						settings: {
							dots: false,
							variableWidth: true,
							slidesToShow: 3,
							centerMode: true
						}
					},
					{
						breakpoint: 568,
						settings: {
							slidesToShow: 1,
							centerMode: true
						}
					}
				]
			});
		});
		$(`.slide-cnt${cnt} .under-slide__item-img a`).fancybox({
			animationEffect: 'fade'
		}).attr('data-fancybox', `gallery1${cnt}`);
		cnt++;
	});


	//$(".under-slide2 .under-slide__item-img a").fancybox({
	//	animationEffect: 'fade'
	//}).attr('data-fancybox', 'gallery2');

	//$(".under-slide3 .under-slide__item-img a").fancybox({
	//	animationEffect: 'fade'
	//}).attr('data-fancybox', 'gallery3');

	//$(".under-slide4 .under-slide__item-img a").fancybox({
	//	animationEffect: 'fade'
	//}).attr('data-fancybox', 'gallery4');

	//$('.catalog-btn').hover(function () {
	//	$(this).toggleClass('active');
	//	$('.catalog-dropdown').toggleClass('active');
	//})

	$('.catalog-dropdown').hover(function () {
		$(this).toggleClass('active');
		$('.catalog-btn').toggleClass('active');
	})

	// Tabs dowload-info

	$(".tab_item").not(":first").hide();
	$(".download-info-tabs-wrapper .tab").click(function () {
		$(".download-info-tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.slick-center').next().addClass('after-center')

	$('.slick-next').click(function () {
		$('.slick-center').removeClass('after-center')
		$('.slick-center').prev().removeClass('after-center')
		$('.slick-center').next().addClass('after-center')
	})

	$('.slick-prev').click(function () {
		$('.slick-center').removeClass('after-center')
		$('.slick-center').next().addClass('after-center')
	})

	// 2GIS map

	var map;

	DG.then(function () {
		map = DG.map('map', {
			center: [43.237734, 76.932223],
			zoom: 16
		});
		DG.marker([43.237734, 76.932223]).addTo(map);
	});

});

