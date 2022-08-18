window.onload = (event) => {

  const modal = document.getElementById('overlay')
  const title = document.querySelectorAll('h1')[0]
  const cancelModal = document.getElementById('cancelModal')

  const toggleModal = () => {
    if (modal.classList.contains('hide')) {
      console.log('showing modal')
      modal.classList.replace('hide', 'show')
    } else if (modal.classList.contains('show')) {
      console.log('hiding modal')
      modal.classList.replace('show', 'hide')
    }
  }

  title.addEventListener('click', toggleModal)
  cancelModal.addEventListener('click', toggleModal)
}