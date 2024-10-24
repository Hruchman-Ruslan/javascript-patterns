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

class SubUser extends User {
	constructor(name, age, country, email, fruit) {
		super(name, age, country, email)
		this.favoriteFruits = fruit
		this.isValidUser = false
	}

	checkIsValidUser() {
		this.isValidUser = this.email !== '' && this.name !== ''
		if (this.isValidUser) {
			console.log('User is valid')
		}
	}
}

const firstObject = new SubUser(
	'Ruslan',
	31,
	'Ukraine',
	'qwe123qwe@gmail.com',
	'banana'
)
firstObject.checkIsValidUser()
console.log(firstObject)

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| set

// const set = new Set()

// const john = { name: 'John' }
// const mary = { name: 'Mary' }
// const peter = { name: 'Peter' }

// set.add(john)
// set.add(mary)
// set.add(peter)
// set.add(john)
// set.add(mary)
// set.add(peter)
// set.add(john)
// set.add(mary)
// set.add(peter)

// console.log(set)
// console.log(set.has(peter)) // true
// set.delete(peter)
// console.log(set)
// console.log(set.has(peter)) // false

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  map

const map = new Map([
	['someString', 'someValue'],
	[1, true],
])

console.log(map)

map.set('1', 'str1') // add
map.set('1', 'str2') // edit
map.set('2', 'str1') // add new key
console.log(map.has(1)) // true
console.log(map.has('someString')) // true
console.log(map.has('someStr')) // false
map.delete('someString') // delete key someString type string
map.delete(1) // delete key 1 type number
console.log(map)
map.clear() // clear all
console.log(map)
