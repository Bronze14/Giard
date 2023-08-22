document.addEventListener('DOMContentLoaded', function () {
  const ofertaTrigger = document.querySelector('#dropdownNavbarLink')
  const ofertaContent = document.querySelector('#dropdownNavbar')

  ofertaTrigger.addEventListener('click', function (event) {
    event.stopPropagation() // Zapobiegaj propagacji kliknięcia, aby nie wywoływać zdarzenia dokumentu

    ofertaContent.classList.toggle('hidden') // Toggle klasy "hidden"
  })

  // Nasłuchiwanie kliknięcia na cały dokument
  document.addEventListener('click', function (event) {
    if (
      !ofertaTrigger.contains(event.target) &&
      !ofertaContent.contains(event.target)
    ) {
      ofertaContent.classList.add('hidden') // Dodaj klasę "hidden" jeśli kliknięcie było poza elementem "oferta-trigger" i "oferta-content"
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.querySelector('#search-icon')
  const searchInput = document.querySelector('#search-input')

  searchIcon.addEventListener('click', function () {
    searchIcon.classList.add('hidden')
    searchInput.classList.remove('hidden')
    searchInput.focus()
  })

  searchInput.addEventListener('focusout', function () {
    searchInput.classList.add('hidden')
    searchIcon.classList.remove('hidden')
  })
})
