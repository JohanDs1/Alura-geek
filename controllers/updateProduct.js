import { clientServices } from "../servicios/productos-servicios";

const getInformation = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    clientServices.detailProduct(id).then((perfil) => console.log(perfil))
}

getInformation();