// Original object to which we will create a proxy
class RealSubject {
	request() {
		console.log('RealSubject: Processing request.')
	}
}

// Proxy for RealSubject
class ProxySubject {
	constructor(realSubject) {
		this.realSubject = realSubject
	}

	// Method that intercepts the call to RealSubject
	request() {
		if (this.checkAccess()) {
			this.realSubject.request()
		} else {
			console.log('ProxySubject: Access denied.')
		}
	}

	// Checking access to RealSubject
	checkAccess() {
		console.log('ProxySubject: Checking access...')
		return true
	}
}

// Using

const realSubject = new RealSubject()
const proxy = new ProxySubject(realSubject)

// Calling the proxy
proxy.request()
