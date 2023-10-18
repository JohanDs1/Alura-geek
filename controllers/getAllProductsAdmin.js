import { clientServices } from "../servicios/productos-servicios.js";

const container = document.querySelector('[data-products]')


clientServices.listaProductos().then((productsData) =>
    productsData.forEach(products => {
        
    })
    )