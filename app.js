'use strict'

// function constructor

// function User(name, age, country) {
// 	this.name = name
// 	this.age = age
// 	this.country = country

// 	this.setNewAge = function (newAge) {
// 		this.age = newAge
// 	}

// 	this.showAge = function () {
// 		console.log('The new age is ' + this.age)
// 	}
// }

// const firstObject = new User('Ruslan', 31, 'Ukraine')
// firstObject.setNewAge(32)
// firstObject.showAge()

// class constructor

class User {
	#email

	constructor(name, age, country, email) {
		this.name = name
		this.age = age
		this.country = country
		this.#email = email
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

console.log('Can i get email', firstObject.email)
firstObject.email = 'otherEmail@gmail.com'
console.log('Can i get email', firstObject.email)
