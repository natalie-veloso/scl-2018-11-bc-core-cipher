window.onload=() => {

    const cifrado =  document.getElementById("root")
    document.getElementById("cifrar").addEventListener("click", (evento)=>{
       evento.preventDefault();
       let text = document.getElementById("texto").value.toUpperCase();
       let offset = parseInt(document.getElementById("desplazamiento").value);

    cifrado.innerHTML= cipher.encode(text,offset)
   
   });
    
   const descifrar =  document.getElementById("root")
   document.getElementById("descifrar").addEventListener("click", (evento)=>{
      evento.preventDefault();
      let text = document.getElementById("texto").value;
      let offset = parseInt(document.getElementById("desplazamiento").value);

      descifrar.innerHTML= cipher.decode(text,offset)
  
  });

} 
