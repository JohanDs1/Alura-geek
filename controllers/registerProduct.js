import { clientServices } from "../servicios/productos-servicios.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener("submit", (e) => {
    const url = document.querySelector('[data-url]').value
    const name = document.querySelector('[data-name]').value
    const option = document.querySelector('[data-options]').value
    const price = document.querySelector('[data-price]').value
    /* const description = document.querySelector('[data-description]').value */
    e.preventDefault();
    clientServices.createProduct(parseInt(option),name,price,url).then((repuesta)=>console.log(repuesta)).catch((err)=>console.log(err))
})


