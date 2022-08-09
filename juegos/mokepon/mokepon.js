function startGame() {
    let botonPetPlayer = document.getElementById('boton-pet')
    botonPetPlayer.addEventListener('click', selectPetPlayer)
}

function selectPetPlayer() {
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanPetPlayer = document.getElementById('pet-player')

    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona a una mascota')
    }
}

window.addEventListener('load', startGame)