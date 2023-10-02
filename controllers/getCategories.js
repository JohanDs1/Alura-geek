/* fetch("http://localhost:3000/categories")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log("Error en traer la informacion", error))
 */
const http = new XMLHttpRequest;
http.open('GET',`http://localhost:3000/categories`)
http.send()
http.onload = () =>{
    const data = JSON.parse(http.response)
    console.log(data)
    const options = document.querySelector('[data-options]');

    data.forEach(category => {
        const option = getOption(category.name);
        options.appendChild(option);
    });
    
}
//Obtener categorias en Admin

const getOption = (name) => {
    const createOption = document.createElement('option');
    createOption.value = name; 
    createOption.textContent = name;

    return createOption;
}

