const sectionReset = document.getElementById('boton-reiniciar')
const sectionSeleccionarAtaque = document.getElementById('select-attack')
const botonPetPlayer = document.getElementById('boton-pet')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReset.style.display = 'none'

const sectionSeleccionarPet = document.getElementById('select-pet')
const inputHipodoge = document.getElementById('Hipodoge')
const inputCapipepo = document.getElementById('Capipepo')
const inputRatigueya = document.getElementById('Ratigueya')
const spanPetPlayer = document.getElementById('pet-player')

const spanPetEnemy = document.getElementById('pet-enemy')

const spanVidasPlayer = document.getElementById('vidas-player')
const spanVidasEnemy = document.getElementById('vidas-enemy')

const sectionMensajes = document.getElementById('resultado')
const ataquesOfPlayer = document.getElementById('ataques-Player')
const ataquesOfEnemy = document.getElementById('ataques-Enemy')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataquePlayer
let ataqueEnemy
let opcionMokepones
let vidasPlayer = 3
let vidasEnemy = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png' ,5)
let capipepo = new Mokepon('Capipepo','https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png' ,5)
let ratigueya = new Mokepon('Ratigueya','https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png' ,5)

hipodoge.ataques.push(
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌱', id:'boton-tierra'}
)

capipepo.ataques.push(
    {nombre:'🌱', id:'boton-agua'},
    {nombre:'🌱', id:'boton-agua'},
    {nombre:'🌱', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-tierra'}
)

ratigueya.ataques.push(
    {nombre:'🔥', id:'boton-agua'},
    {nombre:'🔥', id:'boton-agua'},
    {nombre:'🔥', id:'boton-agua'},
    {nombre:'💧', id:'boton-fuego'},
    {nombre:'🌱', id:'boton-tierra'}
)

mokepones.push(hipodoge,capipepo,ratigueya)

function startGame() {

    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}/>
            <label class="tarjeta-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `
    contenedorTarjetas.innerHTML += opcionMokepones
    })

    botonPetPlayer.addEventListener('click', selectPetPlayer)

    botonFuego.addEventListener('click', ataqueFuego)

    botonAgua.addEventListener('click', ataqueAgua)

    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function selectPetPlayer() {
    sectionSeleccionarPet.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'


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
        revisarVidas()
    }

    function revisarVidas() {
        if (vidasEnemy == 0) {
            createMensajeFinal('FELICITACIONES! Ganaste 😎')
        }    else if (vidasPlayer == 0) {
            createMensajeFinal('Lo siento perdiste 😥')
        }
    }


function createMensaje(resultado) {

    let nuevoAtaquePlayer = document.createElement('p')
    let nuevoAtaqueEnemy = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaquePlayer.innerHTML = ataquePlayer
    nuevoAtaqueEnemy.innerHTML = ataqueEnemy

    ataquesOfPlayer.appendChild(nuevoAtaquePlayer)
    ataquesOfEnemy.appendChild(nuevoAtaqueEnemy)
}

function createMensajeFinal(resultadoFinal) {
    sectionReset.style.display = 'block'

    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)



