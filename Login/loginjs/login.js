function validaru(e){
    var teclado = document.all ? e.keycode : e.which
    if(teclado === 8) return true;
    var regex = /[a-Z\s]/
    if (teclado === ".") var doblepunto= true;
    if(doblepunto=true){
        if(teclado === ".") return false;
    }
    var codigo = String.fromCharCode(teclado);
    return regex.test(codigo);
}

function validarc(e){
    
}