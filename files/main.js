/* eslint-disable no-unused-vars */
function $text(text, position) {
  var $text = document.createElement('div')
  $text.classList.add('text')
  $text.textContent = text
  entry = text.split('')
  $letter.textContent = entry[position]
  $feedback()

  return $text
}

function renderText(component, container) {
  container.appendChild(component)
}

function $feedback() {
  document.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
      return
    }
    if (event.key === entry[position]) {
      $letter.classList.add('correct')
      setTimeout(function () {
        $letter.classList.toggle('correct')
      }, 200)
    }
    else {
      $letter.classList.add('wrong')
      setTimeout(function () {
        $letter.classList.toggle('wrong')
      }, 200)
    }
    $letter.textContent = entry[position]
    event.preventDefault()
  })
  document.addEventListener('keyup', function (event) {
    position++
    $letter.textContent = entry[position]
    event.preventDefault()
  })
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
