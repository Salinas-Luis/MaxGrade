

function crearTarjetaDeTarea(datosTarea) {
    const { id, nombre, materia, fecha, prioridad, instrucciones } = datosTarea;
    const idString = String(id); 

    const lapsoContenedorId = `lapso-container-${idString}`;

    const tarjetaHTML = `
        <div class="tarjeta-tarea" data-tarea-id='${idString}'> 
            <h3><i class="fa-solid fa-bookmark"></i> ${nombre}</h3>
            <p class="materia-nombre">Materia: ${materia}</p>
            <p class="fecha-entrega"><i class="fa-solid fa-calendar-days"></i> Fecha de Entrega: ${fecha}</p>
            <p class="prioridad"> Prioridad: <strong>${prioridad}</strong></p>
            <div class="instrucciones-detalle">
                <h4><i class="fa-solid fa-pencil"></i> Instrucciones:</h4>
                <p>${instrucciones}</p>
            </div>
            <button class="btn-completar">Completar</button>
            <button class="btn-eliminar" data-tarea-id='${idString}'>Eliminar</button>
            
            <button class="btn-notificacion" data-lapso-target="${lapsoContenedorId}"><i class="fa-solid fa-bell"></i></button>

            <div id="${lapsoContenedorId}" style="display: none;"> 
                <p class="label1">Tiempo entre recordatorio</p>
                <label for="dias">Dias:</label> <br>
                    <select id="dias">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select> <br>
                <label for="horas">Horas:</label> <br>
                    <select id="horas">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="8">8</option>
                        <option value="12">12</option>
                        <option value="16">16</option>
                        <option value="124">24</option>
                    </select>  <br>
                <button>Guardar</button> 
            </div>
        </div>`;
    return tarjetaHTML;
}

function inicializarEventosTareas() {
    document.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', function() {
            const nombre = this.getAttribute('data-nombre-tarea');
            eliminarTarea(nombre, this); 
        });
    });
}

function cargarTareas() {
    const listaContenedor = document.getElementById('lista-tareas-existentes');
    
    if (!listaContenedor) return;
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];

    listaContenedor.innerHTML = '';
    
    if (tareasGuardadas.length === 0) {
        listaContenedor.innerHTML = '<p class="sin-tareas">No tienes tareas pendientes, Crea una nueva.</p>';
        return;
    }
    tareasGuardadas.forEach(tarea => {
        const htmlTarjeta = crearTarjetaDeTarea(tarea);
        listaContenedor.innerHTML += htmlTarjeta;
    });
    inicializarEventosTareas();
}
document.addEventListener('DOMContentLoaded', cargarTareas);
function eliminarTarea(taskIdAEliminar, elementoDOM) {
    let tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];

    const tareasActualizadas = tareasGuardadas.filter(tarea => 
        tarea.nombre !== taskIdAEliminar
    );

    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));

    const tarjetaTarea = elementoDOM.closest('.tarjeta-tarea');
    
    if (tarjetaTarea) {
        tarjetaTarea.remove();
        alert(`Tarea "${nombreTareaAEliminar}" eliminada.`);
        cargarTareas();
    }
}

document.addEventListener('DOMContentLoaded', function() {

    const btnNotificacion = document.getElementById('btn-notificacion');
    const contenedorLapso = document.getElementById('contenedor-recordatorio-lapso');
    const inputLapso = document.getElementById('lapsorecordatorio');

    if (btnNotificacion && contenedorLapso) {
        btnNotificacion.addEventListener('click', function(e) {
            e.preventDefault(); 
            if (contenedorLapso.style.display === 'none' || contenedorLapso.style.display === '') {
                contenedorLapso.style.display = 'block';
                if (inputLapso) {
                    inputLapso.focus();
                }
            } else {
                contenedorLapso.style.display = 'none';
                if (inputLapso) {
                    inputLapso.value = '';
                }
            }
        });
    }

});

function inicializarEventosTareas() {
    document.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', function() {
            const nombre = this.getAttribute('data-nombre-tarea');
            eliminarTarea(nombre, this); 
        });
    });
}

function inicializarEventosNotificacion() {
    document.querySelectorAll('.btn-notificacion').forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('data-lapso-target'); 
            const contenedorLapso = document.getElementById(targetId);
            
            if (contenedorLapso) {
                // Alternar la visibilidad
                if (contenedorLapso.style.display === 'none' || contenedorLapso.style.display === '') {
                    contenedorLapso.style.display = 'block';
                    const inputLapso = contenedorLapso.querySelector('input[type="text"]');
                    if (inputLapso) {
                        inputLapso.focus();
                    }
                } else {
                    contenedorLapso.style.display = 'none';
                    const inputLapso = contenedorLapso.querySelector('input[type="text"]');
                    if (inputLapso) {
                        inputLapso.value = '';
                    }
                }
            }
        });
    });
}

function cargarTareas() {
    const listaContenedor = document.getElementById('lista-tareas-existentes');
    
    if (!listaContenedor) return;
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];

    listaContenedor.innerHTML = '';
    
    if (tareasGuardadas.length === 0) {
        listaContenedor.innerHTML = '<p class="sin-tareas">No tienes tareas pendientes, Crea una nueva.</p>';
        return;
    }
    tareasGuardadas.forEach(tarea => {
        const htmlTarjeta = crearTarjetaDeTarea(tarea);
        listaContenedor.innerHTML += htmlTarjeta;
    });
    inicializarEventosTareas();
    inicializarEventosNotificacion();
}
document.addEventListener('DOMContentLoaded', cargarTareas);
function eliminarTarea(taskIdAEliminar, elementoDOM) {
    let tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];

    const tareasActualizadas = tareasGuardadas.filter(tarea => 
        tarea.nombre !== taskIdAEliminar
    );

    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));

    const tarjetaTarea = elementoDOM.closest('.tarjeta-tarea');
    
    if (tarjetaTarea) {
        tarjetaTarea.remove();
        alert(`Tarea "${nombreTareaAEliminar}" eliminada.`);
        cargarTareas();
    }
}

