

// 1. GET HTML ELEMENTS //


var button = document.querySelector('#ham-button')
var menu = document.querySelector('#menu')
var closeButton = document.querySelector('#close-button')


//2. DEFINE ACTIONS //

function openMenu() {
    menu.className = 'menu'

}

function closeMenu() {
    menu.className = 'menu closed'

}


//3.WIRE IT UP//

button.addEventListener('click', openMenu)
closeButton.addEventListener('click',closeMenu)