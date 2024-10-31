// Class that displays the event
class Subject {
	constructor() {
		this.observers = [] // Array of observers
	}

	// Adding an observer
	addObserver(observer) {
		this.observers.push(observer)
	}

	// Remove the watcher
	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer)
	}

	// Sending a message to all observers
	notify(message) {
		this.observers.forEach(observer => observer.update(message))
	}
}

// Class that displays the observer
class Observer {
	constructor(name) {
		this.name = name
	}

	// The method that is called when notifications are received
	update(message) {
		console.log(`${this.name} received message: ${message}`)
	}
}

// Usage:

const subject = new Subject()

const observer1 = new Observer('Observer 1')
const observer2 = new Observer('Observer 2')

// Adding an observer
subject.addObserver(observer1)
subject.addObserver(observer2)

// Sending message
subject.notify('Hello from Subject!')

console.log('-----------------------------------------')

// Remove observer
subject.removeObserver(observer1)

// Repeated sending message
subject.notify('Hello again from Subject!')
