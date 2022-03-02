const matricula = 900000
let creditos, descuento, TotalM;

function LeerDatos() {
    creditos = Number(prompt(`Ingrese cantidad de creditos`))
}
LeerDatos()
Calcular(creditos)

function Calcular(creditos) {
    if (creditos <= 6) {
        descuento = matricula * 0.5;
    }
    else if (creditos > 6 && creditos <= 10)    
        descuento = matricula * 0.25;
    else if (creditos > 10)
        descuento = 0;
    else
        alert(`Opción no valida`)
    
    TotalM = matricula - descuento
}

console.log(`El valor de la matricula es `, TotalM)