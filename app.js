// A class that uses a strategy
class Context {
	constructor(strategy) {
		this.strategy = strategy
	}

	// A method that establishes a new strategy
	setStrategy(strategy) {
		this.strategy = strategy
	}

	// A method that performs an action according to a strategy
	executedStrategy() {
		return this.strategy.execute()
	}
}

// Interface strategy
class Strategy {
	execute() {}
}

// Concrete strategy №1
class ConcreteStrategy1 extends Strategy {
	execute() {
		console.log('Executing strategy 1')
	}
}

// Concrete strategy №2
class ConcreteStrategy2 extends Strategy {
	execute() {
		console.log('Executing strategy 2')
	}
}

// Usage:

const context = new Context(new ConcreteStrategy1())
console.log(context.executedStrategy()) // Usage strategy №1

context.setStrategy(new ConcreteStrategy2())
console.log(context.executedStrategy()) // Usage strategy №2
