# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Rheaazarraga/lotide`

**Require it:**

`const _ = require('@Rheaazarraga/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: compares two values to see whether or not they're equal, and prints either a passed or failed assertion message
* `assertArraysEqual`: compares two arrays to see whether or not they're equal, and prints either a passed or failed assertion message
* `assertObjectsEqual`: compares two objects to see whether or not they're equal, and returns either a passed or failed assertion
* `countLetters`: returns the number count of letters in a given string
* `countOnly`: returns counts for a specific subset of given items in an object
* `eqArrays`: compares two arrays and returns true or false based on a perfect match
* `eqObjects`: compares two objects and returns true or false, based on a perfect match
* `findKey`: returns the first key for which the callback returns a truthy value
* `findKeyByValue`:  takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined
* `head`: returns the first item in a given array
* `middle`: takes in an array and returns the middle-most elements of the given array
* `tail`: returns the rest of the elements in an array after the head
* `index`: a list of all of the functions in an object
* `letterPositions`: returns all indices in the string where each character is found
* `map`: returns a new array based on the results of the callback function
* `takeUntil`: returns a "slice of the array with elements taken from the beginning"
*  `without`: removes elements from an array