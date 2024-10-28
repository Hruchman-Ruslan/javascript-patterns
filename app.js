class Car {
	constructor(options) {
		this.doors = options.doors || 4
		this.color = options.color || 'black'
		this.brand = options.brand || 'Unknown'
	}

	start() {
		console.log(`Starting the ${this.brand}`)
	}

	stop() {
		console.log(`Stopping the ${this.brand}`)
	}
}

class Suv extends Car {
	constructor(options) {
		super(options)
	}

	startEngine() {
		console.log(`Starting the engine of ${this.brand} SUV`)
	}
}

class Sedan extends Car {
	constructor(options) {
		super(options)
	}

	startBattery() {
		console.log(`Starting the battery of ${this.brand} Sedan`)
	}
}

class CarFactory {
	createCar(options) {
		switch (options.type) {
			case 'SUV':
				return new Suv(options)
			case 'Sedan':
				return new Sedan(options)
			case 'Truck':
				options.doors = 2
				options.color = 'white'
				options.brand = 'Ford'
				return new Car(options)
			default:
				return new Car(options)
		}
	}
}

// Usage:
const factory = new CarFactory()

const suv = factory.createCar({ type: 'SUV', brand: 'Toyota' })
const sedan = factory.createCar({ type: 'Sedan', brand: 'Honda' })

console.log(suv)
console.log(sedan)

suv.start()
suv.startEngine()

sedan.start()
sedan.startBattery()
