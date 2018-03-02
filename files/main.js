/* eslint-disable no-unused-vars */
function $text(text) {
  var $text = document.createElement('div')
  $text.classList.add('text')
  $text.textContent = text
  return $text
}

function renderText(component, container) {
  container.appendChild(component)
}

var $add = document.querySelector('.add')

$add.addEventListener('click', function () {
  renderText(
    $text(document.querySelector('.input').value),
    document.querySelector('.tutor')
  )
})
