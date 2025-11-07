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
function validars(){
    var password = document.getElementById("userreg").value;
    if(password === ""){
        alert("Por favor, rellene el campo de palabra de verificación")
        return false;
    }
    if(password.length<8){
        alert("Ingrese minimo 8 caracteres el campo de palabra de verificación")
        return false;
    }
    return true;
}