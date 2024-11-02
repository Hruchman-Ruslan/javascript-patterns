function startWorker() {
	if (typeof Worker !== 'undefined') {
		// Create Worker
		const worker = new Worker('worker.js')

		// Send a message to web worker
		worker.postMessage('Hello')

		// Process a message from a web worker
		worker.onmessage = function (event) {
			document.getElementById('result').innerHTML = event.data
		}
	} else {
		document.getElementById('result').innerHTML = 'Web Workers not supported!'
	}
}

// Process messages from the main thread
onmessage = function (event) {
	// Getting data from a message
	const message = event.data

	// Performing long calculations or operations
	const result = 'Hello from worker! You sent: ' + message

	// Sending the result back to the main thread
	postMessage(result)
}
