const entradaUsuario=prompt('¡Benvenutti, llegaste a  Io Sono B&B!');
const iva = 1.20
let desayuno=tipo
let desayuno1=regular
let desayuno2=vegano
let desayuno3=vegetariano
let desayuno4=celiacos
let total = 0
let continuar = true



while (continuar === true){
let desayuno = (prompt("Seleccion de desayuno: \n 1 regular \n 2 vegano \n vegetariano \n 4 celiacos"))

switch(desayunos){
    case 1:
        desayuno1 ()
        break

    case 2: 
        desayuno2 ()
        break

    case 3:
        desayuno3 ()
        break

    case 4:
        desayuno4 ()
        break
        
    default:
        alert("Agradecemos seleccione un desayuno")
}
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

