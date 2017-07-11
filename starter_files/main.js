const kitbutton = document.querySelector('#kitten_button')
const tokbutton = document.querySelector('#tokyo_button')
const metalbutton = document.querySelector('#metal_button')
let bodyb = document.querySelector('body')

function kittenss(){
  bodyb.id ='kittens'
}

function tokyoss(){
  bodyb.id='tokyo'
}

function metalss(){
  bodyb.id='metal'

}

kitbutton.addEventListener('click', kittenss)
tokbutton.addEventListener('click', tokyoss)
metalbutton.addEventListener('click', metalss)
