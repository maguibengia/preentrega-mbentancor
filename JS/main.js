const entradaUsuario = alert("¡Benvenutti, llegaste a Io Sono B&B!");

const ROOM = prompt("Por favor, ingresa tu habitación:\n -Bubu \n -Tata \n -Lala \n -AbueloGiacoia \n -Abuela Nonna \n -Abuelo Guardo");

let seleccionDesayuno = parseInt(
    prompt("Seleccione su tipo de desayuno ingresando el número: \n 1.Regular \n 2.Vegatariano \n 3.Vegano \n 4. Sin TACC")
);
switch (seleccionDesayuno) {
    case 1:
        alert("Usted seleccionó el desayuno Regular")
        break
    case 2:
        alert("Usted seleccionó el desayuno Vegetariano")
        break
    case 3:
        alert("Usted seleccionó el desayuno Vegano")
        break
    case 4:
        alert("Usted seleccionó el desayuno Sin TACC")
        break
    default:
        alert("Agradecemos seleccione un desayuno")
}

function seleccionBebidaDesayuno() {
    prompt("¿Qué desea beber? \n 1. Café  \n 2.Capuccino \n 3.Té \n 4.Jugo de Naranjas \n 5.Yogurt con granola ");
    if (seleccionBebidaDesayuno === 1) {
        alert("Usted seleccionó una Café");
    } else if (seleccionDesayuno === 2) {
        alert("Usted seleccionó un Capuccino");
    } else if (seleccionUsuario === 3) {
        alert("Usted seleccionó un Té");
    } else if (seleccionUsuario === 4) {
        alert("Usted seleccionó un Jugo de Naranjas");
    } else if (seleccionUsuario === 5) {
        alert("Usted seleccionó un Yogurt con granola");
    }
}
seleccionBebidaDesayuno()


function seleccionComidaDesayuno() {
    prompt("¿Qué desea comer? \n 1. Huevos Revueltos  \n 2.Croissantas de chocolate \n 3.Medialunas de Jamón y Queso \n 4. Seleccion de frutas ");
    if (seleccionComidaDesayuno === 1) {
        alert("Usted seleccionó una Huevos Revueltos");
    } else if (seleccionDesayuno === 2) {
        alert("Usted seleccionó un Croissantas de chocolate");
    } else if (seleccionUsuario === 3) {
        alert("Usted seleccionó un Medialunas de Jamón y Queso ");
    } else if (seleccionUsuario === 4) {
        alert("Usted seleccionó un Seleccion de frutas");
    }
}
seleccionComidaDesayuno()

function mensajeTotal() {
    alert("el costo del desayuno es de  € " + IVA)
}
mensajeTotal()

alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-buzo $3000 2-remera $1500 3-jean $5000 4-Zapatillas $6000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}
