
let imc
let alturaCuadrada
let boton = document.querySelector("#boton")
let nuevoIndice = document.querySelector("h2")
let nuevaCondicion = document.querySelector("h3")

boton.addEventListener("click", function () {
    let sexo = document.getElementById("insexo").value;
    let edad = document.getElementById("inedad").value;
    let peso = document.getElementById("inpeso").value;
    let altura = document.getElementById("inalt").value;

    alturaCuadrada = Math.pow(altura, 2);
    imc = peso / alturaCuadrada;
    nuevoIndice.textContent = imc;

    if (imc < 18.5) {
        nuevaCondicion.textContent = "Por debajo del peso"
    }
    else if (18.5 <=imc && imc<= 24.9) {
        nuevaCondicion.textContent = "Saludable"
    }
    else if (25.0 <= imc &&  imc<= 29.9) {
        nuevaCondicion.textContent = "Con sobrepeso"
    }
    else if (30.0 <=imc && imc<= 39.9) {
        nuevaCondicion.textContent = "Obeso"
    }
    else if (imc > 40.0) {
        nuevaCondicion.textContent = "Obesidad extrema o de alto riesgo"
    }

}

)
