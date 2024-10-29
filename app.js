// Base class representing an object to which functionality will be added
class Car {
	getPrice() {
		return 10000
	}
}

// Concrete decorator that adds functionality "car with climate control"
class CarWithClimateControl extends Car {
	constructor(car) {
		super(car)
	}

	getPrice() {
		return super.getPrice() + 2000 // Additional cost for climate control
	}
}

// Usage:

const basicCar = new Car()
console.log('Basic car price:', basicCar.getPrice())

const carWithClimateControl = new CarWithClimateControl(basicCar)
console.log('Car with climate control price:', carWithClimateControl.getPrice())
