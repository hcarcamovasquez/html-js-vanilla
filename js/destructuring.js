// ==========================================
// DESTRUCTURACIÓN Y OPERADOR SPREAD
// ==========================================

// 1. Objeto de ejemplo
// -------------------
const car = {
    mark: 'Toyota',
    color: 'grey',
    model: 'Yaris',
    year: 2025
};

// Forma tradicional de acceso
console.log('Tradicional:', car.mark + ' ' + car.model);

// 2. Destructuración básica de objetos
// --------------------------------
const { mark, model } = car;
console.log('Destructuración básica:', mark + ' ' + model);

// 3. Destructuración con alias
// ------------------------
const { mark: carMark, model: carModel } = car;
console.log('Con alias:', carMark + ' ' + carModel);

// 4. Destructuración de arrays
// ------------------------
const marks = ['toyota', 'audi', 'nissan'];
const [toyota, audi, nissan] = marks;
console.log('Array destructurado:', toyota, audi, nissan);

// 5. Operador Spread con objetos
// --------------------------
const { mark: newMark, ...rest } = car;
console.log('Marca:', newMark);
console.log('Resto del objeto:', rest);

// 6. Operador Spread con arrays
// ------------------------
const [, ...restOfMarks] = marks;
console.log('Array sin primer elemento:', restOfMarks);

// 7. Parámetros Rest en funciones
// ---------------------------
const sumValues = (...values) => {
    return values.reduce((accumulator, item) => accumulator + item, 0);
};

// Ejemplo de uso con múltiples argumentos
console.log('Suma:', sumValues(5, 2, 3, 4, 5));

// 8. Ejemplos adicionales de uso común
// -------------------------------

// Combinar objetos
const carBasicInfo = { mark: 'Toyota', model: 'Yaris' };
const carDetails = { color: 'grey', year: 2025 };
const completeCar = { ...carBasicInfo, ...carDetails };
console.log('Objetos combinados:', completeCar);

// Clonar arrays
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
console.log('Array clonado:', clonedArray);

// Añadir elementos a un array
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log('Array expandido:', moreNumbers);

// Destructuración con valores por defecto
const { price = 'No disponible' } = car;
console.log('Precio (con valor por defecto):', price);

// Destructuración anidada
const company = {
    name: 'CarCo',
    location: {
        city: 'Madrid',
        country: 'España'
    }
};
const { location: { city, country } } = company;
console.log('Ubicación:', city, country);