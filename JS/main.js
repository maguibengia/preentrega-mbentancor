const BIENVENIDA = alert("¡Benvenutti, llegaste a Io Sono B&B!");
const HABITACIONES = prompt("Por favor, ingresa tu habitación:\n -Bubu \n -Tata \n -Lala \n -AbueloGiacoia \n -Abuela Nonna \n -Abuelo Guardo");

const ROOMS= [
    { nombre: "Bubu", costo: 85.00, ocupada:true},
    { nombre: "Tata", costo:85.00, ocupada:false },
    { nombre: "Lala", costo:50.00, ocupada:true},
    { nombre: "AbueloGiacoia", costo:50.00, ocupada:false },
    { nombre: "AbuelaNonna", costo:120.00, ocupada: true },
    { nombre: "AbueloGuardo", costo:100.00, ocupada:false }
   ];


const bebidas = [
  { nombre: "Jugo de naranja", precio: 1.50 },
  { nombre: "Café", precio: 2.00 },
  { nombre: "Capuccino", precio: 2.50 },
  { nombre: "Té", precio: 1.50 },
  { nombre: "Leche", precio: 1.50 },
  { nombre: "Leche de Almendras", precio: 2.50 },
  { nombre: "Yogur", precio: 2.00 },
];

const comidas = [ 
  { nombre: "Huevos revueltos", precio: 1.50 },
  { nombre: "Croissants de chocolate", precio: 3.00 },
  { nombre: "Selección de frutas", precio: 2.00 },
  { nombre: "Panqueques de lentejas", precio: 2.00 },
  { nombre: "Panqueques de lentejas", precio: 2.00 },
 
];


function imprimirMenu(menu) {
  prompt("----- MENÚ -----");
  menu.forEach((item) => {
    prompt(`${item.nombre}: $${item.precio}`);
  });
  prompt("-----------------");
}

imprimirMenu(bebidas);
imprimirMenu(comidas);

function calcularTotal(bebidaSeleccionada, comidaSeleccionada) {
  const bebida = bebidas.find((item) => item.nombre === bebidaSeleccionada);

  const comida = comidas.find((item) => item.nombre === comidaSeleccionada);

  const total = bebida.precio + comida.precio;

  alert(`El total del desayuno es: $${total}`);
}

const bebidaSeleccionada = prompt("Por favor, seleccione una bebida:");
const comidaSeleccionada = prompt("Por favor, seleccione una comida:");


calcularTotal(bebidaSeleccionada, comidaSeleccionada);
// Obtener los elementos del DOM
const form = document.getElementById('menu-form');
const items = form.elements['item'];
const quantity = form.elements['quantity'];

// Crear un objeto para almacenar los datos seleccionados por el usuario
const selectedItems = {};

// Iterar sobre los elementos seleccionados y agregarlos al objeto
for (let i = 0; i < items.length; i++) {
  if (items[i].checked) {
    selectedItems[items[i].value] = quantity[i].value;
  }
}

// Convertir el objeto en JSON y guardarlo en el almacenamiento web
localStorage.setItem('selectedItems', JSON.stringify(selectedItems));





