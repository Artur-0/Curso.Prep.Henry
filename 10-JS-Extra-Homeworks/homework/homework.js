// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array= [];
  for (const key in objeto) {
        array.push([key, objeto[key]])
    }
    return array;
  }



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí    -pasar el string a un array /  recorremos el array con un for, y usamos un if para contar las cantidades de veces que se repite la letra.
it = {};
for (let i = 0; i < string.length; i++) {

 if(Object.keys(it).includes(string[i])){
it[string[i]] = it[string[i]]+1;
 }
 else{
   it[string[i]] = 1;
 }
}
return it;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 let lowerCase = "";
 let upperCase = "";
 for (let i = 0; i < s.length; i++) {
   if(s[i] === s[i].toUpperCase()){
     upperCase = upperCase + s[i];
   }
   else{
     lowerCase = lowerCase + s[i];
   }
 }
return upperCase+lowerCase;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let reverseFrase = str.split(" ").map(function(word){
        return word.split("").reverse().join('')
  }).join(" ")
  return reverseFrase;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let sNumber = numero.toString();
  let alReves = sNumber.split('').reverse().join('');

  if(sNumber === alReves) return 'Es capicua';
  else return 'No es capicua';
  }



function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí    recorrer el string letra x letra y si tiene una de las letras eliminarla. devolver el resultado

let array = cadena.split('');
for (let i = 0; i < array.length; i++) {
  if (array[i]=="a"|| array[i]=="b"|| array[i]=="c"){
   delete array[i];
  }
}

return array.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí contar la longitud de cada string compararlos y devolver de menor a mayor.
  
  let newArray = arr.sort(function(currentElement, nextElement){
    return currentElement.length - nextElement.length;
  })
  return newArray;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  recorrer los arreglos y compararlos
let  newArr = []
  for (let i = 0; i < arreglo1.length; i++) {
    for(let j = 0;j<arreglo2.length; j++){
  if(arreglo1[i] === arreglo2[j]){
newArr.push(arreglo1[i])
  }
  }
}
return newArr;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

