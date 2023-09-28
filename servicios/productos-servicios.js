
const listaProductos = () => {
    return fetch("http://localhost:3000/categories")
        .then(respuesta => respuesta.json())
        .catch(error => console.log(error))
}

//POST
const createProduct = (image, price, name) => {
    return fetch(`http://localhost:3000/categories`, {
        method: "POST",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify({
            image,
            price,
            name
        })
    }).then(respuesta => {
        if (respuesta.ok) {
            return respuesta;
        } else {
            throw new Error("No se pudo crear tu producto");
        }
    });
}



export const productosServicios = {
    listaProductos,
    createProduct
}