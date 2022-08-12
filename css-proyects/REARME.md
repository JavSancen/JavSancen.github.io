CSS GRID LAYOUT

grow = fila
colum = columnas

Cada fila tiene lineas que las dividen para convertir cada seccion en una celda.


Los contenedores formaran parte de cada seccion o subdivicion mientras que estos puedes llevar dentro items ya sea de enlaces, imagenes, iconos o/y videos.

<div class= "contenedor">
<div class="item item-1"></div>
<div class="item item-2"></div>
</div>


Track = un grupo de celdas ya sea horizontal o vertical.

Area = una celda que ocupa varios espacios.




PROPIEDADES DEL CONTENEDOR:

- Display-grid define el uso de grid

- Grid-template define un espaciado determinado para filas o columnas segun indiques een el objetivo del template

- Gaps
    row-gap, column-gap, gap(en caso de querer que columnas y filas tengan el mismo espaciado)

- Grid-auto define un patron repetitivo en la delimitación




PROPIEDADES DE ALINEACIÓN DE LOS ITEMS:
aplica a los items dentro del contenedor

- Justify-items

- Align-items

- Place-items

PROPIEDADES DE ALINEACIÓN DE LOS CONTENEDORES:
aplica a los contenedores

- Justify-content  ajuste con respecto a x

- Align-content   ajuste con respecto a y

- Place-content  ajuste con respecto a un espacio definitivo es decir al seleccionar center como valor para esta propiedad, el elemento va a center con respecto a 'y' & 'x'

PROPIEDADES DE ALINEACIÓN DEL ITEM:
aplica a los item por individual a fin de un grid más personalizado

- Justify-self

- Align-self

- Place-self




PROPIEDADES DE UBICACIÓN:

- grid-column-start  definir donde empieza y donde termina el elemento
- grid-column-end

- grid-row-start
- grid-row-end

- grid-area   se usa para abarcar varias celdas




