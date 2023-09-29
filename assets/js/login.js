const form = document.querySelector(".login__form");
const inputs = document.querySelectorAll("input");
const usuario = document.querySelector('[data-user]');
const contraseña = document.querySelector('[data-password]');
const BtnEnvio = document.querySelector(".login__button");
const datos = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    setData();
    window.location.href = "../../screens/Admin-createProduct.html"
});

function setData() {
    const userValue = usuario.value;
    const passValue = contraseña.value;
    const dataObj = {
        correo: userValue,
        contraseña: passValue
    };
    datos.push(dataObj);
    console.log(datos)
}

