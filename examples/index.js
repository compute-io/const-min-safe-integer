'use strict';

var round = require( 'math-round' );
var pow = require( 'math-power' );
var MIN_SAFE_INTEGER = require( './../lib' );

var min;
var x;
var i;

min = -pow( 2, 55 );
for ( i = 0; i < 100; i++ ) {
	x = round( Math.random() * min );
	if ( x < MIN_SAFE_INTEGER ) {
		console.log( 'Unsafe: %d', x );
	} else {
		console.log( 'Safe: %d', x );
	}
}
