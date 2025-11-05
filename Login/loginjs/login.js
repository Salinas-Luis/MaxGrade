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
    const password = document.querySelector('#loginpass');

    if (togglePassword && password) {
        togglePassword.addEventListener('click', function (e) {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});

function validars(){
    var user = document.getElementById("logincu").value;
    var password = document.getElementById("loginpass").value;
    if(user === ""){
        alert("Por favor, rellene el campo de usuario")
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
}

