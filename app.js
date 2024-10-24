'use strict'

//  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Function Declaration

// Can be called before its declaration due to hoisting.
console.log('result', calculateSum(10, 5))
function calculateSum(a, b) {
	return a + b
}

//  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Function Expression

// Cannot be called before its definition; not hoisted.
const multiplyNumbers = function (a, b) {
	return a * b
}
console.log('second result', multiplyNumbers(5, 20))

//  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Arrow Function

// Concise syntax, no own 'this'; not hoisted.
const divideNumbers = (a, b) => a / b
console.log('third result', divideNumbers(10, 2))

//  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Arrow Function with Rest Operator

// Can be iterated over easily with forEach.
const arrowArgs = (...args) => {
	console.log(args)
	console.log('index', args[0])
	console.log('length', args.length)
	args.forEach(i => console.log('item', i))

	// Comparison with arguments object:
	// 'args' is a true array, allowing array methods like forEach, map, etc.
	// 'arguments' (in non-arrow functions) is an array-like object and lacks array methods.
}

arrowArgs(1, 2, 3, 4, 5, 6, 7)
