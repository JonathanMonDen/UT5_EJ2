
function crear_error() {
    this.mensaje = "";
    this.rellenar = rellenar;
}


function rellenar(mensaje) {
    this.mensaje = mensaje;
    return false;
}

let error = new crear_error();

function asociar() {
    let nombre = document.getElementById('Nombre').value;
    let apellido1 = document.getElementById('Apellido1').value;
    let apellido2 = document.getElementById('Apellido2').value;
    let edad = document.getElementById('Edad').value;
    let matricula = document.getElementById('Natricula').value;
    let nTarjeta = document.getElementById('NTarjeta').value;
    let mExpiracion = document.getElementById('MExpiracion').value;
    let nExpediente = document.getElementById('NExpediente').value;
    let fPermiso = document.getElementById('FPermiso').value;
    let importe = document.getElementById('Importe').value;
    let aExpiracion = document.getElementById('AExpiracion').value;

    if (!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(nombre)) {
        error.rellenar = 'El nombre no coincide';
        return false;
    }

    if (!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(apellido1)) {
        error.rellenar = 'El apellido1 no coincide';
        return false;
    }

    if (!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(apellido2)) {
        error.rellenar = 'El apellido2 no coincide';
        return false;
    }

    if (!/[0-9]{3}/.test(nTarjeta)) {
        error.rellenar = 'El nTarjeta no coincide prueba 3 numeros entre 0 y 9';
        return false;
    }

    if (!is_int(nExpediente) && (nExpediente < 340000000000 || nExpediente > 349999999999)) {
        error.rellenar = 'El nExpediente no coincide, intente entre 340000000000 y 349999999999';
        return false;
    }

    if (!is_int(edad) && edad < 18 || edad > 120) {
        error.rellenar = 'El nExpediente no coincide, intente entre 18 y 120';
        return false;
    }

    if (!/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/
        .test(fPermiso)) {
        error.rellenar = 'La fPermiso no coincide';
        return false;
    }

    if (!/([0-9]{4}[A-Z]+[A-Z]+[A-Z]+)/.test(matricula)) {
        error.rellenar = 'La matricula no coincide';
        return false;
    }

    if (!/^\d/.test(importe)) {
        error.rellenar = 'El importe no es un numero';
        return false;
    }

    if (!/[1-12]/.test(mExpiracion)) {
        error.rellenar = 'El mExpiracion no es un mes';
        return false;
    }

    if (!/[2001-2100]/.test(aExpiracion)) {
        error.rellenar = 'El aExpiracion no coincide prueba entre 2001 y 2100';
        return false;
    }
}


function Comprobar() {
    try {
        if (asociar)
            if (error.mensaje == '') {
                throw new Error("ERROR: Rellene todos los campos");
            }
            else {
                throw new Error("ERROR: " + error.mensaje);
            }
        else
            alert('este formulario es valido');
    }
    catch (ex) {
        alert(ex.message);
    }
}