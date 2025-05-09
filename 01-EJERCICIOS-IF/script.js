//. Clasificador de Temperatura: Crea un programa que solicite al usuario un valor de temperatura y
 //lo clasifique como "Congelado" (por debajo de 0°C), "Frío" (0-15°C), "Templado" (16-25°C) o
 //"Caliente" (por encima de 25°C).

 var temperatura = parseFloat(prompt("Introduce la temperatura en grados Celsius:"));
 if (temperatura < 0) {
     console.log("Congelado");
 } else if (temperatura >= 0 && temperatura <= 15) {        
        console.log("Frío");
    }
    else if (temperatura > 15 && temperatura <= 25) {
            console.log("Templado");
        } else {
            console.log("Caliente");
        }

//2.
//escribe la calificaion entre cero y 100
var calificacion = 40;
if(calificacion >=90 && calificacion <=100){
    console.log("LA CALIFICAION ES:");
console.log("Aprobado con A");
}if (calificacion>=80 && calificacion <=89){
    console.log("LA CALIFICAION ES:");
    console.log("B");
}if (calificacion>=70 && calificacion <=79){
    console.log("LA CALIFICAION ES:");
    console.log("C");       
}if (calificacion>=60 && calificacion <=69){
    console.log("LA CALIFICAION ES:");
    console.log("D");
}else if (calificacion>=0 && calificacion <=59){
    console.log("LA CALIFICAION ES:");
    console.log("F");
}
 
// Verificador de Año Bisiesto: Crea un programa que determine si un año dado es bisiesto. Un año
// es bisiesto si es divisible por 4, pero no por 100 a menos que también sea divisible por 400.
var anio = 2021;
if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0)) {
    console.log(anio + " es un año bisiesto.");
}
else {
    console.log(anio + " no es un año bisiesto.");
}
//3
var numeroDeLados = 5;
if (numeroDeLados == 3) {
    console.log("Triángulo Equilatero");
}
else if (numeroDeLados == 2) {
    console.log("Triángulo Isósceles");
}
else if (numeroDeLados == 1) {
    console.log("Triángulo Escaleno");
} else if (numeroDeLados == 4) {
    console.log("NO ES UN TRIANGULO");
}
//4
var numero = -5;
if(numero >0){
    console.log("El numero es positivo");
}else if(numero < 0){
    console.log("El numero es negativo");
}



 

