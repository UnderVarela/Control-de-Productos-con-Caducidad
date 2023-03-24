// Ejemplo de Xurxo (los id son los de su html)

class Producto {
  nombre
  precio

  constructor (nombre = '', precio = 0) {
    this.nombre = nombre
    this.precio = precio
  }
}

let productos = []

// Eventos
document.querySelector('#product-form').addEventListener('submit', e => {
  e.preventDefault()
  const form = e.target
  const nombreEl = form.name // name del input al que quieres llegar
  const precioEl = form.price
  const p = new Producto(nombreEl.value, Number(precioEl.value))
  productos.push(p)

  // Total
  let total = 0
  for (const producto of productos) {
    total = total + producto.precio // otra opcion total += producto.precio
  }

  // lo mismo usando reduce
  // const total = productos.reduce((acumulador, productoCurrent) => {
  //   return productoCurrent.precio + acumulador
  // }, 0)

})