'use strict'
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android()
			|| isMobile.BlackBerry()
			|| isMobile.iOS()
			|| isMobile.Opera()
			|| isMobile.Windows()
		);
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		menuArrows[0].addEventListener("click", function (e) {
			menuArrows[0].parentElement.classList.toggle('_active');
		});
	}
} else {
	document.body.classList.add('_pc');
}

// МЕНЮ БУРГЕР
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// -------------------------------------------------------------------
$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if (scrolled > 80) {
		$('.wrapper').addClass('scrolled');
	}
	if (scrolled <= 80) {
		$('.wrapper').removeClass('scrolled');
	}
});
// -------------------------------------------------------------------
var coll = document.getElementsByClassName("refunds");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("open");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}
// ------------------------------------------------------------------------
$(document).ready(function () {
	$('.popup__img').slick({
		arrows: false,
		fade: true,
		dots: false,
		initialSlide: 1,
		adaptiveHeight: true,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2500,
	});
});
// --------------------------------------------------------------------