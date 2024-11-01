const elementsButton = {
	firstElement: document.getElementById('myButton'),
	secondElement: document.getElementById('myButton2'),
}

const { firstElement, secondElement } = elementsButton
firstElement.addEventListener('click', () => console.log('myButton click'))
secondElement.addEventListener('click', () => console.log('myButton2 click'))
