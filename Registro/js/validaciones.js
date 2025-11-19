
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
        Swal.fire({
            title: "Por favor, ingrese solo un punto",
            icon: "warning",
        })
        return false; 
    }
    if (valorFuturo.length > 16) {
        Swal.fire({
            title: "La cantidad de caracteres debe ser menor a 16",
            icon: "warning",
        })
        return false; 
    }
    if (codigo === ' ') {
        Swal.fire({
            title: "Por favor, rellene el campo usuario",
            icon: "warning",
        })
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
        Swal.fire({
            title: "Por favor, rellene el campo de contraseña",
            icon: "warning",
        })
        return false;
    }

    var caracteresEspeciales = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?"; 
 
    if (caracteresEspeciales.includes(codigo)) {
        if (valorActual.includes(codigo)) {
            Swal.fire({
                title: "El carácter especial '" + codigo + "' solo puede usarse una vez.6",
                icon: "warning",
            }) 
            return false; 
        }
    }
    if (valorFuturo.length > 12) {
        Swal.fire({
            title: "La cantidad de caracteres en la contraseña no puede superar 12.",
            icon: "warning",
        }) 
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
        Swal.fire({
            title: "El campo correo no puede estar vacio.",
            icon: "warning",
        }) 
        inputCorreo.focus();
        return false;
    }
    
    if (!regexCorreo.test(correo)) {
        Swal.fire({
            title: "Formato de correo invalido. Use el formato usuario@dominio.com",
            icon: "warning",
        }) 
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
        Swal.fire({
            title: "El campo boleta no puede estar vacio.",
            icon: "warning",
        })         
        inputBoleta.focus();
        return false;
    }
    
    if (!regexBoleta.test(boleta)) {
        Swal.fire({
            title: "Formato de boleta invalido, debe tener 10 digitos.",
            icon: "warning",
        }) 
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
        Swal.fire({
            title: "Seleccione el semestre actual",
            icon: "warning",
        }) 
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
        Swal.fire({
            title: "El campo usuario no puede estar vacio.",
            icon: "warning",
        }) 
        return false;
    }
    if(user.length<8){
        Swal.fire({
            title: "Ingrese de 8 a 16 caracteres en usuario.",
            icon: "warning",
        }) 
        return false;
    }
    if(password === ""){
        Swal.fire({
            title: "El campo contraseña no puede estar vacio.",
            icon: "warning",
        }) 
        return false;
    }
    if(password.length<8){
        Swal.fire({
            title: "Ingrese de 8 a 12 caracteres en contraseña",
            icon: "warning",
        }) 
        return false;
    }
    Swal.fire({
        title: "Registro exitoso.",
        icon: "sucess",
    }) 
    return true;
}