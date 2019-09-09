/*
	Base code from:
	TXT by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			alignment: 'center'
		});

	// Scrolly
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height() - 5; }
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);


/* jaimeHMol: Custom functions */
function changeWhoWeAreSection(title, description){
	var display = document.getElementById('whoWeAreTitle');
	display.innerHTML = "";
	display.innerHTML = title;

	var display = document.getElementById('whoWeAreDescription');
	display.innerHTML = "";
	display.innerHTML = description;

	var display = document.getElementById('whoWeAreInitial');
	display.style.display = "none";
	var display = document.getElementById('whoWeAreContainer');
	display.style.display = "block";
	// var display = document.getElementById('whoWeAreInitial');
	// display.style.visibility = "hidden";
	// var display = document.getElementById('whoWeAreContainer');
	// display.style.visibility = "visible";
}

function changeBackWhoWeAreSection(){
	var display = document.getElementById('whoWeAreContainer');
	display.style.display = "none";
	var display = document.getElementById('whoWeAreInitial');
	display.style.display = "block";
	// var display = document.getElementById('whoWeAreContainer');
	// display.style.visibility = "hidden";
	// var display = document.getElementById('whoWeAreInitial');
	// display.style.visibility = "visible";


	// var display = document.getElementById('whoWeAreTitle');
	// display.innerHTML = "";
	// display.innerHTML = "Quienes somos?";
	//
	// var display = document.getElementById('whoWeAreSubTitle');
	// display.innerHTML = "";
	// display.innerHTML = "La gente detrás de Reeb";
	//
	// var display = document.getElementById('whoWeAreDescription');
	// display.innerHTML = "";
	// display.innerHTML = "Somos un grupo de jovenes aficionados a la cerveza que insatisfechos con la oferta local de cervezas artesanales decidió crear una propia...&lt;br/&gt; &lt;img src='images/ourOwnBeer.jpg' alt='Nuestra propia cerveza' width='40%' height='40%'&gt; &lt;br/&gt; Somos apasionados y queremos compartir nuestra pasión cervecera contigo.";
}
