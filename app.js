// Class representing a collection
class IterableCollection {
	constructor() {
		this.collection = []
	}

	// Adding an item to the collection
	addItem(item) {
		this.collection.push(item)
	}

	// Returning an iterator for the collection
	getIterator() {
		return new CollectionIterator(this.collection)
	}
}

// Iterator class
class CollectionIterator {
	constructor(collection) {
		this.collection = collection
		this.index = 0
	}

	// Method that checks if there are still elements to iterate
	hasNext() {
		return this.index < this.collection.length
	}

	// Method that returns the next element
	next() {
		return this.collection[this.index++]
	}
}

// Usage:
const collection = new IterableCollection()
collection.addItem('Item 1')
collection.addItem('Item 2')
collection.addItem('Item 3')

const iterator = collection.getIterator()
while (iterator.hasNext()) {
	console.log(iterator.next())
}
