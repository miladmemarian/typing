/* eslint-disable no-unused-vars */
function $text(text, position) {
  var $text = document.createElement('div')
  $text.classList.add('text')
  $text.textContent = text.join('')
  $letter.textContent = entry[position]

  return $text
}

function renderText(component, container) {
  container.appendChild(component)
}

document.addEventListener('keydown', function (event) {
  if (event.target.classList.contains('input')) {
    return
  }
  if (event.key === entry[position]) {
    $letter.classList.add('correct')
  }
  else {
    $letter.classList.add('wrong')
  }
  setTimeout(function () {
    position++
    $letter.textContent = entry[position]
    $letter.classList.remove('wrong', 'correct')
  }, 500)
})

var $add = document.querySelector('.add')

$add.addEventListener('click', function () {
  $add.blur()
  entry = document.querySelector('.input').value.split('')
  renderText($text(entry, position), document.querySelector('.tutor'))
})

var $letter = document.querySelector('.letter')
var position = 0
var entry = []
