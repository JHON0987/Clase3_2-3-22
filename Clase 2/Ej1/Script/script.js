// n1,n2,n3= notas de seguimiento. ef= examen final. tf= trabajo final
let n1,n2,n3,ef,tf;

let btnNF = document.getElementById(`NotFin`);
let ResultadoNF = document.getElementById(`ResNF`)

function LeerNotas(){
    n1 = Number(prompt(`Ingrese nota 1`))
    n2 = Number(prompt(`Ingrese nota 2`))
    n3 = Number(prompt(`Ingrese nota 3`))
    ef = Number(prompt(`Ingrese nota del examen final`))
    tf = Number(prompt(`Ingrese nota del trabajo final`))
}

import { Promedio } from './Promedio_3_N.js'
import { Calnf } from './CalNF.js'

btnNF.addEventListener(`click`, () => {
    LeerNotas()
    ResultadoNF.innerHTML = `Tu nota final en la materia de algoritmos es de ${Calnf(Promedio(n1,n2,n3),ef,tf)}`
})
