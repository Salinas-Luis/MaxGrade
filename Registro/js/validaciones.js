function validaru(e){
var teclado = document.all ? e.keyCode : e.which;
    if (teclado === 8) return true;
    var codigo = String.fromCharCode(teclado);
    var inputElement = e.target; 
    
    var valorActual = inputElement.value;
    var valorFuturo = valorActual + codigo; 

    var regexCaracter = /^[a-zA-Z0-9_\.]$/;
    if (!regexCaracter.test(codigo)) {
        return false; 
    }
    var conteoPuntos = (valorFuturo.match(/\./g) || []).length;
    if (conteoPuntos > 1) {
        alert("La cantidad de puntos no puede ser mayor a 1")
        return false; 
    }
    if (valorFuturo.length > 16) {
        alert("La cantidad de caracteres no puede superar 16")
        return false; 
    }
    if (codigo === ' ') {
        alert("Por favor rellene el campo de usuario")
        return false;
    }
    return true;
}

function validarc(e){
    var teclado = document.all ? e.keyCode : e.which;
    if (teclado === 8 || teclado === 0) return true; 

    var codigo = String.fromCharCode(teclado);
    var inputElement = e.target; 
    var valorActual = inputElement.value;
    var valorFuturo = valorActual + codigo;
    var regexCaracter = /[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/; 

    if (!regexCaracter.test(codigo)) {
        return false; 
    }
    if (codigo === ' ') {
        alert("Por favor rellene el campo de contraseña")
        return false;
    }

    var caracteresEspeciales = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?"; 
 
    if (caracteresEspeciales.includes(codigo)) {
        if (valorActual.includes(codigo)) {
            alert("El carácter especial '" + codigo + "' solo puede usarse una vez."); 
            return false; 
        }
    }
    if (valorFuturo.length > 12) {
        alert("La cantidad de caracteres no puede superar 12")
        return false; 
    }
    return true;
}



document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#passreg');

    if (togglePassword && password) {
        togglePassword.addEventListener('click', function (e) {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});


function validarCorreoRegistro() {
    var inputCorreo = document.getElementById("correoreg"); 
    var correo = inputCorreo.value.trim(); 
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (correo === "") {
        alert("El campo de Correo no puede estar vacío.");
        inputCorreo.focus();
        return false;
    }
    
    if (!regexCorreo.test(correo)) {
        alert("Formato de correo electrónico inválido. Asegúrate de usar el formato usuario@dominio.com.");
        inputCorreo.focus();
        return false;
    }

    return true;
}

function validarBoletaRegistro() {
    var inputBoleta = document.getElementById("boletareg");
    var boleta = inputBoleta.value.trim(); 
    var regexBoleta = /^\d{10}$/;

    if (boleta === "") {
        alert("Por favor, ingresa tu número de Boleta (10 dígitos).");
        inputBoleta.focus();
        return false;
    }
    
    if (!regexBoleta.test(boleta)) {
        alert("El formato de Boleta es incorrecto. Debe contener exactamente 10 dígitos numéricos.");
        inputBoleta.focus();
        return false;
    }
    
    return true;
}

function validarSemestre() {
    var radios = document.getElementsByName("semestrereg");
    var seleccionado = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            seleccionado = true;
            break;
        }
    }
    
    if (!seleccionado) {
        alert("Debes seleccionar el Semestre actual (1 al 6).");
        document.getElementById("semestre1").focus(); 
        return false;
    }
    
    return true;
}


function validarFormularioRegistro() {
    var user = document.getElementById("userreg").value;
    var password = document.getElementById("passreg").value;
    if (!validarCorreoRegistro()) {
        return false;
    }
    
    if (!validarBoletaRegistro()) {
        return false;
    }

    if (!validarSemestre()) {
        return false;
    }
    if(user === ""){
        alert("Por favor rellene el campo de usuario")
        return false;
    }
    if(user.length<8){
        alert("Ingrese 8 o más caracteres en el usuario")
        return false;
    }
    if(password === ""){
        alert("Por favor, rellene el campo de contraseña")
        return false;
    }
    if(password.length<8){
        alert("Ingrese 8 o más caracteres en el contraseña")
        return false;
    }
    alert("Registro exitoso, volviendo al menu principal...")
    return true;
}