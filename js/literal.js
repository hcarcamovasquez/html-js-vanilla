// ==========================================
// TEMPLATE LITERALS (PLANTILLAS LITERALES)
// ==========================================

// 1. Variables de ejemplo
// -------------------
const fullName = 'Humberto Carcamo';
const age = 33;
const profession = 'desarrollador';
const yearsExperience = 5;

// 2. Concatenación tradicional vs Template Literals
// ------------------------------------------

// Concatenación tradicional con '+'
const normalConcat = 'Hola soy ' + fullName + ' y tengo ' + age + ' años';
console.log('Concatenación normal:', normalConcat);

// Template literal básico
const templateConcat = `Hola soy ${fullName} y tengo ${age} años`;
console.log('Template literal:', templateConcat);

// 3. Ventajas de Template Literals
// ---------------------------

// Múltiples líneas
const multiLine = `
    Nombre: ${fullName}
    Edad: ${age}
    Profesión: ${profession}
`;
console.log('Múltiples líneas:', multiLine);

// Expresiones dentro de ${}
const presentation = `Me llamo ${fullName.toUpperCase()} 
y tengo ${age + 1} años el próximo año`;
console.log('Con expresiones:', presentation);

// 4. Casos de uso comunes
// -------------------

// HTML template
const htmlTemplate = `
    <div class="user-card">
        <h2>${fullName}</h2>
        <p>Edad: ${age}</p>
        <p>Profesión: ${profession}</p>
        <p>${yearsExperience > 3 ? 'Senior' : 'Junior'} Developer</p>
    </div>
`;
console.log('Template HTML:', htmlTemplate);

// Cálculos matemáticos
const mathTemplate = `El doble de mi edad es ${age * 2}`;
console.log('Cálculos:', mathTemplate);

// 5. Tagged Templates
// ---------------
function myTag(strings, ...values) {
    let str = '';
    for (let i = 0; i < values.length; i++) {
        str += strings[i] + values[i].toString().toUpperCase();
    }
    str += strings[strings.length - 1];
    return str;
}

const taggedTemplate = myTag`Hola soy ${fullName} y soy ${profession}`;
console.log('Tagged template:', taggedTemplate);

// 6. Ejemplo con objetos
// ------------------
const user = {
    name: fullName,
    age: age,
    getInfo() {
        return `${this.name} tiene ${this.age} años`;
    }
};

console.log('Método de objeto:', user.getInfo());