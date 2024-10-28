// // import myModule from './app.js'

// // myModule.publicMethod()

// // Code reuse, inheritance templates
// import Animal from './app.js'

// // Subclass that inherits from the parent class Animal
// class Dog extends Animal {
// 	constructor(name, breed) {
// 		// Calling the parent class constructor using super()
// 		super(name)
// 		this.breed = breed
// 	}

// 	// Method that overrides the speak method of the parent class
// 	speak() {
// 		console.log(`${this.name} barks`)
// 	}

// 	// New method of the subclass
// 	fetch() {
// 		console.log(`${this.name} fetched the ball`)
// 	}
// }

// // Using the classes
// const myDog = new Dog('Buddy', 'Golden Retriever')
// myDog.speak() // Outputs "Buddy barks"
// myDog.fetch() // Outputs "Buddy fetched the ball"
// myDog.getAnimalName() // Outputs "name is Buddy"
