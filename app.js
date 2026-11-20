// Escribe aquí el código JavaScript del taller
const boton = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
}

function obtenerEstado(promedio) {
    if (promedio >= 7) {
        return "Aprobado";
    } else if (promedio >= 5) {
        return "Recuperacion";
    } else {
        return "Reprobado";
    }
}


boton.addEventListener("click", () => {
    
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    const n3 = Number(document.getElementById("n3").value);

    const notas = [n1, n2, n3];
    let EncontreError = false;

    for (let i = 0; i < notas.length; i++) {
        if(notas[i] < 0 || notas[i] > 10) {
            EncontreError = true;
            break;
        }
    }

    if (EncontreError) {
        resultado.textContent = "Ingrese tres notas entre 0 y 10."
    } else {
    const promedio = calcularPromedio(n1, n2, n3);
    const estado = obtenerEstado(promedio);
    resultado.textContent = `promedio: ${promedio.toFixed(2)} - ${estado}`;
    }
});
