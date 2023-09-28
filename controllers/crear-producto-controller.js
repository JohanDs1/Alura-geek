import { productosServicios } from "../servicios/productos-servicios";

const form = document.querySelector("[data-form]")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;

    productosServicios.createProduct(url, price, name)
        .then(respuesta => {
            if (respuesta.ok) {
                // Redirigir después de crear el producto
                window.location.href = "../screens/index.html";
            } else {
                console.log("Error al crear el producto");
            }
        })
        .catch(error => console.log(error))
});
