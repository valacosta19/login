
function ingresar() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var usuarioVerificado = "valacosta19";
    var contrasenaVerificada = "valentina";

    if ((usuario === usuarioVerificado) && (contrasena === contrasenaVerificada)) {
        alert ("Bienvenida Valentina");
    } else {
        alert ("Usuario o contrasena incorrecta");
    } 
}