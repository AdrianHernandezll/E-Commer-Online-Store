let nombre = prompt("Ingrese tu nombre");
const saludo = (nombre) => {
  alert(`bienvenido ${nombre} seleccione su producto`);
}
saludo(nombre);

const despedida = (nombre) => {
  alert(`Gracias por su compra ${nombre}, que tenga buen dia`);
}
class Lavarrropas {
  constructor(producto, modelo, peso) {
    this.producto = producto;
    this.modelo = modelo;
    this.peso = peso;
  }
  mostratCompra() {
    alert(`usted compro${this.producto} modelo : ${this.modelo} con un peso de: ${this.peso}`);
  }
}
class Television {
  constructor(producto, modelo, peso) {
    this.producto = producto;
    this.modelo = modelo;
    this.peso = peso;
  }
  mostratCompra() {
    alert(`usted compro${this.producto} modelo : ${this.modelo} con un peso de: ${this.peso}`);
  }
}
class Celular {
  constructor(producto, modelo, peso) {
    this.producto = producto;
    this.modelo = modelo;
    this.peso = peso;
  }
  mostrarCompra() {
    alert(`usted compro${this.producto} modelo : ${this.modelo} con un peso de: ${this.peso}`);
  }
}
const lavarropa1 = new Lavarrropas("Lavarropas Automatico", "LG", "8KG");
const television1 = new Celular("Celular Android", "Samsung", "123grs");
const celular1 = new Television("Television Smart", "LG", "12KG");


function mostrarProductos() {
  alert(`los productos que puedes comprar son ${lavarropa1} \n ${this.Lavarrropas} \n ${this.Television}`)
}
function prodcutos() {
  let seleccionItem = parseInt(prompt("Seleccione lo que desea comprar \n[1]Celular \n[2]Lavarropas \n[3]TV"));
  if (seleccionItem == 1) {
    let item1 = prompt("Eligio celular desea comprar Por $40.000? \n [1]Si \n [2]No");
    let presupuesto = parseInt(prompt("Ingrese Monto"));
    if (item1 == 1 && presupuesto >= 40000) {
      let vuelto = presupuesto - 40000;
      alert(`Compra realizada y tiene a favor $ ${vuelto}`);
    } else {
      let faltante = presupuesto - 40000;
      alert(`su compra no se realizo por que le faltan ${faltante} para completar su compra`);
    }
  } else if (seleccionItem == 2) {
    let item2 = prompt("Eligio Lavarropas desea comprar Por $25.000? \n [1]Si \n [2]No");
    let presupuesto = parseInt(prompt("Ingrese Monto"));
    if (item2 == 1 && presupuesto >= 18000) {
      let vuelto = presupuesto - 18000;
      alert(`Compra realizada y tiene a favor $ ${vuelto}`);

    } else {
      let faltante = presupuesto - 18000;
      alert(`su compra no se realizo por que le faltan ${faltante} para completar su compra`);
    }
  } else if (seleccionItem == 3) {
    let item3 = prompt("Eligio TV desea comprar Por $19.000? \n [1]Si \n [2]No");
    let presupuesto = parseInt(prompt("Ingrese Monto"));
    if (item3 == 3 && presupuesto >= 25000) {
      let vuelto = presupuesto - 25000;
      alert(`Compra realizada y tiene a favor $ ${vuelto}`);
    } else {
      let faltante = presupuesto - 25000;
      alert(`su compra no se realizo por que le faltan ${faltante} para completar su compra`);
    }
  } else {
    alert("No seleccionaste ninguna opcion valida");

  }
}
prodcutos();
despedida(nombre);

const listaProductos = ["Celular", "Lavarropas", "Television", "Monitor"];

for (let i = 0; i < listaProductos.length; i++) {
  console.log(listaProductos[i]);
}


const arraysProductos = [{ id: 1, producto: "Celular", precio: 40000 },
{ id: 2, producto: "Lavarropas", precio: 18000 },
{ id: 3, producto: "Television", precio: 25000 },
{ id: 4, producto: "Notebook", precio: 35000 },
{ id: 5, producto: "Licuadora", precio: 22000 }];

function comparar(a, b) {
  return a - b
}
console.log("Ordenado:", arraysProductos.sort(comparar));
console.log("Desordenado:", arraysProductos.sort());

let arr = ['80', '9', '700', 40, 1, 5, 200];
function comparar(a, b) {
  return a - b;
}
console.log('original:', arr.join());
console.log('Desordenado:', arr.sort());
console.log('Ordenado:', arr.sort(comparar));

let main = document.getElementsByTagName("section");
main.style.background = "red";




