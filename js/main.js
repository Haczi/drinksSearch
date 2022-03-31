const input = document.querySelector('input')
const drinks = document.querySelectorAll('li')


const checkInput = () => {
	drinks.forEach(drink => {
		if (drink.textContent.toLowerCase().includes(input.value.toLowerCase())) {
			drink.style.display = 'block'
		} else {
			drink.style.display = 'none'
		}
	})
}

const checkKey = click => {
	if (click.key === 'Enter') {
		checkInput()
	}
}

input.addEventListener('keyup', checkKey)
