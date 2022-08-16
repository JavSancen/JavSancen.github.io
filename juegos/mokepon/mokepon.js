let ataquePlayer
let ataqueEnemy
let vidasPlayer = 3
let vidasEnemy = 3

function startGame() {
    let botonPetPlayer = document.getElementById('boton-pet')
    botonPetPlayer.addEventListener('click', selectPetPlayer)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
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
    selectPetEnemy()
}

function selectPetEnemy() {
    let petAleatorio = aleatorio(1,3)
    let spanPetEnemy = document.getElementById('pet-enemy')

    if (petAleatorio == 1) {
        spanPetEnemy.innerHTML = 'Hipodoge'
    } else if (petAleatorio == 2) {
        spanPetEnemy.innerHTML = 'Capipepo'
    } else {
        spanPetEnemy.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataquePlayer = 'FUEGO 🔥'
    ataqueAleatorioEnemy()
}
function ataqueAgua() {
    ataquePlayer = 'AGUA 💧'
    ataqueAleatorioEnemy()
}
function ataqueTierra() {
    ataquePlayer = 'TIERRA 🌱'
    ataqueAleatorioEnemy()
}


function ataqueAleatorioEnemy() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemy = 'FUEGO 🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemy = 'AGUA 💧'
    } else {
        ataqueEnemy = 'TIERRA 🌱'
    }

    combate()
}

function combate() {
    let spanVidasPlayer = document.getElementById('vidas-player')
    let spanVidasEnemy = document.getElementById('vidas-enemy')

    if (ataqueEnemy == ataquePlayer) {
        createMensaje("EMPATE")
        } else if (ataquePlayer == 'FUEGO 🔥' && ataqueEnemy == 'TIERRA 🌱') {
        createMensaje("GANASTE 🎉")
        vidasEnemy--
        spanVidasEnemy.innerHTML = vidasEnemy
        } else if (ataquePlayer == 'AGUA 💧' && ataqueEnemy == 'FUEGO 🔥') {
        createMensaje("GANASTE 🎉")
        vidasEnemy--
        spanVidasEnemy.innerHTML = vidasEnemy
        } else if (ataquePlayer == 'TIERRA 🌱' && ataqueEnemy == 'AGUA 💧') {
        createMensaje("GANASTE 🎉")
        vidasEnemy--
        spanVidasEnemy.innerHTML = vidasEnemy
        } else {
        createMensaje("PERDISTE")
        vidasPlayer--
        spanVidasPlayer.innerHTML = vidasPlayer
        }
    }


function createMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataquePlayer + ', la mascota del enemigo ataco con ' + ataqueEnemy + ' - ' + resultado

    sectionMensajes.appendChild(parrafo)
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)