const elementButtons = {
	secondButton: document.getElementById('myButton2'),
}

const { secondButton } = elementButtons

class UIComponent {
	constructor(elementId) {
		this.element = document.getElementById(elementId)
	}

	show() {
		this.element.style.display = 'block'
	}

	hide() {
		this.element.style.display = 'none'
	}
}

const buttonToggle = new UIComponent('myButton')

secondButton.addEventListener('click', () => buttonToggle.hide())
