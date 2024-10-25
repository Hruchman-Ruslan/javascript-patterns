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

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function firstFunc() {
	return function () {
		return 'second function'
	}
}

const result = firstFunc()

console.log('result', result)

console.log(result())
