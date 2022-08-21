const MetodosMatematicos = require('../src/metodosClase')
const objMetodos = new MetodosMatematicos()
describe("Numeros primos", ()=>{
    test('Término -10 de los numeros primos', ()=>{        
        expect(objMetodos.numPrimos(-10)).toBe("ERROR")
    })      
})
describe("Término 15 de los numeros primos", ()=>{
    test('Numeros primos', ()=>{        
        expect(objMetodos.numPrimos(15)).toBe(47)
    })      
})
describe("Término 20 de los numeros primos", ()=>{
    test('Numeros primos', ()=>{        
        expect(objMetodos.numPrimos(20)).toBe(71)
    })      
})
describe("Término 21 de los numeros primos", ()=>{
    test('Numeros primos', ()=>{        
        expect(objMetodos.numPrimos(21)).toBe(73)
    })      
})
describe("Término 23 de los numeros primos", ()=>{
    test('Numeros primos', ()=>{        
        expect(objMetodos.numPrimos(23)).toBe(83)
    })      
})
describe("Término 1 de los numeros primos", ()=>{
    test('La serie empieza en 1 para tomar los terminos desde ahí, el 1 es 1', ()=>{        
        expect(objMetodos.numPrimos(1)).toBe(2)
    })      
})

describe("Término 0 de los numeros primos", ()=>{
    test('El 0 no lo contemplo para que podamos tomar los terminos como sucesión y no como arreglo', ()=>{        
        expect(objMetodos.numPrimos(0)).toBe("La sucesión empieza en 1")
    })      
})


describe("Término 3 de los numeros primos", ()=>{
    test('Numeros primos', ()=>{        
        expect(objMetodos.numPrimos(3)).toBe(5)
    })      
})

describe("Término 17 de los numeros primos", ()=>{
    test('Numeros primos', ()=>{        
        expect(objMetodos.numPrimos(17)).toBe(59)
    })      
})

describe("Término 100 de los numeros primos", ()=>{
    test('Numeros primos', ()=>{        
        expect(objMetodos.numPrimos(36)).toBe(151)
    })      
})