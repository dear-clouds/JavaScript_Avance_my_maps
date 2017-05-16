$(function() {


	$('#exit').click(function() {
		screenfull.exit();
	});

	$('#toggle').click(function() {
		screenfull.toggle( $('#container')[0] );
	});

	$('#full_screen_part').click(function(){
		screenfull.toggle( $('#map-canvas')[0] );
	});



	screenfull.onchange = function( e ) {
		var elem = screenfull.element;

		$('#status').text( 'Is fullscreen: ' + screenfull.isFullscreen );

		if ( elem ) {
			$('#element').text( 'Element: ' + elem.localName + ( elem.id ? '#' + elem.id : '' ) );
		}

		if ( !screenfull.isFullscreen ) {
			$('#external-iframe').remove();
			document.body.style.overflow = 'auto';
			document.getElementById("map-canvas").style.height = '600px';
		}
	};

	screenfull.onchange();

});