const d= document;
const textArea = d.querySelector (".form_input");
const imagen= d.querySelector (".resultado_img");
const loader = d.querySelector (".loader");
const resultTitulo = d.querySelector (".resultado_titulo");
const textoderecho = d.querySelector (".resultado_texto");
const botonencriptar =d.querySelector (".form_btn");
const botonDesencriptar =d.querySelectorAll (".form_btn");
const botoncopiar = d.querySelector (".result_btn");

//llaves del proyecto//
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
//Función para encriptar//

function encriptarmensaje (mensaje){
    let mensajeEncriptado = " "
    for (let i= 0;  i<mensaje.length; i++){
        let letra = mensaje [i];
        let encriptada = letra; 

        for(let j=0; j< llaves.length; j++){
            if (letra === llaves [j][0]){
                encriptada = llaves [j][1]; 
            break; 

            }
        }
        mensajeEncriptado += encriptada;
    }
    
    return mensajeEncriptado; 
}

//Función para desencriptar//

function desencriptarmensaje (mensaje){
    let mensajeDesencriptado = mensaje;
    for (let i=0; i<llaves.length; i++ ){
        let regex = new RegExp (llaves [i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace (regex, llaves [i][0]);
     }
          return mensajeDesencriptado; 
    }
    
//Ocultar elementos dinamicamente
textArea.addEventListener ("input", (e) => {
    imagen.style.display  = "none";
    console.log (e.target.value); 
    loader.classList.remove (hidden); 
    resultTitulo.textContent= "Capturando mensaje";
    textoderecho.textContent= "";


})
//Función del botón encriptar//
botonencriptar.addEventListener("click", (e) => {
    e.preventDefault ();
    let mensaje = textArea.value.toLowerCase ();
    let mensajeEncriptado = encriptarmensaje (mensaje);
    textoderecho.textContent = mensajeEncriptado;
    botoncopiar.classList.remove ("hidden");
    resultTitulo.textContent= "El resultado es: ";
})

botonDesencriptar [1].addEventListener("click", (e) => {
    e.preventDefault ();
    let mensaje = textArea.value.toLowerCase ();
    let mensajeDesencriptado = desencriptarmensaje (mensaje);
    textoderecho.textContent = mensajeDesencriptado;
    botoncopiar.classList.remove ("hidden");
    resultTitulo.textContent= "El resultado es: ";
})
botoncopiar.addEventListener("click", () => {
    let textoCopiado = textoderecho.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        imagen.style.display = "block";
        loader.classList.add("hidden");
        resultTitulo.textContent = "El texto se copió";
        botoncopiar.classList.add("hidden");
        textoderecho.textContent = "";
    });
});
