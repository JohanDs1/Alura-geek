import { clientServices } from "../servicios/productos-servicios.js"; //Importante poner .js , sino no corre y sale error 404

const options = document.querySelector('[data-options]');

//Obtener categorias en Admin
const getOption = (name) => {
    const createOption = document.createElement('option');
    createOption.value = name; 
    createOption.textContent = name;
    
    return createOption;
}


clientServices.listaCategorias().then((categoryData)=>{
    categoryData.forEach(category => {
        const option = getOption(category.name);
        options.appendChild(option);
    });
    
}).catch(error => {
    console.error("Error fetching categories:", error);
});




