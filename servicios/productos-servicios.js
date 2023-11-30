//Conexion a base de datos
const listaCategorias = () => fetch("http://localhost:3000/categories").then(respuesta=>respuesta.json()) //En una linea


const listaProductos = () => {
    return fetch('http://localhost:3000/products').then(respuesta=>{
        return respuesta.json()
    })
};

const createProduct = (category_id,name,price,image)=>{
    return fetch('http://localhost:3000/products',{
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body:JSON.stringify({category_id,name,price,image, id: uuid.v4()}) //json.stringify sirve para transformar los datos a formato json
})}

const deleteProduct = (id) =>{
    return fetch(`http://localhost:3000/products/${id}`,{
        method: 'DELETE',
    });
}


export const clientServices = {
    listaCategorias,
    listaProductos,
    createProduct,
    deleteProduct
}
