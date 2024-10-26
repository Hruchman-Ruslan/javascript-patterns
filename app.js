'use strict'

const globalScope = 'value'
function funcScope(someArg) {
	let value = 'test'
	console.log('func test', test)
	if (someArg) {
		const test = 1
		value = globalScope
	}
	return value
}

funcScope()
