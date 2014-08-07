###
 * jeolok
 * https://github.com/leny/jeolok
 *
 * Copyright (c) 2014 leny
 * Licensed under the MIT license.
###

"use strict"

do (
    root = this,
    factory = ->

        class Jeolok

            _oGeolocation = null

            constructor: ->
                _oGeolocation = window.navigator.geolocation if window?.navigator?.geolocation?

                @position = null

                return

            getCurrentPosition: ( oOptions, fNext ) ->
                _perform.call this, "getCurrentPosition", oOptions, fNext

            get: ( oOptions, fNext ) ->
                _perform.call this, "getCurrentPosition", oOptions, fNext

            watchPosition: ( oOptions, fNext ) ->
                _perform.call this, "watchPosition", oOptions, fNext

            watch: ( oOptions, fNext ) ->
                _perform.call this, "watchPosition", oOptions, fNext

            clearWatch: ( iWatcherID ) ->
                _oGeolocation.clearWatch iWatcherID

            _perform = ( sOperation, oOptions = {}, fNext = null ) ->
                return fNext? new Error "navigator.geolocation isn't available!" unless _oGeolocation

                if ( oOptions instanceof Function ) and fNext is null
                    fNext = oOptions
                    oOptions = {}

                fPositionSuccess = ( oPosition ) =>
                    _fill.call this, oPosition
                    fNext? null, @position

                fPositionError = ( oError ) ->
                    fNext? oError

                _oGeolocation[ sOperation ] fPositionSuccess, fPositionError, oOptions

            _fill = ( oPosition ) ->
                @position = oPosition
                @position.date = new Date oPosition.timestamp

        return new Jeolok()

) ->
    if typeof define is "function" and define.amd
        define [], factory
    else if typeof exports is "object"
        module.exports = factory()
    else
        root.jeolok = factory()
    return
