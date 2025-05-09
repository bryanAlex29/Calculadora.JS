// estructura selectiva if
var edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres menor de edad");
}
 
var nombre = "bryan";
if (nombre == "bryan") {
    console.log("OK");
}else {
    console.log("NO SEAS SAPO");
}  
//un programa que me permita verificar si una persona es mayor de edad y es de sexo masculino debe imprimir puedes juagr furbol y si es mayor de edad
// y es de sexo femenino debe imprimir puedes jugar a la muñeca
var edad = 18;
var sexo = "masculino";
if (edad >= 18 && sexo == "masculino" || sexo == "femenino") {
    console.log("Puedes jugar futbol");
}
else if (edad >= 18 && sexo == "femenino") {
    console.log("Puedes jugar a la muñeca");

} 
//todas las tablas del 1 al 12
for (var i = 1; i <= 12; i++) {
    console.log("Tabla del " + i);
    for (var j = 1; j <= 12; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}
