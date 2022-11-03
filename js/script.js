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

// --------------------------------------------------------------------
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
	for (i = 0; i < elements.length; i++) {
		elements[i].style.msFlex = "100%";  // IE10
		elements[i].style.flex = "100%";
	}
}
// Two images side by side
function two() {
	for (i = 0; i < elements.length; i++) {
		elements[i].style.msFlex = "50%";  // IE10
		elements[i].style.flex = "50%";
	}
}

// Four images side by side
function four() {
	for (i = 0; i < elements.length; i++) {
		elements[i].style.msFlex = "25%";  // IE10
		elements[i].style.flex = "25%";
	}
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myGrid");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}