function startGame() {
    let botonPetPlayer = document.getElementById("boton-pet")
    botonPetPlayer.addEventListener("click", selectPetPlayer)
}

function selectPetPlayer() {
    alert("SELECCONASTE TU MASCOTA")
}

window.addEventListener.apply("load", startGame)