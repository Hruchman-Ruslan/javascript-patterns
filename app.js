// Підсистема
class Engine {
	start() {
		console.log('Engine started')
	}
	stop() {
		console.log('Engine stopped')
	}
}

class Lights {
	turnOn() {
		console.log('Lights turned on')
	}
	turnOff() {
		console.log('Lights turned off')
	}
}

class FuelInjector {
	inject() {
		console.log('Fuel injected')
	}
}

// Facade
class CarFacade {
	constructor() {
		this.engine = new Engine()
		this.lights = new Lights()
		this.fuelInjector = new FuelInjector()
	}

	startCar() {
		this.engine.start()
		this.lights.turnOn()
		this.fuelInjector.inject()
		console.log('Car started successfully')
	}
	stopCar() {
		this.engine.stop()
		this.lights.turnOff()
		console.log('Car stopped')
	}
}

// Using
const car = new CarFacade()

// Starting car
car.startCar()

console.log('-----------------------------------')

// Stopped car
car.stopCar()
