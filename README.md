# jeolok

![NPM version](http://img.shields.io/npm/v/jeolok.svg) ![Build Status](http://img.shields.io/travis/leny/jeolok.svg) ![Dependency Status](https://david-dm.org/leny/jeolok.svg) ![Downloads counter](http://img.shields.io/npm/dm/jeolok.svg) [![Bower package version](https://badge.fury.io/bo/jeolok.svg)](http://badge.fury.io/bo/jeolok)

> Improved navigator.geolocation, with better callbacks and new stuffs.

* * *

**jeolok** is a simple wrapper over navigator.geolocation, with better callback support, so you can use it with  tools like *async*.

## Getting Started

From now, **jeolok** is only usable in the browser (since it uses `navigator.geolocation` as interface).

**jeolok** use the [umd](https://github.com/umdjs/umd) implementation to be usable with whatever tool you use (browserify, vanilla, etc...).

You can install **jeolok** using *npm* or *bower*, or downloading the library from the [lib](https://github.com/leny/jeolok/tree/master/lib) folder.

## Documentation

Regardless of how you will include **jeolok** in your code, you will obtain a `jeolok` object, which has the following methods & properties.

### `getCurrentPosition( [ options [, [ callback ]] )`

Calls `navigator.geolocation.getCurrentPosition()`, with the given (and optional) [options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions), and execute the callback when it's done.

The callback will get two arguments : the first is an `error`, which be `null` if everythings is alright, and the second is the [`position` object](https://developer.mozilla.org/en-US/docs/Web/API/Position).  
The `position` object has an extra parameter : `date`, which his a `Date` object of the position's `timestamp`.

#### Example

```javascript

jeolok.getCurrentPosition( { enableHighAccuracy: true }, function( error, position ) {
    if( error ) {
        return console.error( "Shit happens!", error );
    }
    console.log( "Now i can work with my position:", position );
} );

```

### `get( [ options [, [ callback ]] )`

Alias of `getCurrentPosition`.

### `watchPosition( [ options [, [ callback ]] )`

Calls `navigator.geolocation.watchPosition()`, with the given (and optional) [options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions), and execute the callback everytime it's has new information about position.

The callback will get two arguments : the first is an `error`, which be `null` if everythings is alright, and the second is the [`position` object](https://developer.mozilla.org/en-US/docs/Web/API/Position).  
The `position` object has an extra parameter : `date`, which his a `Date` object of the position's `timestamp`.

Returns the watch's id, which it usefull to clear it (see below).

#### Example

```javascript

var watchID = jeolok.watchPosition( { enableHighAccuracy: true }, function( error, position ) {
    if( error ) {
        return console.error( "Shit happens!", error );
    }
    console.log( "I must have moved since the last time, i think:", position );
} );

```

### `watch( [ options [, [ callback ]] )`

Alias of `watchPosition`.

### `clearWatch( watchID )`

Calls `navigator.geolocation.clearWatch()`, with the given id, to stop watching for location changes.

#### Example

```javascript

jeolok.clearWatch( watchID );

```

### `position`

**jeolok** keeps the last `position` object in its memory.

#### Example

```javascript

console.log( "Hey, I got a latitude: ", jeolok.position.coords.latitude );

```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint your code using [Grunt](http://gruntjs.com/).

## Release History

* **0.1.0**: Initial release (*07/08/14*)

## License
Copyright (c) 2014 leny  
Licensed under the MIT license.
