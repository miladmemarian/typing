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

document.addEventListener('keypress', function (event) {
  if (event.target.classList.contains('input')) {
    return
  }
  if (position < entry.length) {
    if (event.key === entry[position]) {
      score++
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
  }
  else {
    $letter.textContent =
      score + ' correctly typed characters out of ' + entry.length
  }
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
var score = 0
