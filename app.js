
//Evento submit
let formulario = document.getElementById("form")
console.log(formulario)

formulario.addEventListener('submit', datosForm)

function datosForm(e){
    //cancelamos por las dudas 
    e.preventDefault();
    //capturar los datos de los input
    let datos = e.target
    //obtenemos los datos ingresados e enviados en el evento
    console.log(datos.children[0].value)
    console.log(datos.children[1].value)


    let user = datos.children[0].value;
    let password = datos.children[1].value;
//check if user name and pasword correct

    if(user=="Admin"&& password=="Admin123"){
    alert("iniciar sesión con éxito")

}
else{
alert("El nombre de usuario o la contraseña no son correctos")
}

}




