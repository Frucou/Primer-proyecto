"use strict";
// la linea anterior "siempre"

// Ejercicios para los alumnos
// let nombre = "Fabian";

// console.log(nombre);

// nombre = "David";

// console.log(nombre);
// la siguiente línea declara varias variables en una sola línea
// let operador1, operador2 = 8;
// let operador1 = 8;
// let operador2 = 8;
// let resultado;

// resultado = operador1 + operador2;
// console.log(resultado);

// Ejercicios con el profe
// Nodos
const ej1Profe = document.querySelector(".bloque2>h2+ol+h2+ol>li");
const ej2Profe = document.querySelector(".bloque2>h2+ol+h2+ol>li:nth-child(2)");
const ej3Profe = document.querySelector(".bloque2>h2+ol+h2+ol>li:nth-child(3)");
// lo que va dentro de las comillas es una opción para llamar algo en concreto sin nombre de clase o id
const res1Profe = document.querySelector("#resultado1");
const res2Profe = document.querySelector("#resultado2");
const res3Profe = document.querySelector("#resultado3");

// area de un círculo
const areaCiruculo = () => {
    let radio = prompt("Cual es su radio?");
    const PI = 3.1416;
    let area;
    radio = Number(radio)
    area = PI * Math.pow(radio, 2);
    res1Profe.textContent = `A = π * ${radio}² = ${area}`;
    console.log(`A = π * ${radio}² = ${area}`);
};


// calcular el área de un triangulo
// Funciones
const areaTriagulo = () => {
    // para asegurar mejor filtrar por Number para evitar errores
    // let op1 = "5", op2 = "3", op3 = "3";
    // console.log(op1+op2+op3);
    let b = prompt("Cual es la base?");
    let h = prompt("Cual es la altura?");
    let resultado2 = 0;

    b = Number(b);
    h = Number(h);

    resultado2 = (b * h) / 2;
    res2Profe.innerHTML = `<code>
    A = (${b}*${h})/2 = ${resultado2}
    </code>`;
    console.log(`S = (${b} * ${h}) / 2 = ${resultado2}5`);
};


// Ver la altura de la persona
const alturaPersona = () => {
    let alt = prompt("¿Cual es tu altura en cm?");
    console.log(typeof alt)
    alt = Number(alt);
    console.log(typeof alt)

    if (alt > 200) {        
        res3Profe.textContent = `${alt}cm ¡Eres una persona alta!`
    } else {
        res3Profe.textContent = `${alt}cm ¡Eres una persona baja!`
    }

    
};

// Eventos
ej2Profe.addEventListener(
    "click",
    areaTriagulo
    );

ej1Profe.addEventListener(
    "click",
    areaCiruculo
);

ej3Profe.addEventListener(
    "click",
    // "mouseover", // Evento al pasar el ratón por encima
    alturaPersona
);
