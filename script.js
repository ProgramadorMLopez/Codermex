//Al salir de la web te muestra otro titulo
let baslik = document.title;
window.onblur = () =>
	document.title = "Te estamos esperando :)";
window.onfocus = () =>
	document.title = "Codermex";


const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
	if (window.scrollY > 0) {
		/*nav.classList.remove('navbar-color-1');*/
		nav.classList.add('navbar-color-2');
	} else {
		nav.classList.remove('navbar-color-2');
	}
});