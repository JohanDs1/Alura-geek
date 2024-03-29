/*Importamos clienteServices que va a tener la comunicacion a la fake api y accedemos primero a clientServices
y luego a las funciones internas*/
import { clientServices } from "../servicios/productos-servicios.js";

//Container para mostrar la categoria 
const containerProducts = (name,id) => {
    console.log(id)
    const productContainer = document.createElement('div');
    productContainer.classList.add('category__container');
    const contentContainer = `
        <div class="category__div__head">
            <h2 class="category__name">${name}</h2>
            <div class="category__div__text__img">
                <h3 class="category__watchAll"><a href="?${id}">Ver todo</a></h3>
                <svg  class="category__img__arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_1_67)">
                        <path d="M3.99976 13L16.1698 13L10.5798 18.59L11.9998 20L19.9998 12L11.9998 4L10.5898 5.41L16.1698 11L3.99976 11L3.99976 13Z" fill="#2A7AE4"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_67">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
        <div class="products" data-product></div>
    `;
    productContainer.innerHTML = contentContainer;
    return productContainer;
}

//Creacion de productos
const newProduct = (imageURL,name,price) =>{
    const card = document.createElement('div')
    card.classList.add("product")
    const contenido =  
   ` <img src="${imageURL}" alt="" class="category__product__img">
    <div class="product__texts">
        <h2 class="category__product__title">${name}</h2>
        <p class="category__product__price">${price}$</p>
        <a href="" class="category__product__link">Ver producto</a>
    </div>`
    card.innerHTML = contenido
    return card;
}


const categorySection = document.querySelector('.category');

clientServices.listaCategorias().then((categories) => {
    categories.forEach(categoryData => {
        const {name,id} = categoryData;
        const categoryContainer = containerProducts(name, id);
        categorySection.appendChild(categoryContainer);

        const productsContainer = categoryContainer.querySelector('[data-product]');

        clientServices.listaProductos().then((productsData) => {
            productsData.forEach(product => {
                const {category_id,image,name,price} = product
                console.log("IMAGEN: ",image,"NOMBRE: ",name,"PRECIO: ",price,"ID: ", product.id)
                if (id === category_id) {
                    const productCard = newProduct(image, name, price);
                    productsContainer.appendChild(productCard);
                }
            });
        }).catch(error => {
            console.error("Error fetching products:", error);
        });
    });
}).catch(error => {
    console.error("Error fetching categories:", error);
});