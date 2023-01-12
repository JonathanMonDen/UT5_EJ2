
function crear_error() {
    this.rellenar = "";
}

let error = new crear_error();


function comprobar_nombre() {
    let nombre = document.getElementById('Nombre').value;
    console.log(nombre);

    if (!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(nombre)) {
        if (nombre == '') {
            console.log('El nombre esta vacio');
            error.rellenar = 'El nombre esta vacio';
        }
        else {
            console.log('Algo esta mal en el nombre');
            error.rellenar = 'El nombre no coincide';
        }
    }
    else
        console.log('El nombre esta bien');
}

function comprobar_apellido1() {
    let apellido1 = document.getElementById('Apellido1').value;
    console.log(apellido1);

    if (!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(apellido1)) {
        if (apellido1 == '') {

            console.log('El apellido1 esta vacio');
            error.rellenar = 'El apellido1 esta vacio';
        }
        else {
            console.log('Algo esta mal en el apellido1');
            error.rellenar = 'El apellido1 no coincide';
        }

    }
    else
        console.log('El apellido1 esta bien');
}

function comprobar_apellido2() {
    let apellido2 = document.getElementById('Apellido2').value;
    console.log(apellido2);

    if (!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(apellido2)) {
        if (apellido2 == '') {
            console.log('El apellido2 esta vacio');
            error.rellenar = 'El apellido2 esta vacio';
        }
        else {
            console.log('Algo esta mal en el apellido2');
            error.rellenar = 'El apellido2 no coincide';
        }

    }
    else
        console.log('El apellido2 esta bien');
}

function comprobar_edad() {
    let edad = document.getElementById('Edad').value;
    console.log(edad);

    if (!/^(1[8-9]|[2-9][0-9]|1[0-1][0-9]|120)$/.test(edad)) {
        if (edad == '') {
            console.log('La edad esta vacio');
            error.rellenar = 'La edad esta vacio';
        }
        else {
            console.log('Algo esta mal en la edad');
            error.rellenar = 'La edad no coincide';
        }

    }
    else
        console.log('La edad esta bien');
}

function comprobar_matricula() {
    let matricula = document.getElementById('Matricula').value;
    console.log(matricula);

    if (!/^[0-9]{4}[a-zA-Z]{3}$$/.test(matricula)) {
        if (matricula == '') {
            console.log('El matricula esta vacio');
            error.rellenar = 'El matricula esta vacio';
        }
        else {
            console.log('Algo esta mal en el matricula');
            error.rellenar = 'El matricula no coincide';
        }

    }
    else
        console.log('El apellido2 esta bien');
}

function comprobar_importe() {
    let importe = document.getElementById('Importe').value;
    console.log(importe);

    if (!/\d$/.test(importe)) {
        if (importe == '') {
            console.log('El importe esta vacio');
            error.rellenar = 'El importe esta vacio';
        }
        else {
            console.log('Algo esta mal en el importe');
            error.rellenar = 'El importe no coincide';
        }

    }
    else
        console.log('El apellido2 esta bien');
}

function comprobar_mExpiracion() {
    let mExpiracion = document.getElementById('MExpiracion').value;
    console.log(mExpiracion);

    if (!/^(0?[1-9]|1[0-2])$/.test(mExpiracion)) {
        if (mExpiracion == '') {
            console.log('El mExpiracion esta vacio');
            error.rellenar = 'El mExpiracion esta vacio';
        }
        else {
            console.log('Algo esta mal en el mExpiracion');
            error.rellenar = 'El mExpiracion no coincide';
        }

    }
    else
        console.log('El mExpiracion esta bien');
}

function comprobar_aExpiracion() {
    let aExpiracion = document.getElementById('AExpiracion').value;
    console.log(aExpiracion);

    if (!/^(20[0-9][0-9])$|2100/.test(aExpiracion)) {
        if (aExpiracion == '') {
            console.log('El aExpiracion esta vacio');
            error.rellenar = 'El aExpiracion esta vacio';
        }
        else {
            console.log('Algo esta mal en el aExpiracion');
            error.rellenar = 'El aExpiracion no coincide';
        }

    }
    else
        console.log('El aExpiracion esta bien');
}

function comprobar_fPermiso() {
    let fPermiso = document.getElementById('FPermiso').value;
    console.log(fPermiso);

    if (!/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(fPermiso)) {
        if (fPermiso == '') {
            console.log('El fPermiso esta vacio');
            error.rellenar = 'El fPermiso esta vacio';
        }
        else {
            console.log('Algo esta mal en el fPermiso');
            error.rellenar = 'El fPermiso no coincide';
        }

    }
    else
        console.log('El fPermiso esta bien');
}

function comprobar_nTarjeta() {
    let nTarjeta = document.getElementById('NTarjeta').value;
    console.log(nTarjeta);

    if (!/^([0-9]{3})/.test(nTarjeta)) {
        if (nTarjeta == '') {
            console.log('El nTarjeta esta vacio');
            error.rellenar = 'El nTarjeta esta vacio';
        }
        else {
            console.log('Algo esta mal en el nTarjeta');
            error.rellenar = 'El nTarjeta no coincide';
        }

    }
    else
        console.log('El nTarjeta esta bien');
}

function comprobar_nExpediente() {
    let nExpediente = document.getElementById('NExpediente').value;
    console.log(nExpediente);

    if (!/^([0-9]{3})/.test(nExpediente)) {
        if (nExpediente == '') {
            console.log('El nExpediente esta vacio');
            error.rellenar = 'El nExpediente esta vacio';
        }
        else {
            console.log('Algo esta mal en el nExpediente');
            error.rellenar = 'El nExpediente no coincide';
        }

    }
    else
        console.log('El nExpediente esta bien');
}

//Todas las funciones en una
function asociar() {
    comprobar_nombre();
    comprobar_apellido1();
    comprobar_edad();
    comprobar_matricula();
    comprobar_nTarjeta();
    comprobar_mExpiracion();

    comprobar_nExpediente();
    comprobar_apellido2();
    comprobar_fPermiso();
    comprobar_importe();
    comprobar_aExpiracion();
}

//Esta funcion comprueba y muestra las ventanas modales
function Comprobar() {
    try {
        asociar();
        if (error.rellenar == '')
            swal.fire({
                title: 'SUCCESS',
                text: 'El formulario es valido',
                icon: 'success'
            }).then((result) => {
                if (result.value) {
                    location.reload();
                }
            });
        else {
            throw new Error("ERROR: " + error.rellenar);
        }

    }
    catch (ex) {
        swal.fire({
            title: 'ERROR',
            text: ex.message,
            icon: 'error'
        }).then((result) => {
            if (result.value) {
                location.reload();
            }
        });
    }
}


//Esto es para el placeholder de FPermiso
function Fecha_Actual() {
    let date = new Date();
    console.log(date);

    let dia = date.getDate();
    let mes = (date.getMonth() < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1));
    let anio = date.getFullYear();

    let fechaActual = dia + '/' + mes + '/' + anio;
    console.log(fechaActual);

    let InputFecha = document.getElementById('FPermiso');
    if (InputFecha)
        InputFecha.placeholder = fechaActual;
}

