//EJERCICIOS CON WHILE
//Temporizador de Cuenta Regresiva: Crea un programa que cuente hacia atrás desde un número
 //dado hasta cero utilizando un bucle while.
 var numero = 10;
 while (numero >= 0) {
     console.log(numero);
     numero--;
 }
 //. Juego de Adivinanzas: Escribe un programa donde la computadora seleccione un número
  //aleatorio y el usuario intente adivinarlo, con pistas proporcionadas después de cada intento
  //incorrecto.
 var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
 var intento;
 var intentos = 0;
 while (intento !== numeroAleatorio) {
     intento = parseInt(prompt("Adivina el número entre 1 y 100:"));
     intentos++;
     if (intento < numeroAleatorio) {
         console.log("Demasiado bajo. Intenta de nuevo.");
     } else if (intento > numeroAleatorio) {
         console.log("Demasiado alto. Intenta de nuevo.");
     } else {
         console.log("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
     }
 }
 // Contador de Dígitos: Crea un programa que cuente el número de dígitos en un entero dado
  //utilizando un bucle while.
 
 var numero = 12345;
 var contador = 0;
 while (numero > 0) {
     numero = Math.floor(numero / 10);
     contador++;
 }
 console.log("El número tiene " + contador + " dígitos.");
 
 //Programa Controlado por Menú: Escribe un programa que muestre un menú de opciones y lo
  //siga mostrando hasta que el usuario seleccione la opción "Salir", usando while.
    var opcion;
    do {
        console.log("Menú:");
        console.log("1. Opción 1");
        console.log("2. Opción 2");
        console.log("3. Salir");
        opcion = parseInt(prompt("Selecciona una opción:"));
        switch (opcion) {
            case 1:
                console.log("Has seleccionado la Opción 1.");
                break;
            case 2:
                console.log("Has seleccionado la Opción 2.");
                break;
            case 3:
                console.log("Saliendo del programa.");
                break;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
        }
    } while (opcion !== 3);
    
 
 
 
  //Generador de Fibonacci: Crea un programa que genere los primeros n números de la secuencia
  //de Fibonacci utilizando un bucle while.
 var n = 10;
 var a = 0, b = 1, siguiente;
 console.log("Secuencia de Fibonacci:");
 console.log(a);
 console.log(b);
 while (n > 2) {
     siguiente = a + b;
     console.log(siguiente);
     a = b;
     b = siguiente;
     n--;
 }