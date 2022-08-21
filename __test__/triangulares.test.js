const MetodosMatematicos = require('../src/metodosClase')
const objMetodos = new MetodosMatematicos()
describe("Triangulares", ()=>{
    test('Término 10 de los numeros triangulares', ()=>{        
        expect(objMetodos.numTriangulares(10)).toBe(55)
    })      
})
describe("Término 15 de los numeros triangulares", ()=>{
    test('Triangulares', ()=>{        
        expect(objMetodos.numTriangulares(15)).toBe(120)
    })      
})
describe("Término 20 de los numeros triangulares", ()=>{
    test('Triangulares', ()=>{        
        expect(objMetodos.numTriangulares(20)).toBe(210)
    })      
})
describe("Término 21 de los numeros triangulares", ()=>{
    test('Triangulares', ()=>{        
        expect(objMetodos.numTriangulares(21)).toBe(231)
    })      
})
describe("Término 23 de los numeros triangulares", ()=>{
    test('Triangulares', ()=>{        
        expect(objMetodos.numTriangulares(23)).toBe(276)
    })      
})
describe("Término 1 de los numeros triangulares", ()=>{
    test('La serie empieza en 1 para tomar los terminos desde ahí, el 1 es 1', ()=>{        
        expect(objMetodos.numTriangulares(1)).toBe(1)
    })      
})

describe("Término 0 de los numeros triangulares", ()=>{
    test('El 0 no lo contemplo para que podamos tomar los terminos como sucesión y no como arreglo', ()=>{        
        expect(objMetodos.numTriangulares(0)).toBe("La sucesión empieza en 1")
    })      
})


describe("Término 3 de los numeros triangulares", ()=>{
    test('Triangulares', ()=>{        
        expect(objMetodos.numTriangulares(3)).toBe(6)
    })      
})

describe("Término 17 de los numeros triangulares", ()=>{
    test('Triangulares', ()=>{        
        expect(objMetodos.numTriangulares(17)).toBe(153)
    })      
})

describe("Término 100 de los numeros triangulares", ()=>{
    test('Triangulares', ()=>{        
        expect(objMetodos.numTriangulares(36)).toBe(666)
    })      
})