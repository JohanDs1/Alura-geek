//Conectando las categorias existentes
const http = new XMLHttpRequest();
http.open("GET","http://localhost:3000/categories");
http.send();
http.onload = () =>{
    const data = JSON.parse(http.response)
    console.log(data)
    data.forEach(categories =>{
        const categoriesContainer = containerProducts(categories.name,categories.id)
        category.appendChild(categoriesContainer)

        
       /*  if(categories.id == products.category_id){
            console.log("Hola")
        }  */  
    })
}




//Container para mostrar la categoria 
const category = document.querySelector('[data-category]')

const containerProducts = (name,id) => {
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




//Container para sostener los productos

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

const productsContainer = document.querySelector('[data-product]')

const https1 = new XMLHttpRequest();

//abrir http (metodo,url)
https1.open("GET","http://localhost:3000/products")
https1.send();

https1.onload = () =>{
    const data1 = JSON.parse(https1.response)
    console.log(data1)
    data1.forEach(products =>{
        const productCard = newProduct(products.image,products.name,products.price )
        productsContainer.appendChild(productCard)
    })
}

/* export pro
 */
