const MetodosMatematicos = require('../src/metodosClase')
const objMetodos = new MetodosMatematicos()
describe("Fibonacci", ()=>{
    test('Término 10 de la serie fibonacci', ()=>{        
        expect(objMetodos.fibonacci(10)).toBe(34)
    })      
})
describe("Término 15 de la serie fibonacci", ()=>{
    test('Fibonacci', ()=>{        
        expect(objMetodos.fibonacci(15)).toBe(377)
    })      
})
describe("Término 20 de la serie fibonacci", ()=>{
    test('Fibonacci', ()=>{        
        expect(objMetodos.fibonacci(20)).toBe(4181)
    })      
})
describe("Término 21 de la serie fibonacci", ()=>{
    test('Fibonacci', ()=>{        
        expect(objMetodos.fibonacci(21)).toBe(6765)
    })      
})
describe("Término 23 de la serie fibonacci", ()=>{
    test('Fibonacci', ()=>{        
        expect(objMetodos.fibonacci(23)).toBe(17711)
    })      
})
describe("Término 1 de la serie fibonacci", ()=>{
    test('La serie empieza en 1 para tomar los terminos desde ahí, el 1 es 1', ()=>{        
        expect(objMetodos.fibonacci(1)).toBe(1)
    })      
})

describe("Término 0 de la serie fibonacci", ()=>{
    test('El 0 no lo contemplo para que podamos tomar los terminos como sucesión y no como arreglo', ()=>{        
        expect(objMetodos.fibonacci(0)).toBe("La sucesión empieza en 1")
    })      
})


describe("Término 3 de la serie fibonacci", ()=>{
    test('Fibonacci', ()=>{        
        expect(objMetodos.fibonacci(3)).toBe(1)
    })      
})

describe("Término 17 de la serie fibonacci", ()=>{
    test('Fibonacci', ()=>{        
        expect(objMetodos.fibonacci(17)).toBe(987)
    })      
})

describe("Término 100 de la serie fibonacci", ()=>{
    test('Fibonacci', ()=>{        
        expect(objMetodos.fibonacci(36)).toBe(9227465)
    })      
})