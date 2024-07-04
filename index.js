window.onload = (event) => {

  const modal = document.getElementById('overlay')
  const title = document.querySelector('h1')
  const cancelModal = document.getElementById('cancelModal')
  const quoteEl = document.getElementById('quote')
  const authorEl = document.getElementById('author')

  const setQuote = async () => {
    // return // quote api no longer in service
    const quote = {content:'', author:''}

    try {
      const response = await fetch('https://type.fit/api/quotes')
      const data = await response.json()
      const randomIdx = Math.floor(Math.random() * data.length)
      quote.content = data[randomIdx].text
      quote.author = data[randomIdx].author
    } catch (error) {
      alert('unable to fetch quote', error)
    }
    quoteEl.textContent = quote.content
    authorEl.textContent = '- ' + quote.author.replace(', type.fit', '');
    
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
