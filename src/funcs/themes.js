const body = document.querySelector('body').classList

function setTheme1() {
    const header = document.querySelector('.header').classList
    const seletor = document.querySelector('.selector').classList
    const display = document.querySelector('.display').classList
    const containerButtons = document.querySelector('.container-buttons').classList
    const buttons = document.querySelectorAll('.button')
    const equalsButton = document.querySelector('.equals').classList

    body.remove('theme3')
    header.remove('theme3')
    seletor.remove('theme3')
    display.remove('theme3')
    containerButtons.remove('theme3')
    buttons.forEach(button => {
        button.classList.remove('theme3')
    })
    equalsButton.remove('theme3')
}

function setTheme2() {
    const header = document.querySelector('.header').classList
    const display = document.querySelector('.display').classList
    const containerButtons = document.querySelector('.container-buttons').classList
    const resetButtons = document.querySelectorAll('.resets')

    body.add('theme2')
    header.add('theme2')
    display.add('theme2')
    containerButtons.add('theme2')
    resetButtons.forEach(button => {
        button.classList.add('theme2')
    })
}

function setTheme3() {
    const header = document.querySelector('.header').classList
    const selector = document.querySelector('.selector').classList
    const display = document.querySelector('.display').classList
    const containerButtons = document.querySelector('.container-buttons').classList
    const buttons = document.querySelectorAll('.button')
    const resetButtons = document.querySelectorAll('.resets')
    const equalsButton = document.querySelector('.equals').classList

    body.remove('theme2')
    header.remove('theme2')
    display.remove('theme2')
    containerButtons.remove('theme2')
    resetButtons.forEach(button => {
        button.classList.remove('theme2')
        button.classList.add('theme3')
    })

    body.add('theme3')
    header.add('theme3')
    selector.add('theme3')
    display.add('theme3')
    containerButtons.add('theme3')
    buttons.forEach(button => {
        button.classList.add('theme3')
    })
    equalsButton.add('theme3')
}



export { setTheme1, setTheme2, setTheme3 }