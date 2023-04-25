var miNavbar,miBody;
		window.onload = function(){
			miNavbar = document.getElementById("items");
            miNavbar0 = document.getElementsByClassName("nav-list");
            miNavbar1 = document.getElementById("a1");
			miBody = document.getElementsByTagName("ul");
            
			miNavbar1.onmouseover = function(){ //evento con el cursor al pasar arriba de la img
				miBody[0].setAttribute('style', 'color: green');
			}
			miNavbar1.onmouseout = function(){//evento con el cursor al salir de la img
				miBody[0].setAttribute('style', 'color: white');
		}}