Min Safe Integer
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Minimum safe double-precision floating-point integer.


## Installation

``` bash
$ npm install compute-const-min-safe-integer
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var MIN_SAFE_INTEGER = require( 'compute-const-min-safe-integer' );
```

#### MIN_SAFE_INTEGER

The minimum [safe](http://www.2ality.com/2013/10/safe-integers.html) double-precision floating-point integer.

``` javascript
MIN_SAFE_INTEGER === -1 * Math.pow( 2, 53 ) + 1; // -9007199254740991
```



## Examples

``` javascript
var MIN_SAFE_INTEGER = require( 'compute-const-min-safe-integer' );

var min = -Math.pow( 2, 55 ),
	len = 100,
	val,
	i;

for ( i = 0; i < len; i++ ) {
	val = Math.round( Math.random() * min );
	if ( val < MIN_SAFE_INTEGER ) {
		console.log( 'Unsafe: %d', val );
	} else {
		console.log( 'Safe: %d', val );
	}
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-const-min-safe-integer.svg
[npm-url]: https://npmjs.org/package/compute-const-min-safe-integer

[travis-image]: http://img.shields.io/travis/compute-io/const-min-safe-integer/master.svg
[travis-url]: https://travis-ci.org/compute-io/const-min-safe-integer

[coveralls-image]: https://img.shields.io/coveralls/compute-io/const-min-safe-integer/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/const-min-safe-integer?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/const-min-safe-integer.svg
[dependencies-url]: https://david-dm.org/compute-io/const-min-safe-integer

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/const-min-safe-integer.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/const-min-safe-integer

[github-issues-image]: http://img.shields.io/github/issues/compute-io/const-min-safe-integer.svg
[github-issues-url]: https://github.com/compute-io/const-min-safe-integer/issues
