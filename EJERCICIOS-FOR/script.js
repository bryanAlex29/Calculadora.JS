//Generador de Tablas de Multiplicar: Crea un programa que genere una tabla de multiplicar para
 //un número dado del 1 al 10.
 var numero = 5;
 for (var i = 1; i <= 10; i++) {
     console.log(numero + " x " + i + " = " + (numero * i));
 }
 //6. Calculadora de Factorial: Escribe un programa que calcule el factorial de un número utilizando un
  //bucle for
 var numero = 5;
 var factorial = 1;
 for (var i = 1; i <= numero; i++) {
     factorial *= i;
 }
 console.log("El factorial de " + numero + " es: " + factorial);
 
 // Verificador de Números Primos: Crea un programa que determine si un número es primo
  //utilizando un bucle for para verificar todos los posibles divisores  **** no estoy seguro.
 var numero = 29;
 var esPrimo = true;
 for (var i = 2; i <= Math.sqrt(numero); i++) {
     if (numero % i === 0) {
         esPrimo = false;
         break;
     }
 }
 if (esPrimo) {
     console.log(numero + " es un número primo.");
 }
 else {
     console.log(numero + " no es un número primo.");
 }
 
 // Impresor de Patrones: Escribe un programa que utilice bucles for anidados para imprimir un
  //patrón de asteriscos en forma de triángulo rectángulo.
 var filas = 5;
 for (var i = 1; i <= filas; i++) {
     var fila = "";
     for (var j = 1; j <= i; j++) {
         fila += "* ";
     }
     console.log(fila);
 
 } 
 //Suma de Números Pares: Crea un programa que calcule la suma de todos los números pares
  //desde 1 hasta un límite dado utilizando un bucle for.
 var limite = 10;
 var suma = 0;
 for (var i = 1; i <= limite; i++) {
     if (i % 2 === 0) {
         suma += i;
     }
 }
 console.log("La suma de los números pares desde 1 hasta " + limite + " es: " + suma);