'use strict'

function outerFunction(outerVariable) {
	function innerFunction(innerVariable) {
		console.log('outerVariable', outerVariable)
		console.log('innerValue', innerVariable)
	}

	return innerFunction
}

const closure = outerFunction('outerValue')

closure('innerValue')

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||| currying

function firstFunc() {
	return function () {
		return 'second function'
	}
}

const result = firstFunc()

console.log('result', result)

console.log(result())

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||| memoization

function getVideoInfo(videoId) {
	const cache = {}

	return function (videoId) {
		if (!cache[videoId]) {
			console.log('Requesting server for video information with ID:', videoId)
			cache[videoId] = {
				title: 'Video Title',
				duration: 'Video Duration',
				author: 'Video Author',
			}
		}
		return cache[videoId]
	}
}

const memoizedGetVideoInfo = getVideoInfo()

console.log(memoizedGetVideoInfo(123))

console.log(memoizedGetVideoInfo(123))
