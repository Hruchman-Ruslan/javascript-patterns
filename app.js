'use strict'

const Singleton = (function () {
	let instance

	function init() {
		// Private method and variable of the class
		function privateMethod() {
			console.log('This is a private method')
		}

		let privateVariable = 'This is a private variable.'

		return {
			// Public method and variable of the class
			publicMethod: function () {
				privateMethod()
			},
			publicVariable: 'This is a public variable.',
			getPrivateVariable: function () {
				return privateVariable
			},
		}
	}

	return {
		// Method to get the single instance of the class
		getInstance: function () {
			if (!instance) {
				instance = init()
			}
			return instance
		},
	}
})()

// Usage
const instance1 = Singleton.getInstance()
// const instance2 = Singleton.getInstance()

// console.log(instance1 === instance2) // Should print true since instance1 and instance2 are the same object

instance1.publicMethod() // Call public method
// console.log(instance1.publicVariable) // Access public variable
console.log(instance1.getPrivateVariable()) // Access private variable via method
