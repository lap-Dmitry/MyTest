$(document).ready(function () {
	function jCarousel(obj, block, item) {
		var parent = $(obj).parents(),
			items = parent.find(block + ' ' + item);
		options = {
			speed: 500,
		};

		liFirst = parent.find(block + ' ' + item + ':eq(0)');
		if (liFirst.is(':animated')) {
			return;
		}

		parent.find(block + ' ' + item).stop(true, true);

		if ($(obj).hasClass('carousel-arrow__prev')) {

			liFirst.find('i').animate({
				top: items.eq(1).find('i').css('top')
			}, options.speed);

			items.eq(1).find('i').animate({
				top: items.eq(0).find('i').css('top')
			}, options.speed);

			liFirst.animate({
				marginRight: 0 - liFirst.width()
			}, options.speed, function () {
				liFirst.css('margin-right', 0).appendTo(liFirst.parent());
			});
		} else {
			liFirst = parent.find(block + ' ' + item + ':eq(0)');
			liFirst.animate({
				marginLeft: 0 - liFirst.width()
			}, function () {
				liFirst.css('margin-left', 0).appendTo(liFirst.parent());
			}, options.speed);
		}
		curr = items.eq(1)[0].dataset;
		review = $(obj).parents('.carousel');
		$.each(curr, function (key, value) {
			review.find('.carousel-content__' + key).text(value);
		});


		items.each(function (i, elem) {
			$(elem).attr('data-id', i + 1);
		});
	}

	$(document).on('click', '.carousel-arrow__prev, .carousel-arrow__next', function (e) {
		jCarousel(this, '.carousel-box', '.carousel-box__item');
	});
});
jQuery.noConflict();
jQuery(function () {
	jQuery('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				jQuery('html,body').animate({
					scrollTop: target.offset().top
				}, 1500);
				return false;
			}
		}
	});
});
let time = document.getElementById('timer');
let inter = setInterval(() => {
	if (time.textContent == '00:00:00') {
		alert('Акция закончиласть!');
		clearInterval(inter);
	} else {
		let hour = time.textContent[0] + time.textContent[1];
		let min = time.textContent[3] + time.textContent[4];
		let sec = time.textContent[6] + time.textContent[7];
		while (true) {
			if (sec == '00') {
				if (min == '00') {
					hour = hour - 1;
					min = '59';
					sec = '59';
					break;
				}
				min = min - 1;
				sec = '59';
				break;
			}
			sec = sec - 1;
			break;
		}
		if (sec.toString().length == 1) {
			sec = '0' + sec;
		}
		if (min.toString().length == 1) {
			min = '0' + min;
		}
		if (hour.toString().length == 1) {
			hour = '0' + hour;
		}

		time.textContent = `${hour}:${min}:${sec}`;
	}
}, 1000);