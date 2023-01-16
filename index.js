window.onload = (event) => {

  const modal = document.getElementById('overlay')
  const title = document.querySelectorAll('h1')[0]
  const cancelModal = document.getElementById('cancelModal')
  const quoteEl = document.getElementById('quote')
  const authorEl = document.getElementById('author')

  const setQuote = async () => {
    const quote = {content:'', author:''}

    try {
      const response = await fetch('https://quotable.io/random')
      const data = await response.json()
      quote.content = data.content
      quote.author = data.author
    } catch (error) {
      alert('unable to fetch quote', error)
    }
    quoteEl.textContent = quote.content
    authorEl.textContent = '- ' + quote.author
  }

  const toggleModal = () => {
    if (modal.classList.contains('hide')) {
      modal.classList.replace('hide', 'show')
    } else if (modal.classList.contains('show')) {
      modal.classList.replace('show', 'hide')
    }
  }

  title.addEventListener('click', toggleModal)
  cancelModal.addEventListener('click', toggleModal)
  setQuote();
}
