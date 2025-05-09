// crear un objeto JSON
var persona = {
    nombre: "Juan",       
    edad: 30,
    ciudad: "Madrid",};

    console.log(persona);
console.log(persona.nombre); // Juan 
console.log(persona["edad"]); // 30
console.log(persona.ciudad); // Madrid

var curso = [
{
    nombre: "Java",
    duracion: "5",
    profesor: "Juan", 
},
{
    nombre: "Python",
    duracion: "4",
    profesor: "Maria", 
},
{
    nombre: "C++",
    duracion: "6",
    profesor: "Luis", 
},
];
    //imprimir el objeto JSON

console.log(curso); // Java
curso.forEach(element => {
    console.log("el nombre del curso es: " + element.nombre + " y su duracion es: " + element.duracion + " y el profesor es: " + element.profesor);
    console.log("el nombre del curso es: " + element.nombre + " y su duracion es: " + element.duracion + " y el profesor es: " + element.profesor);
    console.log("el nombre del curso es: " + element.nombre + " y su duracion es: " + element.duracion + " y el profesor es: " + element.profesor);
});

