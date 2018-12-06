window.cipher = {
  encode: (text, offset) => {
    let resultadoCifrado = "";
       for (let i = 0; i < text.length; i++){
          let textoEntregado = text.toUpperCase();
          let ascii = textoEntregado.charCodeAt(i)
          if (ascii === 32){
            resultadoCifrado += " ";}
            else{
          let formula = (ascii - 65 + offset) % 26 + 65;
          let nuevoAscii = String.fromCharCode(formula);
          resultadoCifrado += nuevoAscii;}

    }
    return resultadoCifrado;

},

  decode: (textB, offsetB) => {
    let resultadoDescifrado = "";
        for (let i = 0; i < textB.length; i++){
          let textoEntregadoB = textB.toUpperCase();
          let asciiB = textoEntregadoB.charCodeAt(i)
          if (asciiB === 32){
            resultadoDescifrado += " ";}
            else{
          let formulaB = ((asciiB - 90 - offsetB) % 26) + 90;
          let nuevoAsciiB = String.fromCharCode(formulaB);
          resultadoDescifrado += nuevoAsciiB;}

    }
    return resultadoDescifrado;

}};