const cubo = document.getElementById('cubo');
const body = document.querySelector('body')

let value = true;

window.addEventListener('mousedown', () => {
  body.style.cursor = 'grabbing';
  window.addEventListener('mousemove', handleClick)
})

window.addEventListener('mouseup', () => {
  body.style.cursor = 'grab';
  window.removeEventListener('mousemove', handleClick)
})

let numY = 0;
let numX = 0;

const handleClick = (e) => {
  numY += e.movementX
  numX += e.movementY

  cubo.style.transform = `rotateY(${numY}deg) rotateX(-${numX}deg)`
}

document.getElementById('Reiniciar').addEventListener('click', () => {
  cubo.style.transform = `rotateY(0deg) rotateX(0deg)`
})