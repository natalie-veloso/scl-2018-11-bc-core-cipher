window.onload = () => {

   const code = document.getElementById("root")
   document.getElementById("encrypt").addEventListener("click", (evento) => {
      evento.preventDefault();
      let text = document.getElementById("enterText").value.toUpperCase();
      let offset = parseInt(document.getElementById("displacement").value);

      code.innerHTML = cipher.encode(text, offset)

   });

   const descifrar = document.getElementById("root")
   document.getElementById("decipher").addEventListener("click", (evento) => {
      evento.preventDefault();
      let text = document.getElementById("enterText").value;
      let offset = parseInt(document.getElementById("displacement").value);

      descifrar.innerHTML = cipher.decode(text, offset)

   });

}
