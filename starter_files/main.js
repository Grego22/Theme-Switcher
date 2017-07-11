const kitbutton = document.querySelector('#kitten_button')
const tokbutton = document.querySelector('#tokyo_button')
const metalbutton = document.querySelector('#metal_button')
let bodyb = document.querySelector('body')
let h1 = document.querySelector('h1')
let p = document.querySelector('p')

function kittenss(){
  bodyb.id ='kittens'
  h1.textContent='kittens'
  p.textContent='A kitten, also known as a kitty or kitty cat, is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days.'

}

function tokyoss(){
  bodyb.id='tokyo'
  h1.textContent='tokyo'
  p.textContent='The Neo Tokyo aesthetic has permeated some of the biggest films and novels of the last 40 years, including Blade Runner and Akira.'
}

function metalss(){
  bodyb.id='metal'
  h1.textContent='metal'
  p.textContent='Heavy metal (or simply metal) is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States.'

}

kitbutton.addEventListener('click', kittenss)
tokbutton.addEventListener('click', tokyoss)
metalbutton.addEventListener('click', metalss)
