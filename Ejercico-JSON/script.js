/*Registro de Estudiante: Crea un objeto JSON que represente a un estudiante con propiedades
 para nombre, edad, calificaciones (un array) e información de contacto (un objeto anidado con
 correo electrónico y teléfono). Escribe funciones para calcular el promedio de calificaciones y
 mostrar la información del estudiante*/

 estudiante = {
        nombre: "bryan vera",
        edad:"22" ,
        calificaciones:[10,7,6,9.5,8],
        contacto :{
        correo: "bryanVera@gmail.com",
        telefono: "123456789",
    }
    
};
console.log(estudiante);
console.log(estudiante.nombre); // bryan vera
console.log(estudiante.edad); // 22
console.log(estudiante.calificaciones); // [10, 7, 6, 9.
console.log(estudiante.contacto); // {correo: " 
    function calcularPromedio (calificaciones)
     {    
        var suma = 0;
        calificaciones.forEach(element => {
            suma += element;
            
        });
        return suma / calificaciones.length;  
          
    }   
    console.log(calcularPromedio(estudiante.calificaciones)); // 8.4
 //2
 var productos= [
    {
        id : "1",
        nombre : "producto1",
        precio : 10,
        cantidad : 5,
    },
    {
        id : "2",
        nombre : "producto2",
        precio : 20,
        cantidad : 10,
    },
    {
        id : "3",
        nombre : "producto3",
        precio : 30,
        cantidad : 2,
    }

 ]
 console.log(productos);
 console.log("el id del producto es: " + productos[0].id); // 1
 console.log("el nombre del producto es: " + productos[0].nombre); // producto1
    console.log("el precio del producto es: " + productos[0].precio); // 10
    console.log("la cantidad del producto es: " + productos[0].cantidad); // 5
      console.log("el id del producto es: " + productos[1].id); // 2
 console.log("el nombre del producto es: " + productos[1].nombre); // producto2
    console.log("el precio del producto es: " + productos[1].precio); // 20
    console.log("la cantidad del producto es: " + productos[1].cantidad); // 10
      console.log("el id del producto es: " + productos[2].id); // 3
 console.log("el nombre del producto es: " + productos[2].nombre); // producto3 
 
    console.log("el precio del producto es: " + productos[2].precio); // 30
    console.log("la cantidad del producto es: " + productos[2].cantidad); // 2
   

 var cantidadMax = 5
 var valorTotal = 0
 function procedimiento(cantidadMax,productos){
    
    productos.forEach(element => {
            if(element.cantidad < cantidadMax) {
                console.log(element.nombre + " tiene una cantidad menor a " + cantidadMax);
            }
            valorTotal += element.precio ;
            console.log("el valor total de inventario  es: " + valorTotal);
            productos.sort((a,b) => a.precio - b.precio);
            console.log(productos); 


        });
    }
    console.log(procedimiento(cantidadMax,productos)); // producto1 tiene una cantidad menor a 5

 //3
 /*Catálogo de Biblioteca: Diseña una estructura JSON para un catálogo de biblioteca con libros,
 cada uno con propiedades como título, autor (que podría ser múltiple), año de publicación,
 géneros (array) y estado de disponibilidad. Escribe funciones para buscar libros por autor o género
 y para prestar/devolver libros*/

    

