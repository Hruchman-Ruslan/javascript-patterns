// Mediator that coordinates interaction between objects
class Mediator {
	constructor() {
		this.colleague1 = null
		this.colleague2 = null
	}

	setColleague1(colleague) {
		this.colleague1 = colleague
	}

	setColleague2(colleague) {
		this.colleague2 = colleague
	}

	send(message, colleague) {
		if (colleague === this.colleague1) {
			this.colleague2.receive(message)
		} else if (colleague === this.colleague2) {
			this.colleague1.receive(message)
		}
	}
}

// Colleague1
class Colleague1 {
	constructor(mediator) {
		this.mediator = mediator
	}

	send(message) {
		this.mediator.send(message, this)
	}

	receive(message) {
		console.log('Colleague 1 received:', message)
	}
}

// Colleague2
class Colleague2 {
	constructor(mediator) {
		this.mediator = mediator
	}

	send(message) {
		this.mediator.send(message, this)
	}

	receive(message) {
		console.log('Colleague 2 received:', message)
	}
}

// Usage:

const mediator = new Mediator()

const colleague1 = new Colleague1(mediator)
const colleague2 = new Colleague2(mediator)

mediator.setColleague1(colleague1)
mediator.setColleague2(colleague2)

colleague1.send('Hello from Colleague 1!')
colleague2.send('Hi from Colleague 2!')
