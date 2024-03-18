function calcularRecarga() {

    //obtiene los valores de los precios del trasporte que ingresa el usuario
    const precios = {
        "Colectivo": parseFloat(document.getElementById('precioColectivo').value),
        "Subte": parseFloat(document.getElementById('precioSubte').value)
    };

    // tomar los valores de frecuencia de uso e ida y vuelta
    const frecuenciaUso = parseInt(document.getElementById('frecuenciaUso').value);
    const idaVuelta = document.getElementById('idaVuelta').checked;

    // verifica si los datos ingresados son numericos, sino arroja mensaje de error
    if (isNaN(frecuenciaUso, precios)) {
        document.getElementById('resultado').innerText = 'Ingresá los datos correctamente.';
        return;
    }

    // inicializar el costo mensual en 0
    let costoMensual = 0;

    // itera tipo de transporte en precios y obtiene el precio si se selecciona ida y vuelta
    for (const transporte in precios) {
        const precio = idaVuelta ? precios[transporte] * 2 : precios[transporte];

        //calculo del costo mensual
        costoMensual += precio * frecuenciaUso;
    }

    //tomar el resultado
    const recargaNecesaria = costoMensual;

    // mostrar el resultado en el htmnl
    document.getElementById('resultado').innerText = `Tenes que cargar $${recargaNecesaria.toFixed(2)} por mes para sobrevivir en el transporte público!!!`;
}