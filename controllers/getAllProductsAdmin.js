import { clientServices } from "../servicios/productos-servicios.js";

//Creacion de productos
const newProduct = (imageURL,name,price,id) =>{
    console.log("Id: ",id,"de",name)
    const card = document.createElement('div')
    card.classList.add("product")
    const contenido =  
   ` <img src="${imageURL}" alt="" class="category__product__img">
   <i class="fa-solid fa-trash" style="color: #005eff;"></i>
    <div class="product__texts">
        <h2 class="category__product__title">${name}</h2>
        <p class="category__product__price">${price}$</p>
        <a href="" class="category__product__link">Ver producto</a>
    </div>`
    card.innerHTML = contenido
    return card;
}



   const productsContainer = document.querySelector('[data-product]');
clientServices.listaProductos().then((productsData) => {
    productsData.forEach(product => {
        const {image,name,price,id} = product
            const productCard = newProduct(image, name, price,id);
            //Icono para eliminar
            /* const trashIcon = document.createElement('i');
            trashIcon.classList.add('fas', 'fa-trash-alt');
            trashIcon.style.color = '#1765ee';
            productCard.appendChild(trashIcon); */
            //Icono para editar el producto

            productsContainer.appendChild(productCard);


    });
}).catch(error => {
    console.error("Error fetching products:", error);
});


//Creando funcion para eliminar
const deleteProduct = () =>{
    console.log("Confirmar si desea eliminar este producto")
}

