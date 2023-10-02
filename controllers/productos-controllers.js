import { productosServicios } from "../servicios/productos-servicios.js";
const newProduct = (id,name,price,image)=>{
    const card = document.createElement('div')
    card.classList.add('product');
    const content = `
    <img src="${image}" alt="" class="category__product__img">
    <div class="product__texts">
        <h2 class="category__product__title">${name} </h2>
        <p class="category__product__price">${price}$</p>
        <a href="?${id}" class="category__product__link">Ver producto</a>
    </div>
    `;
    card.innerHTML = content;
    return card;
}

const productos = document.querySelector('[data-product]')

productosServicios.listaProductos().then((data)=>{
    if(Array.isArray(data)){
        data.forEach(({id,name,price,image})=>{
            const newCard = newProduct(id,name,price,iamge);
            productos.appendChild(newCard);
        })
    }else{
        console.log("Los datos no son un array valido");
    }
})



listaDeProductos.forEach(producto => {
    const card = newProduct(producto.id, producto.name, producto.price, producto.image);
    productos.appendChild(card);
});