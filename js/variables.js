// ========================================
// VARIABLES EN JAVASCRIPT: var, let, const
// ========================================

// 1. var - Variable con alcance de función o global
// -----------------------------------------------
// - Puede ser redeclarada
// - Puede ser reasignada
// - Tiene hoisting (elevación)

var varName = 'Gabriel';
console.log('Valor inicial de varName:', varName); // 'Gabriel'

varName = 11; // Reasignación permitida
console.log('Valor después de reasignar:', varName); // 11

// 2. let - Variable con alcance de bloque
// -------------------------------------
// - No puede ser redeclarada en el mismo ámbito
// - Puede ser reasignada
// - No tiene hoisting

let birthday = 50;
console.log('Valor inicial de birthday:', birthday); // 50

birthday = 51; // Reasignación permitida
console.log('Valor después de reasignar:', birthday); // 51

// Ejemplo de alcance de bloque con let
{
    let birthday = 25; // Esta es una variable diferente
    console.log('birthday dentro del bloque:', birthday); // 25
}
console.log('birthday fuera del bloque:', birthday); // 51

// 3. const - Constante con alcance de bloque
// ---------------------------------------
// - No puede ser redeclarada
// - No puede ser reasignada
// - No tiene hoisting

const IVA = 0.19;
console.log('Valor de IVA:', IVA); // 0.19

// Intentar reasignar una constante causará un error
// IVA = 0.21; // TypeError: Assignment to constant variable

// Nota: aunque const no permite reasignación, si el valor es un objeto
// sus propiedades sí pueden ser modificadas
const persona = {
    nombre: 'Gabriel',
    edad: 25
};
persona.edad = 26; // Esto es válido
console.log('persona:', persona);