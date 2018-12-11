window.cipher = {
  encode: (text, offset) => {
    let encryptedResult = "";
    for (let i = 0; i < text.length; i++) {
      let deliveredText = text.toUpperCase();
      let ascii = deliveredText.charCodeAt(i)
      if (ascii === 32) {
        encryptedResult += " ";
      }
      else {
      
        let formula = (ascii - 65 + offset) % 26 + 65;
        let newAscii = String.fromCharCode(formula);
        
        encryptedResult += newAscii;
      }
      /*else {
        encryptedResult += text
      }*/

    }
    return encryptedResult;

  },

  decode: (textB, offsetB) => {
    let decipheredResult = "";
    for (let i = 0; i < textB.length; i++) {
      let deliveredTextB = textB.toUpperCase();
      let asciiB = deliveredTextB.charCodeAt(i)
      if (asciiB === 32) {
        decipheredResult += " ";
      }
      else {
        let formulaB = ((asciiB - 90 - offsetB) % 26) + 90;
        let newAsciiB = String.fromCharCode(formulaB);
        
        decipheredResult += newAsciiB;
      }

    }
    return decipheredResult;

  }
};