function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
const sidenavCloseIcon = document.querySelectorAll('.closebtn');
if (sidenavCloseIcon.length > 0) {
	for (let index = 0; index < sidenavCloseIcon.length; index++) {
		const el = sidenavCloseIcon[index];
		el.addEventListener('click', function (e) {
			sidenavClose(el.closest('.sidenav'));
			e.preventDefault();
		});
	}
}