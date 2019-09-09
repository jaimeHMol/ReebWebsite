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
var mantainWhoWeAre = true;

function changeWhoWeAreSectionHover(who){
	if (who == 'Javi'){
		var display = document.getElementById('whoWeAreInitial');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreKata');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJaime');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJavi');
		display.style.display = "block";
		mantainWhoWeAre = false;
	}
	if (who == 'Kata'){
		var display = document.getElementById('whoWeAreInitial');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJavi');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJaime');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreKata');
		display.style.display = "block";
		mantainWhoWeAre = false;
	}
	if (who == 'Jaime'){
		var display = document.getElementById('whoWeAreInitial');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreKata');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJavi');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJaime');
		display.style.display = "block";
		mantainWhoWeAre = false;
	}
}

function changeWhoWeAreSectionClick(who){
	if (who == 'Javi'){
		var display = document.getElementById('whoWeAreInitial');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreKata');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJaime');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJavi');
		display.style.display = "block";
		mantainWhoWeAre = true;
	}
	if (who == 'Kata'){
		var display = document.getElementById('whoWeAreInitial');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJavi');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJaime');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreKata');
		display.style.display = "block";
		mantainWhoWeAre = true;
	}
	if (who == 'Jaime'){
		var display = document.getElementById('whoWeAreInitial');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreKata');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJavi');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJaime');
		display.style.display = "block";
		mantainWhoWeAre = true;
	}
}

function changeBackWhoWeAreSection(){
	if (!mantainWhoWeAre){
		var display = document.getElementById('whoWeAreInitial');
		display.style.display = "block";
		var display = document.getElementById('whoWeAreKata');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJavi');
		display.style.display = "none";
		var display = document.getElementById('whoWeAreJaime');
		display.style.display = "none";
	}
}
