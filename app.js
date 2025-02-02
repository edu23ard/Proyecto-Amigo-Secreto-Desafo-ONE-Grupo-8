// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Crea una variable de tipo array, que almacenará los nombres de los amigos ingresados. 
let listaAmigos = [];

// funcion captura el nombre de los amigos en una array
function agregarAmigo() {
    let amigosList = document.getElementById("amigo").value;
    //valida el input
    if (amigosList === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    //verifica si el amigo ya esta en la array
    if (listaAmigos.includes(amigosList)) {
        alert("El amigo ya se encuentra en la lista");
        return; 
    }

    //actualiza la array de amigos
    listaAmigos.push(amigosList);

    //llama a la funcion limpia el input
    limpiarInput();
           
}

//funcion limpia el input
 function limpiarInput() {
        document.querySelector("#amigo").value = "";
    }






