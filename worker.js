// Process messages from the main thread
onmessage = function (event) {
	// Getting data from a message
	const message = event.data

	// Performing long calculations or operations
	const result = 'Hello from worker! You sent: ' + message

	// Sending the result back to the main thread
	postMessage(result)
}
