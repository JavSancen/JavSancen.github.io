// Canvas
var cuadrito = document.getElementById("area_de_dibujo");
var color = document.getElementById("select_color");
// EventListeners
cuadrito.addEventListener("mousedown", activarMouse);
cuadrito.addEventListener("mouseup", desactivarMouse);
cuadrito.addEventListener("mousemove", dibujarMouse);

// Contexto de Dibujo
var papel = cuadrito.getContext("2d");

// 'X' y 'Y' inicial y estado de mouse (Sí esta presionado o no)
var xIncial;
var yInicial;
var estadoMouse = false;

// Activa el mouse
function activarMouse(evento) {
  estadoMouse = true;
  xIncial = evento.clientX;
  yInicial = evento.clientY;
}

// Desactiva el mouse
function desactivarMouse() {
  estadoMouse = false;
}

// Función para dibujar
function dibujarMouse(evento) {
  var colorcito = color.value;
  var xFinal = evento.clientX;
  var yFinal = evento.clientY;
  

  if (estadoMouse) {
    dibujarLinea(colorcito, xIncial, yInicial, xFinal, yFinal, papel);

    xIncial = xFinal;
    yInicial = yFinal;
  }
}

// Dibujar Lineas
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

colorPicker.addEventListener("input", actualizarPrimero, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  };
}


