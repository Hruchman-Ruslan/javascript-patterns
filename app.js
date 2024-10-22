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
	constructor(name, age, country) {
		this.name = name
		this.age = age
		this.country = country
	}

	get country() {
		return this._country
	}

	set country(newCountry) {
		this._country = newCountry
	}

	setNewAge(newAge) {
		this.age = newAge
		console.log('The new age is ' + this.age)
	}
}

const firstObject = new User('Ruslan', 31, 'Ukraine')
console.log('getter', firstObject.country)
firstObject.country = 'USA'
console.log('setter', firstObject.country)
// firstObject.setNewAge(32)
