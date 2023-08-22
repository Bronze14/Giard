document.addEventListener('DOMContentLoaded', function () {
  const expandButton = document.getElementById('expandButton')
  const hiddenImages = document.querySelectorAll('.grid.gap-4 > div')
  const secondGridContainer = document.getElementById('grid--container--2')
  let shownImageIndex = 0
  let isSecondGridVisible = false

  expandButton.addEventListener('click', function () {
    if (!isSecondGridVisible) {
      secondGridContainer.style.display = 'grid'
      expandButton.textContent = 'Zwiń'
      isSecondGridVisible = true
    } else {
      hiddenImages[shownImageIndex].style.display = 'block'
      shownImageIndex++

      if (shownImageIndex >= hiddenImages.length) {
        expandButton.style.display = 'none'
      }
    }
  })
})
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('overlay')
  const expandButton = document.getElementById('expandButton')

  expandButton.addEventListener('click', function () {
    overlay.style.display = 'none' // Ukryj overlay po kliknięciu przycisku
  })
})
