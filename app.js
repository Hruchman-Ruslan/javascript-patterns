'use strict'

class User {
	#email

	constructor(name, age, country, email) {
		this.name = name
		this.age = age
		this.country = country
		this.#email = email
	}

	static right = {
		admin: true,
		user: false,
	}

	static isLegalAge(age) {
		return age >= 18
	}

	get email() {
		return this.#email
	}

	set email(newEmail) {
		this.#email = newEmail
	}

	setNewAge(newAge) {
		this.age = newAge
		console.log('The new age is ' + this.age)
	}
}

const firstObject = new User('Ruslan', 31, 'Ukraine', 'qwe123qwe@gmail.com')
console.log('Is legal age', User.isLegalAge(firstObject.age))
