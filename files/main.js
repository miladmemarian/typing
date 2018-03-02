/* eslint-disable no-unused-vars */
function $text(text, position) {
  var $text = document.createElement('div')
  $text.classList.add('text')
  $text.textContent = text
  entry = text.split('')
  $letter.textContent = entry[position]
  return $text
}

function renderText(component, container) {
  container.appendChild(component)
}

var $add = document.querySelector('.add')
var $letter = document.querySelector('.letter')
var position = 0
var entry = []

$add.addEventListener('click', function () {
  renderText(
    $text(document.querySelector('.input').value, position),
    document.querySelector('.tutor')
  )
})
