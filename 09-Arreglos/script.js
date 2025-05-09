//ARRAY
var vocales = ['a', 'e', 'i', 'o', 'u'];
console.log(vocales.length);  // 5 //.Length devuelve la cantidad de elementos que tiene el array
console.log(vocales[3]);  // 'a' //Acceder a un elemento del array
// agregar un elemento al array
console.log(vocales.push('y')) ; // Agrega un elemento al final del array
console.log(vocales); // ['a', 'e', 'i', 'o', 'u', 'y']     
//agregar un elemento al inicio del array
console.log(vocales.unshift('x')); // Agrega un elemento al inicio del array
console.log(vocales); // ['x', 'a', 'e', 'i', 'o', 'u', 'y']

// eliminar el ultimo elemento del array
console.log(vocales.pop('y')); // Elimina el último elemento del array
console.log(vocales); // ['x', 'a', 'e', 'i', 'o', 'u']
// eliminar el primer elemento del array
console.log(vocales.shift('x')); // Elimina el primer elemento del array
console.log(vocales); // ['a', 'e', 'i', 'o', 'u']

// eliminar un elemento en una posicion especifica
console.log(vocales.splice(2, 1)); // Elimina un elemento en una posicion especifica
console.log(vocales); // ['a', 'e', 'o', 'u']

//como recorrer un array
for (let i = 0; i < vocales.length; i++) {
    console.log(vocales[i]); // 'a', 'e', 'o', 'u'
}
//recorrer un array con forEach 
vocales.forEach(function(vocal) {
    console.log(vocal); // 'a', 'e', 'o', 'u'
});
// agrear un elemento en una posicion especifica
vocales.splice(2, 0gc, 'i'); // Agrega un elemento en una posicion especifica
console.log(vocales); // ['a', 'e', 'i', 'o', 'u']
vocales[2] = 'i'; // Agrega un elemento en una posicion especifica