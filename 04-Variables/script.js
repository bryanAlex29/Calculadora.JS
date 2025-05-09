var  nombre = "Juan";
var  edad = 30;
var  ciudad = "Madrid";
var  esEstudiante = true;
var  hobbies = ["futbol", "musica", "lectura"];

//array clave valor 
var  persona = [

    {
        nombre: "Juan",
        edad: 30,
        ciudad: "Madrid",
        esEstudiante: true,
        hobbies: ["futbol", "musica", "lectura"]
    },
    {
        nombre: "Maria",
        edad: 25,
        ciudad: "Barcelona",
        esEstudiante: false,
        hobbies: ["cocina", "pintura"]
    },
    {       

//variable  
    
            nombre: "Pedro",
            edad: 28,
            ciudad: "Valencia",
            esEstudiante: true,
            hobbies: ["deporte", "viajes"]
        }       

        
    ]   


    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("Ciudad: " + ciudad);

    console.log("***********");
    console.log(persona );
    console.log(persona[1]);
    console.log("cuidad es ");
    console.log(persona[1].ciudad);
console.log(persona[1].hobbies[1]);

console.log("***********");
persona.forEach(element => {
    console.log(element.nombre);
    console.log(element.edad);
    console.log(element.ciudad);    
    console.log(element.esEstudiante);
    console.log(element.hobbies);
 });


