

let num1;
let num2;

let btnEj1 = document.getElementById(`Ejercicio1`);
let btnEj2 = document.getElementById(`Ejercicio2`);
let btnEj3 = document.getElementById(`Ejercicio3`);
let btnEj4 = document.getElementById(`Ejercicio4`);
let Resultado = document.getElementById(`ResEj`)

function LeerDatos(){
    num1 = Number(prompt(`Ingrese Numero 1`))
    num2 = Number(prompt(`Ingrese Numero 2`))
}

import { Suma } from './Suma.js'
import { Resta } from './Resta.js'
import { Multiplicacion } from './Multiplicacion.js'
import { Division } from './Division.js'

console.log(Suma(5,4))
console.log(Resta(5,4))
console.log(Multiplicacion(5,4))
console.log(Division(5,4))

btnEj1.addEventListener(`click`, () => {
    LeerDatos()
    console.log(Suma(num1,num2))
    console.log(`La suma es ${Suma(num1,num2)}`)
    Resultado.innerHTML = `La suma es ${Suma(num1,num2)}`
})

btnEj2.addEventListener(`click`, () => {
    LeerDatos()
    console.log(Resta(num1,num2))
    console.log(`La resta es ${Resta(num1,num2)}`)
    Resultado.innerHTML = `La resta es ${Resta(num1,num2)}`
})

btnEj3.addEventListener(`click`, () => {
    LeerDatos()
    console.log(Multiplicacion(num1,num2))
    console.log(`La multiplicación es ${Multiplicacion(num1,num2)}`)
    Resultado.innerHTML = `La multiplicación es ${Multiplicacion(num1,num2)}`
})

btnEj4.addEventListener(`click`, () => {
    LeerDatos()
    console.log(Division(num1,num2))
    console.log(`La división es ${Division(num1,num2)}`)
    Resultado.innerHTML = `La división es ${Division(num1,num2)}`
})