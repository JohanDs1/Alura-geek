import { clientServices } from "../servicios/productos-servicios.js"; //Importante poner .js , sino no corre y sale error 404

const options = document.querySelector('[data-options]');

//Obtener categorias en Admin
const getOption = (name,category_id) => {
    const createOption = document.createElement('option');
    createOption.value = parseInt(category_id); 
    createOption.textContent = name;
    
    return createOption;
}


clientServices.listaCategorias().then((categoryData)=>{
    categoryData.forEach(({name,id}) => {
        const option = getOption(name,id);
        options.appendChild(option);
    });
    
}).catch(error => {
    console.error("Error fetching categories:", error);
});




