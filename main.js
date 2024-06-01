//Registro
document.addEventListener("DOMContentLoaded", function() {
    var registroNuevo = document.getElementById("formRegister");
    var emailNuevo = document.getElementById("email");
    var usuarioNuevo = document.getElementById("user");
    var contrasenaNueva = document.getElementById("password");
    var contrasenaConfirma = document.getElementById("confirm_password");
    var fechaNueva = document.getElementById("fecha");
   
    

    registroNuevo.addEventListener("submit", function(event) {
        let registroValido = true;

        if (!validarEmail(emailNuevo.value)) {
            event.preventDefault();
            alert("Por favor, ingresa una dirección de correo válida.");
            registroValido = false;
        }

        if (usuarioNuevo.value.trim() === "") {
            event.preventDefault();
            alert("Por favor, ingresa un nombre de usuario válido.");
            registroValido = false;
        }

        if (contrasenaNueva.value.length < 6) {
            event.preventDefault();
            alert("La contraseña debe tener al menos 6 caracteres.");
            registroValido = false;
        }

        if (contrasenaNueva.value !== contrasenaConfirma.value) {
            event.preventDefault();
            alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
            registroValido = false;
        }
        if (!validarEdad(fechaNueva.value)) {
            alert("Disculpe, debe ser mayor de 18 para poder registrarse");
        } 


        if (registroValido) {
            alert("Validacion Exitosa"); //Luego habria que agregar nuevos valores a la base de datos
        }
    });

    function validarEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validarEdad(fechaNacimiento) {
        var fechaActual = new Date();
        var fechaNac = new Date(fechaNacimiento);
        var diferencia = fechaActual - fechaNac;
        var edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25)); //Resultado en Años
        return edad >= 18;

    }
});

//Inicio de Sesion
document.addEventListener("DOMContentLoaded", function() {
    var inicioSesion = document.getElementById("myForm"); 
    var usuarioNombre = document.getElementById("email_login");
    var contrasenaActual = document.getElementById("password_login");

    inicioSesion.addEventListener("submit", function(event) {
        let inicioValido = true;

        if (!validateEmail(usuarioNombre.value)) { //Aca luego habria que modificar para que verifique si es el mail esta  en la Base de Datos
            event.preventDefault();
            alert("Por favor, ingresa una dirección de correo válida.");
            inicioValido = false;
        }

        if (contrasenaActual.value.length < 6) { //Aca luego habria que modificar para que verifique si es la contraseña que esta en la Base de Datos 
            event.preventDefault();
            alert("La contraseña debe tener al menos 6 caracteres.");
            inicioValido = false;
        }

        if (inicioValido) {
            alert("Bienvenido al Sistema");
        }
    });

    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }



});

