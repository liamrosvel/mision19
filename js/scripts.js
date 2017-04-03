//VARIABLES AND OBJECTS
var toggleMenu = document.getElementById("toggle-menu"),
	nav = document.getElementById("main-nav");

//FUNCTIONS
var showMenu = function() {
	nav.classList.toggle("show-menu");
}

var headerStyle = function(e) {
	var header = document.getElementById("scroll-header");
	var scrollHeader = document.body.scrollTop;

	if(scrollHeader > 100)
	{
		header.classList.add("header-scroll");
	}
	else
	{
		header.classList.remove("header-scroll");
	}
}

//ASIGNING EVENTS
toggleMenu.addEventListener('click', showMenu);

window.addEventListener('scroll', headerStyle);