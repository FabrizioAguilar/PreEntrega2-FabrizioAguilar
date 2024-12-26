
alert("¡Bienvenidos a nuestra tienda de electrodomesticos!");

const Product = function(nombre, precio, stock){
    this.nombre= nombre
    this.precio = precio
    this.stock = stock
}
let product1  = new Product("horno electrico liliana",165000,10);
let product2  = new Product("heladera samsung",1500000,4);
let product3  = new Product("microondas bgh",200000,35);
let product4  = new Product("aire acondicionados sansei",650000,50);
let product5  = new Product("ventildor de pie taurus",100000,23);
let product6  = new Product("estufa emegé",170000,65);
let product7  = new Product("televisor philips",1100000,14);

let list = [product1,product2,product3,product4,product5,product6,product7];

function addProducts(){
let nombre= prompt("ingresar el nombre del producto");
let precio = prompt("ingresar el precio del producto");
let stock = prompt("ingresar el stock del producto");

if(isNaN(precio) || isNaN(stock) || nombre == ""){
    alert("por favor ingrese datos validos")
    return;
}
let product = new Product (nombre,precio,stock);
list.push(product);
console.table(list);
}


addProducts();