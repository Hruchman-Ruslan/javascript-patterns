'use strict'

// Global scope
const globalScope = 'value' // global variable, accessible throughout the code

function funcScope(someArg) {
	// Function scope (funcScope)
	let value = 'test' // variable, visible only inside funcScope
	console.log('func test', test) // this will throw an error because test is not declared in this block yet

	if (someArg) {
		// Block scope (if block)
		const test = 1 // variable, visible only inside this if block
		value = globalScope // changing the value of 'value' to the value of the global variable globalScope
	}

	return value // returns the value of 'value' defined in the function scope
}

funcScope() // calling the function

// Namespace pattern

const FinancialApp = {
	Accounts: {
		getAllAccounts: function () {
			// Function to get all accounts
		},
		addAccount: function (account) {
			console.log('New account:', account) // logs the new account
		},
		// other functions for account operations
		Transactions: {
			getAllTransactions: function () {
				// Function to get all transactions
			},
			addTransaction: function (transaction) {
				// Function to add a new transaction
			},
			// other functions for transaction operations
		},
		Reports: {
			generateReport: function () {
				// Function to generate a report
			},
			// other functions for report operations
		},
	},
}

// Using the namespace
FinancialApp.Accounts.addAccount({ name: 'Ruslan' })
FinancialApp.Accounts.Transactions.addTransaction(newTransaction)
FinancialApp.Accounts.Reports.generateReport()

function addAccount() {
	console.log('separate function')
}

addAccount() // No Error
