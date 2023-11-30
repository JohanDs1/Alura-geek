import { clientServices } from "../servicios/productos-servicios.js";

//Creacion de productos
const newProduct = (imageURL,name,price,id) =>{
    /* console.log("Id: ",id,"de",name) */
    const card = document.createElement('div')
    card.classList.add("product")
    const contenido =  
   ` <img src="${imageURL}" alt="" class="category__product__img">
   <i><img class="fa-solid fa-trash" src="../assets/img/trash-solid.svg" alt="Borrar" id="${id}" ></i>
    <div class="product__texts">
        <h2 class="category__product__title">${name}</h2>
        <p class="category__product__price">${price}$</p>
        <a href="" class="category__product__link">Ver producto</a>
    </div>`
    card.innerHTML = contenido
    const btnDel = card.querySelector('i')
    const imgDel =btnDel.querySelector('img')
    imgDel.addEventListener('click',()=>{
        const id = imgDel.id
        clientServices.deleteProduct(id).then( response => console.log(response)).catch(err => alert("Ocurrió un error", err))
    })
    return card;
}


   const productsContainer = document.querySelector('[data-product]');
clientServices.listaProductos().then((productsData) => {
    productsData.forEach(product => {
        const {image,name,price,id} = product
            const productCard = newProduct(image, name, price,id);
            productsContainer.appendChild(productCard);


    });
}).catch(error => {
    console.error("Error fetching products:", error);
});

