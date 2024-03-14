const ingresarTexto = document.getElementById("ingresarTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const primeroParrafoResultado = document.getElementById("primeroParrafoResultado");
const segundoParrafoResultado = document.getElementById("segundoParrafoResultado");
const munheco = document.getElementById("munheco");
const mensajeTexto = document.getElementById("mensajeTexto");

primeroParrafoResultado.setAttribute('readonly', 'true');

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) =>{
    primeroParrafoResultado.innerHTML = nuevoValor;
    munheco.classList.add("oculto");
    ingresarTexto.value = ""
    segundoParrafoResultado.style.display = "none"
    botonCopiar.style.display = "block"
    mensajeTexto.classList.add("ajustar")
    primeroParrafoResultado.classList.add("ajustar");
}

const reset = () =>{
   primeroParrafoResultado.innerHTML = "";
   munheco.classList.remove("oculto");
   segundoParrafoResultado.style.display = "block";
   botonCopiar.style.display = "none";
   mensajeTexto.classList.remove("ajustar");
   primeroParrafoResultado.classList.remove("ajustar");
}

botonEncriptar.addEventListener("click", () =>{
    const texto = ingresarTexto.value.toLowerCase()

    if(texto != ""){
        function encriptar(newText){
            for(let i = 0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1])
                }
            }
            return newText
        }
        remplace(encriptar(texto));
    }else{
        reset();
        ingresarTexto.focus();
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Debes ingresar un texto para encriptar!',
        }) 
    }
})

botonDesencriptar.addEventListener("click", () =>{
    const texto = ingresarTexto.value.toLowerCase()
    if(texto != ""){
        function desencriptar(newText){
            for(let i = 0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0])
                }
            }
            return newText
        }
        remplace(desencriptar(texto));
    }else{
        reset();
        ingresarTexto.focus();
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Debes ingresar un texto para desencriptar!',
        })
    }
})

botonCopiar.addEventListener("click", () =>{
   let texto = primeroParrafoResultado;

   texto.select();
   document.execCommand('copy');
   reset();
   ingresarTexto.focus();
   Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Texto Copiado',
    showConfirmButton: false,
    timer: 1000
   })
})
