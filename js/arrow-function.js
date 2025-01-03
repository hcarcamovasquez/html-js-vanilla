// ==========================================
// FUNCIONES FLECHA (ARROW FUNCTIONS)
// ==========================================

// 1. Comparación entre función tradicional y flecha
// ----------------------------------------------

// Función tradicional
function countFnc(a, b) {
    return a + b;
}
console.log('Función tradicional:', countFnc(2, 3)); // 5

// 2. Funciones flecha - Diferentes sintaxis
// -------------------------------------

// Función flecha con bloque (múltiples líneas)
const countArrowFnc = (a, b) => {
    return a + b;
};
console.log('Función flecha con bloque:', countArrowFnc(2, 3)); // 5

// Función flecha en una línea (return implícito)
const countArrowFncOne = (a, b) => a + b;
console.log('Función flecha en una línea:', countArrowFncOne(2, 3)); // 5

// 3. Función flecha con callback
// --------------------------
const countArrowFncCallback = (a, b, callback) => {
    callback();
    return [a, b]; // Corregido para retornar array en lugar de usar coma
};

// Ejemplo de uso con callback
countArrowFncCallback(1, 3, () => {
    console.log('Se está sumando....');
});

// 4. Ejemplos prácticos con métodos de array
// -------------------------------------

// Array inicial
const numbersArr = [1, 2, 3, 4, 5];

// Usando map para multiplicar cada número por sí mismo
const multiplied = numbersArr.map(num => num * num);
console.log('Array original:', numbersArr);
console.log('Números al cuadrado:', multiplied); // [1, 4, 9, 16, 25]

// Usando reduce para sumar todos los valores
const total = numbersArr.reduce((accumulator, item) => {
    return accumulator + item;
}, 0);
console.log('Suma total:', total); // 15

// 5. Ejemplos adicionales de uso común
// -------------------------------

// Filtrar números pares
const evenNumbers = numbersArr.filter(num => num % 2 === 0);
console.log('Números pares:', evenNumbers); // [2, 4]

// Transformar a string con template literals
const formatted = numbersArr.map(num => `Número: ${num}`);
console.log('Array formateado:', formatted);

// Encontrar el primer número mayor que 3
const firstGreaterThan3 = numbersArr.find(num => num > 3);
console.log('Primer número mayor que 3:', firstGreaterThan3); // 4
