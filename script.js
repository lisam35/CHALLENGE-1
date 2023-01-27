const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const noMensaje = document.querySelector(".noMensaje");
const ingresaMensaje = document.querySelector(".ingresaMensaje");
const textarea = document.querySelector(".mensaje");
const answer = document.querySelector(".copyAnswer");
const copy   = document.querySelector(".copiar");
copy.style.visibility = "hidden";


//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    noMensaje.remove();
    ingresaMensaje.remove();
    copy.style.visibility = "visible";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    noMensaje.remove();
    ingresaMensaje.remove();
    copy.style.visibility = "visible";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

copy.addEventListener('click', function(e) {
    // Sleccionando el texto
    textarea.select(); 
    try {
        // Copiando el texto seleccionado
        var successful = document.execCommand('copy');
  
        if(successful) alert("Copiado!");
        else alert("Incapaz de copiar!");
    } catch (err) {
        alert("Browser no soportado!");
    }
 });