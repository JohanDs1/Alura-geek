//Conexion a base de datos
const listaCategorias = () => fetch("http://localhost:3000/categories").then(respuesta=>respuesta.json()) //En una linea


const listaProductos = () => {
    return fetch('http://localhost:3000/products').then(respuesta=>{
        return respuesta.json()
    })
};

/* const createProduct = (imageURL,name,price)=>{

}
 */

export const clientServices = {
    listaCategorias,
    listaProductos
}
