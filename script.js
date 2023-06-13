let baslik = document.title;
window.onblur = () =>
	document.title = "Te estamos esperando :)";
window.onfocus = () =>
	document.title = "Codermex";

/*********************************/


window.addEventListener('load', function () {
	var Clase = document.querySelector(".container-main");

	Clase.addEventListener('scroll', function (event) {
		event.preventDefault();
		console.log("Evento submit capturado");
		// Todo tu codigo va acá
		var SubClase = document.getElementsByClassName("title");
		for (var i = 0; i < SubClase.length; i++) {
			SubClase[i].classList.add("mov-title");
			SubClase[i].classList.remove("title");

		}
	});
});


