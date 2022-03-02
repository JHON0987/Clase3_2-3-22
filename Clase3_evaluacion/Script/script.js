const s = 20000
let h, T, he;

hm = Number

function LeerDatos (){
    h = Number(prompt(`Ingrese las horas trabajadas`))
}

LeerDatos()
Calcular (h, s)

function Calcular (h, s) {
    if(40 < h) {
        he = h - 40
    }
    else if(40 >= h)
        he = 0
    else
        alert(`Opcion no valida`)

    T = (s * h) + (he * 10000) 
}

alert(`El salario sera de ${T}`)