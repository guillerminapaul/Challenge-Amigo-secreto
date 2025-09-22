let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ'-]+$/.test(nombre)) {
        alert("Por favor, ingrese solo letras sin números ni espacios.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    input.focus();
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo()
