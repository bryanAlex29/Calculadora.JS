// Calculadora: Crea una calculadora básica que tome dos números y un operador (+, -, *, /) y realice la operación correspondiente utilizando una estructura switch
 var num1 = parseFloat(prompt("Introduce el primer número:"));
 var num2 = parseFloat(prompt("Introduce el segundo número:")); 
    
    var operador = prompt("Introduce el operador (+, -, *, /):");
    var resultado;

    switch (operador) { 

        case "+":
            resultado = num1 + num2;
            console.log("El resultado de " + num1 + " + " + num2 + " es: " + resultado);
            break;
        case "-":
            resultado = num1 - num2;
            console.log("El resultado de " + num1 + " - " + num2 + " es: " + resultado);
            break;
        case "*":
            resultado = num1 * num2;
            console.log("El resultado de " + num1 + " * " + num2 + " es: " + resultado);
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
                console.log("El resultado de " + num1 + " / " + num2 + " es: " + resultado);
            } else {
                console.log("Error: División por cero no permitida.");
            }
            break;
        default:
            console.log("Operador no válido. Por favor, introduce uno de los siguientes operadores: +, -, *, /.");
    }
    //Día de la Semana: Escribe un programa que tome un número (1-7) y muestre el día de la semana
 //correspondiente utilizando una estructura switch
    var dia = parseInt(prompt("Introduce un número del 1 al 7:"));
    var nombreDia;

    switch (dia) {
        case 1:
            nombreDia = "Lunes";
            break;
        case 2:
            nombreDia = "Martes";
            break;
        case 3:
            nombreDia = "Miércoles";
            break;
        case 4:
            nombreDia = "Jueves";
            break;
        case 5:
            nombreDia = "Viernes";
            break;
        case 6:
            nombreDia = "Sábado";
            break;
        case 7:
            nombreDia = "Domingo";
            break;
        default:
            console.log("Número no válido. Por favor, introduce un número del 1 al 7.");
    }   
    if (nombreDia) {
        console.log("El día correspondiente al número " + dia + " es: " + nombreDia);
    }
     //Selección de Menú: Crea un programa que muestre un menú de platos y utilice una estructura
 //switch para calcular el precio según la selección del usuario.
    var precioPlato;
        var seleccion = parseInt(prompt("Selecciona un plato:\n1. Pizza - $10\n2. Pasta - $8\n3. Ensalada - $6\n4. Salir"));
    
        switch (seleccion) {
            case 1:
                precioPlato = 10;
                console.log("Has seleccionado Pizza. Precio: $" + precioPlato);
                break;
            case 2:
                precioPlato = 8;
                console.log("Has seleccionado Pasta. Precio: $" + precioPlato);
                break;
            case 3:
                precioPlato = 6;
                console.log("Has seleccionado Ensalada. Precio: $" + precioPlato);
                break;
            case 4:
                console.log("Saliendo del programa.");
                break;
            default:
                console.log("Selección no válida. Por favor, introduce un número del 1 al 4.");
        }
        if (precioPlato) {
            console.log("El precio total es: $" + precioPlato);
        }
        //Nombre del Mes: Escribe un programa que tome un número de mes (1-12) y muestre el nombre
        //del mes utilizando una estructura switch.
    var mes = parseInt(prompt("Introduce un número del 1 al 12:"));
    var nombreMes;
        
    switch (mes) {
        case 1:
            nombreMes = "Enero";
            break;
        case 2:
            nombreMes = "Febrero";
            break;
        case 3:
            nombreMes = "Marzo";
            break;
        case 4:
            nombreMes = "Abril";
            break;
        case 5:
            nombreMes = "Mayo";
            break;
        case 6:
            nombreMes = "Junio";
            break;
        case 7:
            nombreMes = "Julio";
            break;
        case 8:
            nombreMes = "Agosto";
            break;
        case 9:
            nombreMes = "Septiembre";
            break;
        case 10:
            nombreMes = "Octubre";
            break;
        case 11:
            nombreMes = "Noviembre";
            break;
        case 12:
            nombreMes = "Diciembre";
            break;
        default:
            console.log("Número no válido. Por favor, introduce un número del 1 al 12.");
    }
    if (nombreMes) {
        console.log("El mes correspondiente al número " + mes + " es: " + nombreMes);
    }

    //Calculadora de Área de Formas: Crea un programa que calcule el área de diferentes formas
 //(círculo, cuadrado, triángulo, rectángulo) según la entrada del usuario y una estructura switch
//.
    var area;
    var forma = prompt("Selecciona una forma (círculo, cuadrado, triángulo, rectángulo):").toLowerCase();
    
    switch (forma) {
        case "círculo":
            var radio = parseFloat(prompt("Introduce el radio del círculo:"));
            area = Math.PI * Math.pow(radio, 2);
            console.log("El área del círculo es: " + area);
            break;
        case "cuadrado":
            var lado = parseFloat(prompt("Introduce el lado del cuadrado:"));
            area = Math.pow(lado, 2);
            console.log("El área del cuadrado es: " + area);
            break;
        case "triángulo":
            var base = parseFloat(prompt("Introduce la base del triángulo:"));
            var altura = parseFloat(prompt("Introduce la altura del triángulo:"));
            area = (base * altura) / 2;
            console.log("El área del triángulo es: " + area);
            break;
        case "rectángulo":
            var baseRectangulo = parseFloat(prompt("Introduce la base del rectángulo:"));
            var alturaRectangulo = parseFloat(prompt("Introduce la altura del rectángulo:"));
            area = baseRectangulo * alturaRectangulo;
            console.log("El área del rectángulo es: " + area);
            break;
        default:
            console.log("Forma no válida. Por favor, introduce una de las siguientes formas: círculo, cuadrado, triángulo, rectángulo.");
    }
    if (area) {
        console.log("El área de la forma " + forma + " es: " + area);
    }




