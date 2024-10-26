'use strict'

// Global scope
const globalScope = 'value' // global variable, accessible throughout the code

function funcScope(someArg) {
	// Function scope (funcScope)
	let value = 'test' // variable, visible only inside funcScope
	console.log('func test', test) // this will throw an error because test is not declared in this block yet

	if (someArg) {
		// Block scope (if block)
		const test = 1 // variable, visible only inside this if block
		value = globalScope // changing the value of 'value' to the value of the global variable globalScope
	}

	return value // returns the value of 'value' defined in the function scope
}

funcScope() // calling the function
