let total = 0
const carrito = []
alert('hola bienvenido a GS hamburgueseria')


let hamburguesas = [
  { tamaño: 'Simple', precio: 1000, topping: 'a eleccion', bebida: 'pepsi o coca' },
  { tamaño: 'Doble', precio: 1200, topping: 'a eleccion', bebida: 'pepsi o coca' },
  { tamaño: 'Triple', precio: 1400, topping: 'a eleccion', bebida: 'pepsi o coca' }
];


let carta = "Arma tu combo a tu gusto:\n";
for (const hamburguesa of hamburguesas) {
  carta += hamburguesa.tamaño + ' topping : ' + hamburguesa.topping + ' ' + hamburguesa.bebida + ' ' + " - $" + hamburguesa.precio + "\n";
}

alert(carta);

function CargarPedido() {
  let tuPedido = new armar()
  tuPedido.tamaño = prompt('ingrese el tamaño su de hamburguesa')
  tuPedido.toppings = prompt('ingrese los topping que quiere agregarle')
  tuPedido.bebida = prompt('ingrese la bebida que desea ')
  carrito.push(tuPedido)
}

const cargando = () => {
  let seguir;
  do {
    CargarPedido()
    seguir = prompt('desea seguir comprado? si-no')
  }
  while (seguir == 'si') {

  }
}
function cargarPrecio() {
  for (producto of carrito) {
    if (producto.tamaño == 'simple') {
      total = total + 1000
    }
    else if (producto.tamaño == 'doble') {
      total = total + 1200
    }
    else {
      total = total + 1400
    }
  }
}
function verPedido() {
  let ver = 'Tu pedido es'
  for (pedido of carrito) {
    ver += "\n" + pedido.tamaño + ' con los topping: ' + pedido.toppings + ' y su bebida ' + pedido.bebida + "\n"
  }
  alert (ver)
}

cargando()

cargarPrecio()

verPedido()


alert('su total : ' + "\n" + '$'
  + total + "\n" + 'gracias por su compra!')










