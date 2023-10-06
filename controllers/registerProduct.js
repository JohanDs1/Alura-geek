const formulario = document.querySelector('[data-form]')

formulario.addEventListener("submit", (e) => {
    const url = document.querySelector('[data-url]').value
    const name = document.querySelector('[data-name]').value
    const option = document.querySelector('[data-options]').value
    const price = document.querySelector('[data-price]').value
    const description = document.querySelector('[data-description]').value
    console.log(url,name,option,price,description)
    e.preventDefault();
})

