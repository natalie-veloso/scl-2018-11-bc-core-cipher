function cifrar() {
    let text = document.getElementById("texto").value;
    let offset = document.getElementById("desplazamiento").value;
    let resultadoCifrado = cipher.encode(text, offset);
    document.getElementById("textoCifrado").innerHTML = resultadoCifrado;

}

function descifrar() {
    let text2 = document.getElementById("texto").value;
    let offset2 = document.getElementById("desplazamiento").value;
    let resultadoDescifrado = cipher.decode(text2, offset2);
    document.getElementById("textoDescifrado").innerHTML = resultadoDescifrado;

}