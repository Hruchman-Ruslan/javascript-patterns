'use strict'

// Module pattern

const myModule = (function () {
	// Private data and functions, not accessible from outside
	const privateData = 'This is private data'

	function privateFunction() {
		console.log('This is a private function')
	}

	// Public interface (methods and properties accessible from outside)
	return {
		publicMethod: function () {
			// Using private functions or data
			privateFunction()
			console.log('This is a public method')
		},
		publicData: 'This is public data',
	}
})()

// console.log('my Module', myModule)
// // Using the module
// myModule.publicMethod() // Outputs "This is a private function" and "This is a public method"
// console.log(myModule.publicData) // Outputs "This is public data"
// console.log(myModule.privateData) // Outputs undefined (private data is not accessible)
// myModule.privateFunction() // Throws an error (private functions are not accessible)

// export default myModule

// Code reuse, inheritance templates

// Parent class

class Animal {
	constructor(name) {
		this.name = name
	}

	// Method of the parent class
	speak() {
		console.log(`${this.name} makes a sound`)
	}

	getAnimalName() {
		console.log('name is', this.name)
	}
}

export default Animal
