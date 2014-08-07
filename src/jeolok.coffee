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

        # TODO

) ->
    if typeof define is "function" and define.amd
        define [], factory
    else if typeof exports is "object"
        module.exports = factory()
    else
        root.jeolok = factory()
    return
