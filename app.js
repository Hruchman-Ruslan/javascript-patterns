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
