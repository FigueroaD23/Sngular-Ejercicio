class MetodosMatematicos {
    fibonacci(n){        
        let fibonacci = [0,1];   
        if(n<0) return "ERROR"     
        if(n == 1 ) return 1
        if(n == 0) return "La sucesión empieza en 1"
        for (let i = 2; fibonacci.length<=n; i++) {
            fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];            
        }
        return fibonacci[n-1]
    }

    numPrimos (n){        
        if(n<0) return "ERROR"     
        if(n == 0) return "La sucesión empieza en 1"
        if(n == 1 ) return 2
        let nPrimos = []
        for (let i = 2; nPrimos.length<=n; i++) {
            if(this.esPrimo(i))
            nPrimos.push(i)
        }
        return nPrimos[n-1]
    
    }
    
     esPrimo = numero => {        
        if (numero == 0 || numero == 1 || numero == 4) return false;
        for (let x = 2; x < numero / 2; x++) {
            if (numero % x == 0) return false;
        }        
        return true;
    }

    numTriangulares(n){        
        if(n<0) return "ERROR"     
        if(n == 1 ) return 1
        if(n == 0) return "La sucesión empieza en 1"
        let nTriangulares = [0,1]
        for (let i = 2; nTriangulares.length<=n; i++) {
         nTriangulares[i] = i + nTriangulares[i-1]
        }
        nTriangulares.shift() //para quitar el 0
        return nTriangulares[n-1]
    }
}

module.exports = MetodosMatematicos

/* const objMetodos = new MetodosMatematicos()

console.log(MetodosMatematicos.numPrimos(10))
console.log(objMetodos.fibonacci(10))
console.log(objMetodos.numTriangulares(10)) */