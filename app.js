const list = document.getElementById('myList')
list.addEventListener('click', event => {
	console.log(event.currentTarget)
	if (event.target.tagName === 'LI') {
		console.log('Clicked on:', event.target.textContent)
	}
})
