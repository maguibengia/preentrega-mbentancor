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

function seleccionMenu() {parseFloat

    prompt("¿Qué desea desayunar? \n 1. Café y Huevos Revueltos 5.50 €  \n 2.Capuccino y Croissants de chocolate 6.00 € \n 3.Té y selección de frutas 4.00 € \n 4.Jugo de Naranjas y Yogurt con granola 5.00 €");
    if (seleccionBebidaDesayuno === 1) {
        alert("Usted seleccionó una Café y Huevos Revueltos ");
    } else if (seleccionDesayuno === 2) {
        alert("Usted seleccionó un Capuccino y Croissants de chocolate ");
    } else if (seleccionUsuario === 3) {
        alert("Usted seleccionó un Té y selección de frutas");
    } else if (seleccionUsuario === 4) {
        alert("Usted seleccionó un Jugo de Naranjas y Yogurt con granola");
    }
}
seleccionMenu()


