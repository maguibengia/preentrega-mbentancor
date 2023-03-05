const entradaUsuario=alert("¡Benvenutti, llegaste a  Io Sono B&B!");
const ROOM= prompt ("Ingresá tu habtiación");


let seleccionDesayuno = parseInt(
    prompt ( "Seleccione su tipo de desayuno: \n 1.Regular \n 2.Vegatariano \n 3.Vegano \n 4. Sin TACC")
    );

switch(seleccionDesayuno){
    case 1:
        alert ("Usted seleccionó el desayuno Regular")
        break
    case 2:
        alert ("Usted seleccionó el desayuno Vegetaniano")
        break
    case 3:
        alert ("Usted seleccionó el desayuno Vegano")
        break
    case 4:
        alert ("Usted seleccionó el desayuno Sin TACC")
        break
    default:
        alert("Agradecemos seleccione un desayuno")
}


function pedirTipoDeDesayuno() {
    desayuno = (prompt("Ingrese tipo de desayuno"));
}
function mensajeTotal (){
    alert("el costo del desayuno es de  € " + iva)
}


function desayuno1(){
    alert("El desayuno1 consta de capuccino, espresso, té o zumo con canolli/cruasan o panquques de ricotta")
    mensajeTotal ()    
}

function desayuno2(){
    alert("El desayuno2 consta de espresso, té o zumo con panqueques de lentejas, palta y frutas")
    PedirMonto ()
}
function desayuno3(){
    alert("El desayuno3 consta de capuccino, espresso, té o zumo con tostadas, variedad de quesos, huevos revueltos y frutas")
    PedirMonto ()
}
function desayuno4(){
    alert("El desayuno4 consta de capuccino, espresso, té o zumo con galletas de arroz, quesos, huevos revueltos y frutas")
    PedirMonto ()
}

