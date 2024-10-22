'use strict'

// function construction

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

// class construction

class User {
	construction(name, age, country) {
		this.name = name
		this.age = age
		this.country = country
	}

	setNewAge(newAge) {
		this.age = newAge
	}

	showAge() {
		console.log('The new age is ' + this.age)
	}
}

const firstObject = new User('Ruslan', 31, 'Ukraine')
firstObject.setNewAge(32)
firstObject.showAge()
