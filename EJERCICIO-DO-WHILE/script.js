// EJERCICIOS CON DO WHILE
 // Validador de Entrada: Crea un programa que solicite repetidamente la entrada del usuario hasta
 //que se ingrese un valor válido (por ejemplo, entre 1 y 10).
 var numero;
 do {
     numero = parseInt(prompt("Introduce un número entre 1 y 10:"));
 }   while (numero < 1 || numero > 10);
 console.log("Número válido: " + numero);
 
 // Calculadora de Suma: Escribe un programa que siga pidiendo números al usuario y los sume
  //hasta que el usuario ingrese 0
 
 var suma = 0;
 var numero;
 do {
     numero = parseInt(prompt("Introduce un número (0 para salir):"));
     suma += numero;
 }
 while (numero !== 0);
    console.log("La suma total es: " + suma);
    
    //Verificador de Contraseña: Crea un programa que solicite una contraseña y siga preguntando
 //hasta que se ingrese la contraseña correcta.
    var contrasenaCorrecta = "1234";
    var contrasenaIngresada;
    do {
        contrasenaIngresada = prompt("Introduce la contraseña:");
    } while (contrasenaIngresada !== contrasenaCorrecta);
    console.log("Contraseña correcta. Acceso concedido.");

    //Lanzador de Dados: Escribe un programa que simule el lanzamiento de un dado de seis caras
 //repetidamente hasta que aparezca un número específico.
    var numeroEspecifico = 3;
    var lanzamiento;
    do {
        lanzamiento = Math.floor(Math.random() * 6) + 1;
        console.log("Lanzamiento: " + lanzamiento);
    } while (lanzamiento !== numeroEspecifico);
    console.log("¡Has lanzado el número " + numeroEspecifico + "!");

    //Simulador de Cajero Automático: Crea un programa simple de cajero automático que muestre un
 //menú de opciones (consultar saldo, depositar, retirar, salir) y siga regresando al menú después de
 //cada operación hasta que el usuario elija salir.

    var saldo = 1000;
    var opcion;
    do {
        console.log("Menú de Cajero Automático:");
        console.log("1. Consultar saldo");
        console.log("2. Depositar");
        console.log("3. Retirar");
        console.log("4. Salir");
        opcion = parseInt(prompt("Selecciona una opción:"));
        switch (opcion) {
            case 1:
                console.log("Saldo actual: $" + saldo);
                break;
            case 2:
                var deposito = parseFloat(prompt("Introduce la cantidad a depositar:"));
                saldo += deposito;
                console.log("Has depositado $" + deposito + ". Nuevo saldo: $" + saldo);
                break;
            case 3:
                var retiro = parseFloat(prompt("Introduce la cantidad a retirar:"));
                if (retiro <= saldo) {
                    saldo -= retiro;
                    console.log("Has retirado $" + retiro + ". Nuevo saldo: $" + saldo);
                } else {
                    console.log("Fondos insuficientes.");
                }
                break;
            case 4:
                console.log("Saliendo del cajero automático.");
                break;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
        }
    } while (opcion !== 4);
// Fin del programa de cajero automático