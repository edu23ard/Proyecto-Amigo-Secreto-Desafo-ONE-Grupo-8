// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Crea una variable de tipo array, que almacenará los nombres de los amigos ingresados. 
let listaAmigos = [];

// funcion captura el nombre de los amigos en una array
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    //valida el input
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;    }

    //verifica si el amigo ya esta en la array
    if (listaAmigos.includes(nombreAmigo)) {
        alert("El amigo ya se encuentra en la lista");
        return; 
    }

    //actualiza la array de amigos
    listaAmigos.push(nombreAmigo);

    //limpia el input
    limpiarInput();
    
    //actualiza la array en la pagina
    actualizarListaAmigos();
    
}
//funcion limpia el input
 function limpiarInput() {
        document.querySelector("#amigo").value = "";
    }

//actualiza y muestra la array en la pagina
function actualizarListaAmigos() {
    let listaActualizada = document.getElementById("listaAmigos");
    listaActualizada.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaActualizada.appendChild(li);
        }

    }
   
    //funcion para sortear un amigo
    function sortearAmigo() {
        let resultado = document.getElementById("resultado");

        if (listaAmigos.length < 2) {
            alert("No hay suficientes amigos para sortear");
            return;
        }

        let generaAmigoAleatorio = Math.floor(Math.random() * listaAmigos.length);
        
        resultado.innerHTML = `Tu amigo secreto es: ${listaAmigos[generaAmigoAleatorio]}`;
    }




